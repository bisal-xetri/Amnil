
import countryFacts from "../api/CountryData.json"
export const About = () => {
  return (
  <section className="section-about container">
    <h2 className="container-title">
      Here are the Interesting facts 
      <br />
      we're proud of
    </h2>
    <div className="gradient-cards">
      {countryFacts.map((country,inx)=>{
        return <div className="card" key={inx}>
        <div className="container-card bg-blue-box">
          <p className="card-title">
            {country.countryName}
          </p>
          <p>
          <span className="card-description">Capital:</span>
          {country.capital}
          </p>
          <p>
          <span className="card-description">Population:</span>
        {country.population}
          </p>
          <p>
          <span className="card-description">InterestingFacts:</span>
          {country.interestingFact}
          </p>
        </div>
      </div>
      })}
      
    </div>
  </section>
  )
}
