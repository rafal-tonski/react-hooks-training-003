import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ReactJS = () => {
  const [inputData, setInputData] = useState("");

  const handleOnChange = (e) => setInputData(e.target.value);

  const history = useHistory();

  const handleOnClick = () => {
    const location = {
      pathname: `/typescript/${inputData}`,
    };

    history.push(location);
  };

  return (
    <article>
      <h2>ReactJS</h2>
      <input type="text" value={inputData} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Wyślij do TypeScript</button>
    </article>
  );
};

export default ReactJS;
