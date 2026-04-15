import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Dragon News</title>
    </Helmet>
  );
};

export default Title;
