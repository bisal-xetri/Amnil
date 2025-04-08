import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//Http get method
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};
//http get method for individuual country name

export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders`
  );
};
