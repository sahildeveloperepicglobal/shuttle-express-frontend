/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import css from "@/styles/sidebar/sidebar.module.scss";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <section className={css.sidebar}>
        <div className={css.sidebarMenu}>
          <ul className={css.logoText}>
            <li>
              <div>
                <Image
                  src="/logo/vscode.svg"
                  width={50}
                  height={50}
                  alt="xyz"
                />
              </div>
            </li>
            <li>
              <p>Shuttle Express</p>
            </li>
          </ul>
        </div>
        <section className={css.sidebarItems}>
          <ul>
            <li>
              <p className="para">Home</p>
            </li>
            <li>
              <div className={css.coustmerBtn}>
                <span>
                  <Image
                    src="/icons/user.png"
                    width={30}
                    height={30}
                    alt="xyz"
                  />
                </span>
                <p> Coustmer Details</p>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
