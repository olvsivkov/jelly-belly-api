import { HandleTabChange } from "../../interfaces/interfaces";

function Navbar({handleTabChange}: HandleTabChange) {

  return (
    <nav>
      <button onClick={() => handleTabChange('beans')}>Beans</button>
      <button onClick={() => handleTabChange('history')}>History</button>
      <button onClick={() => handleTabChange('facts')}>Facts</button>
      <button onClick={() => handleTabChange('recipes')}>Recipes</button>
      <button onClick={() => handleTabChange('combinations')}>Combinations</button>
    </nav>
  );
}

export default Navbar