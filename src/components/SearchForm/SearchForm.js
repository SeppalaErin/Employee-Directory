import React from "react";
import "./SearchForm.css";
function SearchForm (props) {
    return (
        <form className = "search mx-auto">
            <div className="my-4">
                <input value={props.search}  onChange={props.handleInputChange} className="form-control" id="searchInput" placeholder="Search" />
            </div>
        </form>

    );
}

export default SearchForm;