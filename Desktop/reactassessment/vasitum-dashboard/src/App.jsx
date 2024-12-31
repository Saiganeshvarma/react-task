import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import Announcement from "./components/Announcement";
import UpcomingSchedule from "./components/UpcomingSchedule";
import RecentActivity from "./components/RecentActivity";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="dashboard">
          <div className="dashboard-cards">
            <DashboardCard title="Available Position" value="24" subText="Urgently needed" />
            <DashboardCard title="Job Open" value="10" subText="4 Active hiring" />
            <DashboardCard title="New Employees" value="24" subText="4 Department" />
          </div>
          <div className="statistics">
            <DashboardCard title="Total Employees" value="216" subText="120 Men, 96 Women" />
            <DashboardCard title="Talent Request" value="16" subText="6 Men, 10 Women" />
          </div>
          <Announcement />
          <div className="side-panels">
            <RecentActivity />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
