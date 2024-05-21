import React from "react";
import "./style.css";
import myCv from "../Images/CV.ANDREEA-M.pdf"

function CV() {
  return (
    <div className="cv">
    <embed src={myCv} type="application/pdf" width="100%" height="1000px" />

    </div>
  );
}

export default CV;
