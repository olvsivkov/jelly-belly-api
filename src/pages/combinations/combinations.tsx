import { CombinationsDataInterface } from "../../interfaces/interfaces";

function CombinationsData({ combinations }: { combinations: CombinationsDataInterface[] }) {
  return (
    <ul>
      {combinations.map((combination) => (
        <li key={combination.combinationId}>{combination.name}</li>
      ))}
    </ul>
  );
}

export default CombinationsData 