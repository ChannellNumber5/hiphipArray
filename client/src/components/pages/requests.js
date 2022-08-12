import React from "react";
import RequestBoxes from "../RequestBoxes";
import RequestBoxesAccepted from "../RequestBoxesAccepted";

export default function Requests() {
  return (
    <div>
      <RequestBoxes></RequestBoxes>
      <RequestBoxesAccepted></RequestBoxesAccepted>
      <RequestBoxes></RequestBoxes>
    </div>
  );
}
