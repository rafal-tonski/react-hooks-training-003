import React from "react";
import { useParams } from "react-router";

const TypeScript = () => {
  const { message } = useParams();

  return (
    <article>
      <h2>{message}</h2>
    </article>
  );
};

export default TypeScript;
