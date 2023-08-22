import { useContext } from "react";
import { LocaleContext, LocaleType } from "../context/LocaleContext.js";
import PropTypes from "prop-types";

function LocalizationValue({ id, en }) {
  const { locale } = useContext(LocaleContext);
  return locale === LocaleType.EN ? en : id;
}

LocalizationValue.propTypes = {
  id: PropTypes.string.isRequired,
  en: PropTypes.string.isRequired,
};

export default LocalizationValue;
