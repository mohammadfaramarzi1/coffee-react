import React from "react";

function DashboardHeader({username}) {
  return (
    <header className="fixed top-0 right-0 left-0 bg-brown-medium p-3 text-center z-20">
      <h1>
        <span className="text-lg">{username} </span> خوش آمدید❤️
      </h1>
    </header>
  );
}

export default DashboardHeader;
