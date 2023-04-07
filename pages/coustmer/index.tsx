import React from "react";
import css from "../../styles/coustmer/coustmer.module.scss";
import Image from "next/image";
import PageDef from "../../components/PageDef";

function Coustmer() {
  return (
    <>
      <div className={css.wrapper}>
        <PageDef />
        <section className={css.formLayout}>
          <div>
            <h3>Coustmer Details Form</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default Coustmer;
