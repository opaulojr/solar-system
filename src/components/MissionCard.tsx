type MissionCardProps = {
  name: string,
  year: string,
  country: string,
  destination: string
};

function MissionCard({
  name, year, country, destination,
}: MissionCardProps) {
  return (
    <div className="mission-card-component">
      <p id="mission-name">{name}</p>

      <img
        className="mission-icon"
        src="year-icon.svg"
        alt="Mission Year Icon"
      />
      <p id="mission-year">{year}</p>

      <img
        className="mission-icon"
        src="country-icon.svg"
        alt="Mission Country Icon"
      />
      <p id="mission-country">{country}</p>

      <img
        className="mission-icon"
        src="destination-icon.svg"
        alt="Mission Destination Icon"
      />
      <p id="mission-destination">{destination}</p>
    </div>
  );
}

export default MissionCard;
