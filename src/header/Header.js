import "./Header.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link } from "react-router-dom";
import { ChangeLanguageButton } from "../changeLanguageButton/changeLanguageButton";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { showPopupAsync, hidePopupAsync } from "../redux/actions";
import { scrollUp } from "../utils/scrollUp";

export const Header = () => {
  const { t } = useTranslation();

  const DefaultHeader = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileHeader = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const url = useSelector((state) => state.url);
  const dispatch = useDispatch();

  const [isSticky, setSticky] = useState(false);

  const handleScroll = useCallback(
    () => {
    if (window.pageYOffset === 0) {
      setSticky(false);
    }

    if (window.pageYOffset > 0) {
      setSticky(true);
    }
  },[],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, handleScroll]);

  return (
    <>
      {MobileHeader && (
        <div className="header-mobile">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          <div className="header-wrapper-mobile">
            <Link to="/">
              <div className="logo-mobile">
                <div className="logo-icon-mobile"></div>
              </div>
            </Link>
            <Link to="/menu" className="menu-mobile">
              <div className="burger-button-mobile"></div>
            </Link>
          </div>
        </div>
      )}

      {DefaultHeader && (
        <>
        <div className={`header ${isSticky ? "header-scrolled" : ""}`}>
          <div
            className="opacity"
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          <div className="header-wrapper">
            <Link to="/" onClick={scrollUp}>
              <div className="logo">
                <div
                  className={`logo-icon ${isSticky ? "logo-scrolled" : ""}`}
                ></div>
              </div>
            </Link>
            <nav className="nav">
              <Link to="/" onClick={scrollUp}>
                <div className="home">{t("home")}</div>
              </Link>
              <Link to="/platform" onClick={scrollUp}>
                <div className="platform">{t("platform")}</div>
              </Link>
              <Link to="/about-app" onClick={scrollUp}>
                <div className="about-app">{t("about-app")}</div>
              </Link>
              <Link to="/study-page" onClick={scrollUp}>
                <div className="study-page">{t("study-page")}</div>
              </Link>
              <Link to={{ pathname: url }} target="_blank" onClick={scrollUp}>
                <div className="demo">
                  {t("demo")}
                </div>
              </Link>
              <div
                className="contact-us"
                onClick={() => dispatch(showPopupAsync(isActive))}
              >
                {t("contact-us")}
              </div>
              <ChangeLanguageButton />
            </nav>
          </div>
        </div>
        </>
      )}
      
  
    </>
  );
};
