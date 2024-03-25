import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import './App.css'

function App(){
    const [images,setImages]=useState([])
    const handleSubmit =async(item) =>{
        const result=await searchImages(item);
        setImages(result);
        console.log(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    );
}

export default App;