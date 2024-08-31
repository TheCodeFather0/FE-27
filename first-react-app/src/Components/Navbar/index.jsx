import classNames from "classnames";
import React, { useState } from "react";
import styles from "./style.module.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "Menu", path: "/menu" },
    { id: 2, title: "About us", path: "/about" },
    { id: 3, title: "Order online", path: "/order-online" },
    { id: 4, title: "Reservation", path: "/reservation" },
    { id: 5, title: "Contact", path: "/contact" },
  ];
  return (
    <div className="container">
      <nav className={`py-4 ${styles.navbarLinks}`}>
        <div className="logo">
          <Link to="/">
            <img src="./logo.png" alt="" />
          </Link>
        </div>

        <div
          className={classNames({
            [styles.links]: true,
            [styles.showMobile]: showMobile,
          })}
        >
          <button
            className={styles.hideMobileMenu}
            onClick={() => setShowMobile(false)}
          >
            <FaTimes />
          </button>
          {links.map(({ id, title, path }) => {
            return (
              <NavLink
                to={path}
                key={id}
                className={({ isActive }) =>
                  classNames({
                    [styles.link]: true,
                    [styles.active]: isActive,
                  })
                }
              >
                {title}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.loginBtnAndBasket}>
          <Link to="/" className={styles.basketIcon}>
            <SlBasketLoaded />
          </Link>
          <Link to="/" className={styles.loginBtn}>
            Login
          </Link>
          <div
            className={styles.mobileBars}
            onClick={() => setShowMobile(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
