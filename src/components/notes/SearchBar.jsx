import React from "react";
import PropTypes from "prop-types";
import LocalizationValue from "../../utils/localization.js";

function SearchBar({ keyword, onSearch }) {
  return (
    <div className={`search-bar`}>
      <input
        type={"text"}
        placeholder={LocalizationValue({
          id: "Cari catatan...",
          en: "Search notes...",
        })}
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
