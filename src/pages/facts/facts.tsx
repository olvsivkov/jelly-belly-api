import { FactsDataInterface } from "../../interfaces/interfaces";

function FactsData({ facts }: { facts: FactsDataInterface[] }) {
  return (
    <ul>
      {facts.map((facts) => (
        <li key={facts.factId}>{facts.description}</li>
      ))}
    </ul>
  );
}

export default FactsData