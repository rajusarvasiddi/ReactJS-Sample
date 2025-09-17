import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import React, { Suspense, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { z } from "zod";

const CreateUser = React.lazy(() => import("./CreateUser"));

function Users() {
  // Yup validation schema
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .min(3, ({ min }) => `Full name must be at least ${min} characters`)
      .matches(/^(?!\d+$).*/, "Full name cannot be all numbers")
      .matches(/^[^\d].*$/, "Full name cannot start with a number")
      .max(6, ({ max }) => `Full name must be at most ${max} characters`)
      .required("Full name is required"),
    place: Yup.string()
      .min(3, ({ min }) => `Place must be at least ${min} characters`)
      .max(4, ({ max }) => `Place must be at most ${max} characters`)
      .required("Place is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      place: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          values
        );
        console.log("Form submitted successfully:", response.data);
        resetForm();
      } catch (error) {
        setLoading(false);
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  const [formValues, setformvalues] = useState({
    firstName: "",
    lastName: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [delayLoading, setDelayLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCreateUserForm = () => {
    setDelayLoading(true);
    setTimeout(() => {
      setShowForm((prev) => !prev);
    }, 10);
  };

  return (
    <>

      <main className="flex-1 p-4 overflow-auto">
        

        <div className="bg-white rounded shadow p-4 mb-4">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">Users</h1>
          <div className="text-gray-600">
            This area does not grow past the screen. It stays scrollable inside
            itself.
          </div>
          <button
            onClick={toggleCreateUserForm}
            className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {showForm ? "Hide " : "Show "} Create User
          </button>
          {/* <ShowCreateUser /> */}
        </div>

        <div className="bg-white rounded shadow p-4 mb-4 font-semibold">
          <h2 className="text-xl mb-2">
            Formik + Yup
          </h2>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="fullname">Name</label>
              <input
                className="shadow border rounded leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="text-red-500 text-sm">{formik.errors.fullname}</p>
              )}
            </div>
            <div>
              <label htmlFor="place">Place</label>
              <input
                className="shadow border rounded leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="place"
                value={formik.values.place}
                onChange={formik.handleChange}
              />
              {formik.touched.place && formik.errors.place && (
                <p className="text-red-500 text-sm">{formik.errors.place}</p>
              )}
            </div>
            <p>
              <button
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-400"
                type="submit"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </p>
          </form>
        </div>

        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            SVG Generator
          </h2>
          <p className="text-gray-600">
            <a href="https://svg-path.com/" target="_blank" rel="noreferrer">
              https://svg-path.com/
            </a>
          </p>
        </div>

        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            More Content
          </h2>

          {/* <button data-tooltip-target="tooltip-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

                <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}

          <div>
            <Tooltip title="This is a Material UI Tooltip" arrow>
              <button className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition">
                Hover Me
                <InfoIcon className="text-white" />
              </button>
            </Tooltip>
          </div>

          <p className="text-gray-600" style={{ height: "3000px" }}>
            Still contained, not causing page scroll.
          </p>
        </div>
      </main>
      {/* Right Sidebar */}
      {showForm && (
        <Suspense fallback="loading...">
          <CreateUser />
        </Suspense>
      )}
    </>
  );
}

export default Users;
