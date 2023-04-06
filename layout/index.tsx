import inter from "@/font/inter";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from "@/styles/layout.module.scss";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
