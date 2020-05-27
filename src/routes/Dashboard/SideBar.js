// sidebar  for pc and mobile
// pc => 30% of the width
// mobile => 100% on click with menu
//

import React, { useState } from "react";

const SideBar = (props) => {
  const [mobile, setMobile] = useState(false);

  if (mobile) {
    return (
      <div>
        <h1>mobile here</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>pc master race</h1>
    </div>
  );
};

export default SideBar;
