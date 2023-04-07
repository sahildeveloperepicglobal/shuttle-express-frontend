/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "../styles/sidebar/header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <section className={css.header}>
        <header>
          <ul className={css.flex}>
            <li>
              <Image
                src="/icons/hamburger.png"
                width={30}
                height={30}
                alt="hamburger"
              />
            </li>
            <li>Coustmer Details</li>
            <li>Car Tracking</li>
            <li>Email Notifiaction</li>
            <li>Seeting</li>
          </ul>
        </header>
      </section>
    </>
  );
};

export default Header;
