import React, {useState} from 'react'
import '../css/SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.text.toLowerCase().includes(searchWord.toLowerCase());
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
                        <a className="dataItem search-bar" href={"http://localhost:3000/posts/"+value._id}>
                            <p>{value.text} </p>
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    );
}

export default SearchBar