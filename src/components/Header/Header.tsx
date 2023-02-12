import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants/header";
import ChevronDown from "./svg/ChevronDown";
import Logo from "./svg/Logo"; 
import Search from "./svg/Search";
import "./Header.css";
import useComponentVisible from "../../hooks/useComponentVisible";
import LoginModal from "../LoginModal/LoginModal";
import User from "./svg/User";
import Bag from "./svg/Bag";
import Whatsapp from "./svg/Whatsapp";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import MenuBar from "./components/MenuBar/MenuBar";

export const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const {
    ref: searchRef,
    isComponentVisible: isSearchVisible,
    setIsComponentVisible: setIsSearchVisible,
  } = useComponentVisible(false);

  const {
    ref: loginModalRef,
    isComponentVisible: isLoginModalVisible,
    setIsComponentVisible: setIsLoginModalVisible,
  } = useComponentVisible(false);

  const [isMobile] = useState<boolean>(useCheckMobileScreen());
  const [dropdownValue, setDropdownValue] = useState<string>("All Categories");
  const [searchValue, setSearchValue] = useState<string>("");

  function selectCategories(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    const value = e.currentTarget.textContent?.toString();
    setDropdownValue(value!);
    setIsComponentVisible(!isComponentVisible);
  }

  function handleInputValue(e: React.KeyboardEvent<HTMLInputElement>): void {
    setSearchValue(e.currentTarget.value);
    setIsSearchVisible(true);
  }

  console.log(searchValue);

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="contact-details">
            <div className="logo">
              <Link to="/" title="Home solutions kart">
                <Logo></Logo>
              </Link>
            </div>
            {/* <div className="contact-phone cursor-unset">
              <div className="phone-logo">
                <div>
                  <Phone></Phone>
                </div>
              </div>

              <span>
                <a href={"tel:" + data.Mobile}>{data.Mobile}</a>
              </span>
            </div>

            <div className="contact-email cursor-unset">
              <div className="email-logo">
                <div>
                  <Mail></Mail>
                </div>
              </div>

              <span>
                <a href={"mailto:" + data.Email}>{data.Email}</a>
              </span>
            </div> */}

            <div className="companyName">
              <h5 title="Home solutions kart">Home Solutions Kart</h5>
            </div>
          </div>

          <div className="helpAndSupport">
            <Link className="anchorLinks" to="/needHelp" title="Need Help">
              Need Help?
            </Link>

            <div
              className="whatsapp"
              title="Start on whatsapp"
              onClick={() =>
                window.open(isMobile ? data.WhatsappMobile : data.Whatsapp)
              }
            >
              <Whatsapp />
            </div>
            <button
              className="userButton"
              onClick={() => setIsLoginModalVisible(!isLoginModalVisible)}
            >
              <div>
                <div className="user">
                  <User />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <header>
          <div className="container">
            <div className="logo-div">
              <Link to="/" className="logo-Link">
                <Logo></Logo>
              </Link>
            </div>
            <div className="searchBarDiv">
              <div className="searchBar">
                <div className="search">
                  {/* SearchIcon */}
                  <div className="search-icon">
                    <div>
                      <Search />
                    </div>
                  </div>
                  {/* Input Search  */}
                  <div className="searchInputDiv">
                    <div className="searchInput">
                      <input
                        type="search"
                        placeholder="Search and hit enter..."
                        className="search-field"
                        onKeyDown={(e) => handleInputValue(e)}
                      />
                    </div>
                  </div>
                  {/* Search Dropdown */}
                  <div className="category-dropdown" ref={ref}>
                    <div
                      className="category-dropdown-handler flexrow"
                      onClick={() => setIsComponentVisible(!isComponentVisible)}
                    >
                      <span>{dropdownValue}</span>
                      <div className="search-arrow">
                        <div>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`menu-item-holder ${
                        isComponentVisible ? "active" : ""
                      }`}
                    >
                      <div
                        className="items"
                        onClick={(e) => selectCategories(e)}
                      >
                        All Categories
                      </div>
                      <div
                        className="items"
                        onClick={(e) => selectCategories(e)}
                      >
                        Car
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`searchMenuDiv ${isSearchVisible ? "active" : ""}`}
                  ref={searchRef}
                >
                  <div className="searchMenuItems">
                    <span className="items">Macbook Air 13</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="userDiv flexrow" ref={loginModalRef}>
              <button
                className="userButton"
                onClick={() => setIsLoginModalVisible(!isLoginModalVisible)}
              >
                <div>
                  <div className="user">
                    <User />
                  </div>
                </div>
              </button>

              <div className="orderCart">
                <button className="orderCartButton">
                  <div>
                    <div>
                      <Bag />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="header-last">
        <MenuBar />
      </div>
      {isLoginModalVisible && <LoginModal loginRef={loginModalRef} />}
    </div>
  );
};
