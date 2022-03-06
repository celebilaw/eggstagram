import React, {useState} from 'react'
import '../css/SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
//import axios from 'axios'

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.description.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    
    return (
        <div className="search" >
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? ( <SearchIcon /> ) : ( <CloseIcon id="clearBtn" onClick={clearInput}/> )}
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                        <a className="dataItem" href="#">
                            <p>{value.description} </p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    );
}

export default SearchBar