import React, { useState } from "react";

export default function Phone() {
  const [flag, setFlag] = useState(false);
  const [value,setvalue]=useState()

  const validationPhoneNumber = (e) => {
    setvalue(e.target.value)

    const re = /^\d{10}$/;
    if (re.test(e.target.value)) {
      setFlag(true);
    } else setFlag(false);
  };

  const displayResult = (e) => {
    if (flag) alert("Phone no is correct !");
    else alert("Number is not correct");
  };

  return (
    <div>
      <h1>Phone Number validation</h1>
      <input
        type="text"
        onChange={(e) => {
          validationPhoneNumber(e);
        }}
        placeholder="Phone no"
      ></input>
      {!flag &&  value && (
        <img
          src="http://clipart-library.com/new_gallery/0-5770_red-cross-transparent-png-red-cross-no-background.png"
          height="20px"
          width="20px"
          alt="img"
        />
      )}
      {flag && (
        <img
          src="https://www.seekpng.com/png/detail/944-9441751_green-tick-mark-colorfulness.png"
          height="20px"
          width="20px"
          alt="img"
        />
      )}
      <br />
      <button
        onClick={(e) => {
          displayResult(e);
        }}
      >
        Check
      </button>
    </div>
  );
}
