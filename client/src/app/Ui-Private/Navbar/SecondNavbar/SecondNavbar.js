import React from "react";
import { SecondLinkNav } from "./SecondLinkNav";

import "./SecondNavbar.sass";

export const SecondNavbar = props => (
  <div className="wrapper second__nav__bar">
    <nav>
      <ul>
        <SecondLinkNav
          to="/"
          activeElement={true}
          text="Home"
          icon="fas fa-home"
        />
        <SecondLinkNav to="/login" text="Login" icon="fas fa-exchange-alt" />
      </ul>
    </nav>
  </div>
);
