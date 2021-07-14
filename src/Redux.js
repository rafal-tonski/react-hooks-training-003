import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Redux = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnClick = () => history.goBack();

  const isActive = location.state.isActive;

  return (  
    <article>
      <h2>Redux</h2>
      <p>Zobacz to {String(isActive)}</p>
      <button onClick={handleOnClick}>Wróć</button>
    </article>
  );
};

export default Redux;
