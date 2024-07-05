import React, { useState } from "react";
import Login from "./components/Login";
import OtpPage from "./components/OtpPage";

function App() {
  const [title, setTitle] = useState(false);

  function handleClick() {
    setTitle((edit) => !edit);
  }

  return (
    <>
      {!title ? (
        <Login onClick={handleClick} />
      ) : (
        <OtpPage onClick={handleClick} />
      )}
    </>
  );
}
export default App;
