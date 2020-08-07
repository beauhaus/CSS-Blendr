import React from "react";
import "./modedirectory.scss";
// import {BlenderAppContext} from '???'

const ModeDirectory = ({ mode, idx }) => {
  return (
    <>
      <h3> {mode.title}</h3>
      {/* <h4>{mode.subtitle}</h4> */}
      <p>{mode.excerpt}</p>
    </>
  );
};

export default ModeDirectory;
