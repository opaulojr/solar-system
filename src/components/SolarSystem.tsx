import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div className="solar-system-component">
      <Title headline="Planetas" />
      <hr id="planets-line" />
      <section id="planets">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            planetName={planet.name}
            planetImage={planet.image}
          />
        ))}
      </section>
    </div>
  );
}

export default SolarSystem;
