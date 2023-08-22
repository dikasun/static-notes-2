import React, { useContext } from "react";
import useInput from "../../hooks/useInput.js";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/network-data.js";
import EmailField from "../../components/fields/EmailField.jsx";
import PasswordField from "../../components/fields/PasswordField.jsx";
import TextSubmitButton from "../../components/buttons/TextSubmitButton.jsx";
import BasicField from "../../components/fields/BasicField.jsx";
import LocalizationValue from "../../utils/localization.js";
import LoadingContext from "../../context/LoadingContext.js";

export default function RegisterPage() {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [confirmPassword, onConfirmPasswordChange] = useInput();
  const navigate = useNavigate();
  const { toggleLoading } = useContext(LoadingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password })
      .then((res) => {
        toggleLoading();
        !res.error && navigate("/");
      })
      .finally(() => toggleLoading());
  };

  return (
    <>
      <h2>
        {LocalizationValue({
          id: "Isi form untuk mendaftar akun.",
          en: "Fill the form to register account.",
        })}
      </h2>
      <form className="input-register" onSubmit={handleSubmit}>
        <BasicField
          onValueChange={onNameChange}
          value={name}
          label={LocalizationValue({ id: "Nama", en: "Name" })}
        />
        <EmailField onValueChange={onEmailChange} value={email} />
        <PasswordField
          onValueChange={onPasswordChange}
          value={password}
          label={"Password"}
        />
        <PasswordField
          onValueChange={onConfirmPasswordChange}
          value={confirmPassword}
          label={LocalizationValue({
            id: "Konfirmasi Password",
            en: "Confirm Password",
          })}
        />
        <TextSubmitButton
          text={LocalizationValue({ id: "Daftar", en: "Register" })}
        />
      </form>
      <p>
        {LocalizationValue({
          id: "Sudah punya akun?",
          en: "Already have an account?",
        })}{" "}
        <Link to="/">
          {LocalizationValue({ id: "Masuk di sini", en: "Login here" })}
        </Link>
      </p>
    </>
  );
}
