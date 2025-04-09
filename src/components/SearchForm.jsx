import React from "react";
import HeaderText from "./HeaderText";
import { useFormik } from "formik";
import Button from "./Button";
import ParaText from "./ParaText";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { basicSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      type: "IC",
      trainNum: "",
      date: null, // should be a Date object
    },
    validationSchema: basicSchema,
    onSubmit: (values, { resetForm }) => {
      const formattedDate = values.date
        ? format(values.date, "dd/MM/yyyy")
        : "";
      navigate(`/trains?trainNum=${values.trainNum}&date=${formattedDate}`);
      resetForm();
    },
  });

  return (
    <div className="h-full w-full flex flex-col gap-4 pt-4 items-center justify-center ">
      <div className="text-center">
        <HeaderText h2={true}>
          Enter Train Details to Track Its Journey
        </HeaderText>
      </div>
      <form className="px-2 py-2" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4 w-64 mb-8">
          {/* Train Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label htmlFor="type">
              <ParaText>
                <span className="font-bold text-vrgray">Train Type</span>
              </ParaText>
            </label>
            <select
              id="type"
              name="type"
              className="bg-vrgray text-vrgrayDark px-2 py-1 rounded-md border-2 border-vrgreenDark transition-all duration-300 focus:outline-none focus:ring focus:ring-vrgreenHover"
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              <option value="IC">IC</option>
              <option value="PYO">PYO</option>
              <option value="HDM">HDM</option>
              <option value="S">S</option>
              <option value="H">H</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Train Number Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="trainNum">
              <ParaText>
                <span className="font-bold text-vrgray">Train Number *</span>
              </ParaText>
            </label>
            <input
              className="bg-vrgray text-vrgrayDark px-2 py-1 rounded-md border-2 border-vrgreenDark transition-all duration-300 focus:outline-none focus:ring focus:ring-vrgreenHover"
              id="trainNum"
              name="trainNum"
              type="text"
              placeholder="Enter your train number here"
              onChange={formik.handleChange}
              value={formik.values.trainNum}
            />
          </div>
          {formik.errors.trainNum && formik.touched.trainNum && (
            <p className="text-red-600 font-bold">* {formik.errors.trainNum}</p>
          )}

          {/* Date Picker Input */}

          <div className="flex flex-col gap-2">
            <label htmlFor="date">
              <ParaText>
                <span className="font-bold text-vrtextDark">Select Date *</span>
              </ParaText>
            </label>
            <DatePicker
              id="date"
              selected={formik.values.date}
              onChange={(date) => formik.setFieldValue("date", date)}
              className="bg-vrgray text-vrgrayDark px-2 py-1 overflow-hidden rounded-md w-full border-2 border-vrgreenDark transition-all duration-300 focus:outline-none focus:ring focus:ring-vrgreenHover"
              dateFormat="dd/MM/yyyy"
              placeholderText="Click to select a date"
            />
          </div>
          {formik.errors.date && formik.touched.date && (
            <p className="text-red-600 font-bold">* {formik.errors.date}</p>
          )}

          {/* Submit Button */}
        </div>
        <div className="w-full flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
