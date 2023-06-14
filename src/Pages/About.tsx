import React from "react";
import { useEffect } from "react";

type AboutType = {
  title: string;
};

const About = ({ title }: AboutType) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <h1>Обо мне</h1>
    </>
  );
};

export default About;
