import React from "react";
import Button from "@material-ui/core/Button";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default Dashboard;
