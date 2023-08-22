import React from "react";
import PropTypes from "prop-types";
import LocalizationValue from "../../utils/localization.js";

function NoteInput({ title, onTitleChange, onBodyChange }) {
  return (
    <>
      <input
        className="add-new-page__input__title"
        type="text"
        placeholder={LocalizationValue({
          id: "Judul catatan...",
          en: "Note title...",
        })}
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <div
        className="add-new-page__input__body"
        data-placeholder={LocalizationValue({
          id: "Isi catatan...",
          en: "Enter some additional notes...",
        })}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={(e) => onBodyChange(e.currentTarget.innerHTML)}
      />
    </>
  );
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default NoteInput;
