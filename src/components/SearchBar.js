import { useState } from "react";
import './SearchBar.css'


function SearchBar({onSubmit}){

    const [value, setValue] = useState('');
    //need to tell from child to parent
    const handleFormSubmit=(event)=>{
      event.preventDefault();
      console.log({onSubmit});
      onSubmit(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
        <label className="search-label">Search </label>
        <input className="search-input" value={value} onChange={handleChange}/>
        {/* <p>Your Text : {value}</p> */}
        </form>
    </div>
    );
}
export default SearchBar;