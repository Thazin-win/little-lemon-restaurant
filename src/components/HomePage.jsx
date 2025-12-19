import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomerSays from "./CustomerSays";
import Chicago from "./Chicago";

const HomePage = () => {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomerSays />
      <Chicago />
    </div>
  );
};

export default HomePage;
