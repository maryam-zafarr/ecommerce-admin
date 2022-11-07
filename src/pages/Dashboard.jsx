import React from "react";
import Statistics from "../components/Dashboard/Statistics";
import Navigation from "../components/Layout/Navigation";
import Main from "../components/UI/Main";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Main>
        <Statistics />
      </Main>
    </div>
  );
};

export default Dashboard;
