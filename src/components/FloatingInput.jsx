import React from "react";

const FloatingInput = (props) => {
  return (
    <div className="relative">
      {props.id != "message" ? (
        <input
          type="text"
          id={props.id}
          value={props.value}
          onChange={(e) => props.handleChange(props.id, e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-700 bg-transparent rounded-lg border border-gray-300 appearance-none hover:shadow-lg hover:dark:shadow-[0_0_4px_0_#D97706] dark:text-white dark:border-gray-300 dark:focus:border-amber-500 focus:outline focus:ring-0 focus:border-amber-600 peer"
          placeholder=""
        />
      ) : (
        <textarea
          type="text"
          name={props.id}
          id={props.id}
          value={props.value}
          onChange={(e) => props.handleChange(props.id, e.target.value)}
          rows={4}
          placeholder=""
          className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-700 bg-transparent rounded-lg border border-gray-300 appearance-none hover:shadow-lg hover:dark:shadow-[0_0_4px_0_#D97706] dark:text-white dark:border-gray-300 dark:focus:border-amber-500 focus:outline focus:ring-0 focus:border-amber-600 peer"
        ></textarea>
      )}
      <label
        htmlFor={props.id}
        className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white dark:bg-[#041034] px-2 peer-focus:px-2 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
          props.id != "message"
            ? "peer-placeholder-shown:top-1/2"
            : "peer-placeholder-shown:top-6"
        } peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
      >
        {props.name}
      </label>
      {props.error && <div className="text-red-500 text-sm">{props.error}</div>}
    </div>
  );
};

export default FloatingInput;
