import React from "react";

function Loading() {
  return (
    <div className="h-screen grid place-items-center">
      {/* <span className="loading loading-infinity loading-xs"></span>
      <span className="loading loading-infinity loading-sm"></span>
      <span className="loading loading-infinity loading-md"></span> */}
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
}

export default Loading;
