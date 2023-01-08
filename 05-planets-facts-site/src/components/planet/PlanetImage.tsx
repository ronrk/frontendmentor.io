import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { TContent } from "../../types/IPlanet";
interface IProps {
  name: string;
  curContext: TContent;
}

const PlanetImage: FC<IProps> = ({ name, curContext }) => {
  const [showGeology, setShowGeology] = useState(false);
  let imagePath = `/assets/planet-${name.toLowerCase()}`;

  if (curContext === "internal") {
    imagePath += "-internal";
  }

  imagePath += ".svg";
  return (
    <div className="planet-image">
      <Image src={imagePath} alt={name} fill />

      {curContext === "surface" ? (
        <div className="geology">
          <Image
            src={`/assets/geology-${name.toLowerCase()}.png`}
            alt={name}
            fill
          />
        </div>
      ) : null}
    </div>
  );
};

export default PlanetImage;
