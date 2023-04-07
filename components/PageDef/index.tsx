import React from "react";
import css from "../../styles/coustmer/coustmer.module.scss";
import Image from "next/image";

function Coustmer() {
  return (
    <section className={css.coutmer}>
      <div className={css.content}>
        <h2>Coustmer App</h2>
        <p>Coustmer Form fill</p>
      </div>
      <div className={css.imageSection}>
        <img src="/icons/group1.png" width={165} height={165} alt="sd" />
      </div>
    </section>
  );
}

export default Coustmer;
