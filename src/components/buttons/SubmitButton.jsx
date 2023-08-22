import React from "react";
import { FaCheck } from "react-icons/fa";

export default function SubmitButton() {
  return (
    <button className="action add-new-page__action" type="submit">
      <FaCheck className="action" />
    </button>
  );
}
