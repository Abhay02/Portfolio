import React, { useEffect, useState } from "react";
import FloatingInput from "./FloatingInput";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(form);
  const [formError, setFormError] = useState(form);
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };
  const handleSubmit = async () => {
    let valid = true;
    let newFormError = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if (valid) {
      const docRef = await addDoc(collection(db, "portfolio"), formData);
      toast.success("Submitted Successfully!", { duration: 4000 });
    } else {
      toast.error("Some error occured", { duration: 4000 });
    }
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="px-5 md:px-10 lg:px-15 lg:py-10" id="contact">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        Let's Connect
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-full lg:w-[70%] m-auto flex flex-col gap-6 border border-white rounded-2xl md:text-3xl my-10 p-5 shadow-lg dark:shadow-[0_0_4px_0_#ffffff]"
      >
        <div className="text-2xl md:text-3xl text-black dark:text-white p-4">
          Let's Connect
        </div>
        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <FloatingInput
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <FloatingInput
          id="phone"
          name="Phone"
          value={formData.phone}
          handleChange={handleChange}
          error={formError.phone}
        />
        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="text-black dark:text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center justify-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Send
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
