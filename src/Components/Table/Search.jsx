import { useState } from 'react'
import './Search.css'

const Search = ({children, data, setFilteredData, field}) => {
    const [searchInput, setSearchInput] = useState ('')

    const handleSearch = (e) => {
        e.preventDefault()
        console.log (e.target.children[0].value)
        const filteredData = data.filter (call => {
            const searchString = call [field].toString().trim().toLowerCase()
            return (searchString.indexOf (searchInput.toLowerCase()) !== -1)
        })
        setFilteredData(filteredData)
    }
    return (
        <form className="table-search" onSubmit={handleSearch}>
            <input type="text" value={searchInput} placeholder={children} onChange={e=> setSearchInput(e.target.value)}/>
        </form>
    )
}

export default Search