import React from "react";
import classes from "./styles.module.css";

const Loading = () => {
  return (
    <div>
     <div className={classes.lds +' '+ classes.ring}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;