import Router from "next/router";
import React from "react";

export default function Submit({ defaultText, loadingText, onSubmit =()=>{}, btnStyle ="primary"}) {
  const [isLoading, setIsLoading] = React.useState(false);
  let defaultClassName = "";
  if (btnStyle === "primary") {
    defaultClassName = "px-5 py-2 m-1 text-lg text-white bg-blue-900 rounded-2xl";
  } else if (btnStyle === "rh") {
    defaultClassName = "px-8 py-4 text-xl rounded-xl font-bold text-white bg-blue-900";
  }

  const submitForm = () => {
    setIsLoading(!isLoading);
    onSubmit();
    Router.push('/dashboard');
  }

  return (
    <>
      <button 
        className={defaultClassName}
        onClick={submitForm}
      >
        <p>{isLoading ? loadingText : defaultText}</p>
      </button>
    </>
  );
}