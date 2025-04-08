

// eslint-disable-next-line react/prop-types
export const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {
    const handleInputChange=(e)=>{
        e.preventDefault()
      setSearch(e.target.value)
    }
    const handleSelectChange =(event)=>{
        event.preventDefault()
setFilter(event.target.value)
    }
    const sortCountry=(value)=>{
       const sortCountries=[...countries].sort((a,b)=>{
        return value==='asc'?a.name.common.localeCompare(b.name.common):
        b.name.common.localeCompare(a.name.common)
       })
      setCountries(sortCountries)
    }
  return (
    <section className="section-searchFilter container">
        <div>
        <input type="text" placeholder="Search" value={search} onChange={handleInputChange} />
        </div>

            <div>
                <button onClick={()=>sortCountry("asc")}>Asc</button>
            </div>
            <div>
                <button onClick={()=>sortCountry("dsc")}>Dsc</button>
            </div>

        <div>
            <select  className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}
