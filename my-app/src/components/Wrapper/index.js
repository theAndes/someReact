import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
      <footer className=" bg-dark text-center mt-3 py-2">
        <p className="text-white m-2">This is the footer</p>
      </footer>
    </React.Fragment>
  )
}

export default Wrapper;
