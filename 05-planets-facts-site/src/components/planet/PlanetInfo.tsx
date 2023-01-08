import React, { FC } from "react";
interface IProps {
  rotation: number;
  revolution: number;
  radius: number;
  avgTemp: string;
}

const PlanetInfo: FC<IProps> = ({ radius, revolution, rotation, avgTemp }) => {
  return (
    <div className="planet-info uppercase flex-col">
      <div className="info-box flex">
        <h4 className="fs-500">rotation time</h4>
        <h3 className="fs-800 text-white ff-antonio fw-600 uppercase">
          {new Intl.NumberFormat("en-IN").format(rotation)} days
        </h3>
      </div>
      <div className="info-box flex">
        <h4 className="fs-500 uppercase">revolution time</h4>
        <h3 className="fs-800 text-white ff-antonio fw-600 uppercase">
          {new Intl.NumberFormat("en-IN").format(revolution)} days
        </h3>
      </div>
      <div className="info-box flex">
        <h4 className="fs-500 uppercase">radius</h4>
        <h3 className="fs-800 text-white ff-antonio fw-600 uppercase">
          {new Intl.NumberFormat("en-IN").format(radius)} km
        </h3>
      </div>
      <div className="info-box flex">
        <h4 className="uppercase fs-500">average temp.</h4>
        <h3 className="fs-800 text-white ff-antonio fw-600 uppercase">
          {avgTemp}
        </h3>
      </div>
    </div>
  );
};

export default PlanetInfo;
