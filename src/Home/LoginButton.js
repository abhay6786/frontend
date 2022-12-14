import React from "react";
import Card from "./Card";

import officerlogin from "../image/4565.jpg";
import citizenlogin from "../image/8741.jpg";

const LoginButton = () => {
  return (
    <div class="container">
      <div class = "row">
        <div class="col-sm-6">
        <Card Image={officerlogin} link={"/officerlogin"} />
        </div>
        <div class="col-sm-6">
        <Card
          LoginButton="citizen"
          Image={citizenlogin}
          link={"/citizen"}
          login="citizen"
          />
          </div>
        </div>
    </div>
    

  );
};

export default LoginButton;

// <div
//   className="row "
//   style={{
//     maxWidth: "100%",
//     padding: "10px",
//     margin: "10px",
//     marginLeft: "190px",
//   }}
// >
//   <div className="col-12 col-md-6 mb-4  ">
//     <Card Image={officerlogin} link={"/officerlogin"} />
//   </div>
//   <div className="col-12 col-md-6 mb-4">
//     <Card
//       LoginButton="citizen"
//       Image={citizenlogin}
//       link={"/citizen"}
//       login="citizen"
//     />
//   </div>
// </div>
