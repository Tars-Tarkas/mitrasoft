import React, { useEffect } from "react";

type AboutType = {
  title: string;
};

const About: React.FC<AboutType> = ({ title }): JSX.Element => {
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
