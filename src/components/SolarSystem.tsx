import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  const planetSizes = [41, 102, 106, 66, 272, 282, 144, 144];

  return (
    <div className="solar-system-component">
      <Title headline="Planetas" idName="planets-title" />
      <section className="planets">
        <hr id="planets-line" />
        {planets.map((planet, index) => (
          <PlanetCard
            key={planet.id}
            planetName={planet.name}
            planetImage={planet.image}
            planetSize={`${planetSizes[index]}`}
          />
        ))}
      </section>
    </div>
  );
}

export default SolarSystem;
