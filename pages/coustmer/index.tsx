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
import { useFormik } from "formik";
import * as yup from "yup";

function Coustmer() {
  const [date, setDate] = useState(new Date());

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    (key: string, value: string) => {
      setUserform({
        ...userfor,
        [key]: value,
      });
    },
    [userfor]
  );

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      name: "",
      locationFrom: "",
      locationTill: "",
    },
    onSubmit: () => {
      setMessage("Form Submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be Valid Email Address")
        .required("Email is reqired"),
      phone: yup.number().required("Phone Number is reqired"),
      locationFrom: yup.string().required("Location From is required"),
      locationTill: yup.string().required("Location Till is required"),
    }),
  });
  return (
    <>
      <div className={css.wrapper}>
        <PageDef />

        <div hidden={!submitted}>{message}</div>
        <section className={css.formLayout}>
          <div className={css.formsection}>
            <form className={css.forms} onSubmit={formik.handleSubmit}>
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
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        maxLength={10}
                        // value={formik.values.phone}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                      />
                      {formik.errors.phone && (
                        <div className="validation">{formik.errors.phone}</div>
                      )}
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.name && (
                        <div className="validation">{formik.errors.name}</div>
                      )}
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
                            name="locationFrom"
                            value={formik.values.locationFrom}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.locationFrom && (
                            <div className="validation">
                              {formik.errors.locationFrom}
                            </div>
                          )}
                        </li>
                        <li>
                          <label>Till</label>
                          <input
                            type="text"
                            name="locationTill"
                            value={formik.values.locationTill}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.locationTill && (
                            <div className="validation">
                              {formik.errors.locationTill}
                            </div>
                          )}
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
                {/* <button onClick={handleSubmit}>Submit</button> */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Coustmer;
