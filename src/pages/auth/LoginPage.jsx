import React, { useContext } from "react";
import EmailField from "../../components/fields/EmailField.jsx";
import PasswordField from "../../components/fields/PasswordField.jsx";
import useInput from "../../hooks/useInput.js";
import TextSubmitButton from "../../components/buttons/TextSubmitButton.jsx";
import { Link } from "react-router-dom";
import {
  getUserLogged,
  login,
  putAccessToken,
} from "../../utils/network-data.js";
import PropTypes from "prop-types";
import LocalizationValue from "../../utils/localization.js";
import LoadingContext from "../../context/LoadingContext.js";

function LoginPage({ onLoginSuccess }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const { toggleLoading } = useContext(LoadingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .then((res) => {
        toggleLoading();
        if (!res.error) {
          putAccessToken(res.data.accessToken);
          getUserLogged().then((res) => !res.error && onLoginSuccess(res.data));
        }
      })
      .finally(() => toggleLoading());
  };

  return (
    <>
      <h2>
        {LocalizationValue({
          id: "Yuk, login untuk menggunakan aplikasi.",
          en: "Login to use app, please.",
        })}
      </h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <EmailField onValueChange={onEmailChange} value={email} />
        <PasswordField
          onValueChange={onPasswordChange}
          value={password}
          label={"Password"}
        />
        <TextSubmitButton
          text={LocalizationValue({ id: "Masuk", en: "Login" })}
        />
      </form>
      <p>
        {LocalizationValue({
          id: "Belum punya akun?",
          en: "Don't have an account?",
        })}{" "}
        <Link to="/register">
          {LocalizationValue({ id: "Daftar di sini", en: "Register here" })}
        </Link>
      </p>
    </>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
