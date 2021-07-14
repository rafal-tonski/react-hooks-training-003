import React from "react";
import { useHistory } from "react-router-dom";

const Mobx = () => {
  const history = useHistory();

  const handleOnClick = () => {
    const location = {
      pathname: "/redux",
      state: {
        isActive: true,
      },
    };

    history.push(location);
  };

  return (
    <article>
      <h2>Mobx</h2>
      <button onClick={handleOnClick}>Idź do Redux</button>
    </article>
  );
};

export default Mobx;
