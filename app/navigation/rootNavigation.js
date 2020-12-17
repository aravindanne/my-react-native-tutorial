import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  //   if (!navigationRef.current) navigationRef.current.navigate(name, params);
  // the shortcut for the above line is given below:
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
