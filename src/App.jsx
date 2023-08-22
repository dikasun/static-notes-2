import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddNotePage from "./pages/AddNotePage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import { getUserLogged } from "./utils/network-data.js";
import { LocaleProvider, LocaleType } from "./context/LocaleContext.js";
import { ThemeProvider, ThemeType } from "./context/ThemeContext.js";
import { LoadingProvider } from "./context/LoadingContext.js";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [theme, setTheme] = useState(ThemeType.DARK);
  const [locale, setLocale] = useState(LocaleType.ID);
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme =
        prevTheme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
      window.document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      let newLocale =
        prevLocale === LocaleType.ID ? LocaleType.EN : LocaleType.ID;
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };
  const toggleLoading = () => {
    setLoading((prevState) => !prevState);
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);
  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);
  const loadingContextValue = useMemo(() => {
    return {
      loading,
      toggleLoading,
    };
  }, [loading]);

  useEffect(() => {
    toggleLoading();
    getUserLogged().then((res) => {
      setAuthUser(res.error ? null : res.data);
      toggleLoading();
    });
    setTheme(localStorage.getItem("theme"));
    setLocale(localStorage.getItem("locale"));
  }, []);

  return (
    <LoadingProvider value={loadingContextValue}>
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
          <div className="app-container">
            <Header authUser={authUser} />
            <main>
              {loading ? (
                <p>Loading....</p>
              ) : authUser !== null ? (
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/archives" element={<ArchivePage />} />
                  <Route path="/notes/:id" element={<DetailPage />} />
                  <Route path="/notes/new" element={<AddNotePage />} />
                </Routes>
              ) : (
                <Routes>
                  <Route
                    path="/*"
                    element={
                      <LoginPage
                        onLoginSuccess={(data) => {
                          setAuthUser(data);
                        }}
                      />
                    }
                  />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              )}
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    </LoadingProvider>
  );
}

export default App;
