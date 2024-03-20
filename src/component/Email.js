import React from "react";
import { useState } from "react";

export default function Email() {
  const [flag, setFlag] = useState(false);
  const [value,setValue]=useState('')

  // validation of input values by regex matching || function regex.test()
  const validation = (e) => {
    setValue(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(e.target.value)) {
      setFlag(true);
    } else setFlag(false);
  };

  const mailCheck = () => {
    if (flag) {
      alert("Email Validation done");
    } else alert("enter correct email address");
  };
  return (
    <div>
      <h1>Email Validation</h1>
      <input
        type="email"
        onChange={(e) => {
          validation(e);
        }}
        placeholder="Enter Email Address...."
      ></input>
      {!flag && value && (
        <img
          src="http://clipart-library.com/new_gallery/0-5770_red-cross-transparent-png-red-cross-no-background.png"
          height="20x"
          width="20px"
          alt="img"
        ></img>
      )}
      {flag && (
        <img
          src="https://www.seekpng.com/png/detail/944-9441751_green-tick-mark-colorfulness.png"
          height="20"
          width="20"
          alt="img"
        />
      )}
      <br />
      <button
        disabled={flag}
        onClick={(e) => {
          mailCheck(e);
        }}
      >
        Check
      </button>
    </div>
  );
}
