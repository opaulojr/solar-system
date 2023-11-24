type PlanetCardProps = {
  planetName: string
  planetImage: string
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div className="planet-card-component">
      <p id="planet-name">{planetName}</p>
      <img src={planetImage} alt={`Planeta ${planetName}`} />
    </div>
  );
}

export default PlanetCard;
