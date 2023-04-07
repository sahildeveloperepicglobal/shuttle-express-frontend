import React, { useState } from "react";
import css from "../../styles/coustmer/coustmer.module.scss";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import PageDef from "../../components/PageDef";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-calendar/dist/Calendar.css";
import InfoIcon from "@/constant/infoicon";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import replacer from "@/constant/utils/replacer";

function Coustmer() {
  const [date, setDate] = useState(new Date());

  const [userfor, setUserform] = React.useState<any>({
    searchbyphone: "" as string,
    username: "" as string,
    from: "" as string,
    till: "" as string,
    date: "" as any,
    time: "" as any,
    driverphone: "" as string,
    drivername: "" as string,
    driveraddress: "" as string,
    vendorname: "" as string,
    vendorphone: "" as string,
    fleet: "" as string,
    kmlimit: "" as string,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform your logic here
    console.log("data on line 37", userfor);
  };
  const handleInputChange = React.useCallback(
    (e: any) => {
      setUserform({
        ...userfor,
        [e.target.name]: replacer(e.target.value),
      });
    },
    [userfor]
  );
  const handleDateChange = React.useCallback(
    (key:string,value: string) => {
      setUserform({
        ...userfor,
        [key]:  (value),
      });
    },
    [userfor]
  );
  return (
    <>
      <div className={css.wrapper}>
        <PageDef />
        <section className={css.formLayout}>
          <div className={css.formsection}>
            <form className={css.forms} onSubmit={handleSubmit}>
              <div className={css.customerform}>
                <div className={css.headingcont}>
                  <h3>Coustmer Details Form</h3>
                </div>
                <div className={css.formfield}>
                  <div className={css.mui}>
                    <InfoIcon />
                    <p>Person Info</p>
                  </div>
                  <ul>
                    <li>
                      <label> Search By Phone</label>
                      <input
                        type="number"
                        name="searchbyphone"
                        value={userfor.searchbyphone}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        name="username"
                        value={userfor.username}
                        onChange={handleInputChange}
                      />
                    </li>
                  </ul>
                  <div className={css.loaction}>
                    <h5>Location :</h5>
                    <div className={css.destination}>
                      <ul>
                        <li>
                          <label>From</label>
                          <input
                            type="text"
                            name="from"
                            value={userfor.from}
                            onChange={handleInputChange}
                          />
                        </li>
                        <li>
                          <label>Till</label>
                          <input
                            type="text"
                            name="till"
                            value={userfor.till}
                            onChange={handleInputChange}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={css.datefield}>
                    <div>
                      <label> Date : </label>
                      <DatePicker
                        value={userfor.date}
                        name="date"
                         
                        // onChange={(value)=>handleDateChange('date',value)}
                      />
                    </div>
                    <div>
                      <label>Time : </label>
                      <TimePicker
                        value={userfor.time}
                        name="time"
                      
                        // onChange={(value)=>handleDateChange('time',value)}

                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.customerform}>
                <div className={css.headingcont}>
                  <h3>Driver Details</h3>
                </div>
                <div className={css.formfield}>
                  <div className={css.mui}>
                    <InfoIcon />
                    <p>Driver Info</p>
                  </div>
                  <ul>
                    <li>
                      <label> Phone</label>
                      <input
                        type="number"
                        name="driverphone"
                        value={userfor.driverphone}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        name="drivername"
                        value={userfor.drivername}
                        onChange={handleInputChange}
                      />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        type="text"
                        name="driveraddress"
                        value={userfor.driveraddress}
                        onChange={handleInputChange}
                      />
                    </li>
                  </ul>
                  <div className={css.mui}>
                    <InfoIcon />
                    <p>Vendor Info</p>
                  </div>
                  <div className={css.loaction}>
                    <h5>Associtial Vendor :</h5>
                    <div className={css.destination}>
                      <ul>
                        <li>
                          <label>Name</label>
                          <input
                            type="text"
                            name="vendorname"
                            value={userfor.vendorname}
                            onChange={handleInputChange}
                          />
                        </li>
                        <li>
                          <label>Phone</label>
                          <input
                            type="phone"
                            name="vendorphone"
                            value={userfor.vendorphone}
                            onChange={handleInputChange}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.customerform}>
                <div className={css.formfield}>
                  <div className={css.loaction}>
                    <div className={css.destination}>
                      <ul>
                        <li>
                          <label>Fleet Type</label>
                          <input
                            type="text"
                            name="fleet"
                            value={userfor.fleet}
                            onChange={handleInputChange}
                          />
                        </li>
                        <li>
                          <label>KM Limit</label>
                          <input
                            type="number"
                            name="kmlimit"
                            value={userfor.kmlimit}
                            onChange={handleInputChange}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.submitbtn}>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Coustmer;
