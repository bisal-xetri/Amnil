import { useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../api/postApi";
import { useState } from "react";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [search, setSearch] = useState(""); // Initialize as an empty string
  const [filter, setFilter] = useState("all");
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion=(country)=>{
    if(filter==="all")return country;
    return country.region===filter;
  }

  // Main search logic
  const filterCountry = countries.filter((country) => searchCountry(country)&& filterRegion(country));

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountry.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
      </ul>
    </section>
  );
};
