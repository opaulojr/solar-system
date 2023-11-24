import { useState } from 'react';

type PlanetCardProps = {
  planetName: string
  planetImage: string
  planetSize: string
};

function PlanetCard({ planetName, planetImage, planetSize }: PlanetCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="planet-card-component"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
      <p id="planet-name">{planetName}</p>
      )}
      <img
        id={planetName}
        src={planetImage}
        alt={`Planeta ${planetName}`}
        style={{ width: `${planetSize}px` }}
      />
    </div>
  );
}

export default PlanetCard;
