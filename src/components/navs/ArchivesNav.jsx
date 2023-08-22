import React from "react";
import { Link } from "react-router-dom";
import LocalizationValue from "../../utils/localization.js";

export default function ArchivesNav() {
  return (
    <li>
      <Link to={"/archives"}>
        {LocalizationValue({ id: "Arsip", en: "Archives" })}
      </Link>
    </li>
  );
}
