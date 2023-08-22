import React from "react";
import LocalizationValue from "../../utils/localization.js";

export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>
        {LocalizationValue({ id: "Tidak ditemukan", en: "Page not found" })}
      </p>
    </div>
  );
}
