import React from "react";
import AlertAppComp from "./AlertAppComp";

const Alert = () => {
  return (
    <div className="container mx-auto">
      <AlertAppComp type={"success"} message={"Successfful Login"} />
      <AlertAppComp
        type={"info"}
        message={"Time trigerred"}
        delay={true}
        delayTime={1000}
      />
 
    </div>
  );
};

export default Alert;
