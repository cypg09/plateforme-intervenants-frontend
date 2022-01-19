import { useState } from "react";

export default function Submit({ defaultText, loadingText, onSubmit =()=>{}}) {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    setIsLoading(!isLoading);
    onSubmit();
  }

  return (
    <>
      <button 
        className="px-5 py-2 m-1 text-lg text-white bg-blue-900 rounded-2xl"
        onSubmit={submitForm}
      >
        {isLoading ? loadingText : defaultText}
      </button>
    </>
  );
}