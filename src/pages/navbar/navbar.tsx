import { HandleTabChange } from "../../interfaces/interfaces";

function Navbar({handleTabChange}: HandleTabChange) {

  return (
    <nav>
      <button onClick={() => handleTabChange('beans')}>1.Beans</button>
      <button onClick={() => handleTabChange('history')}>2.History</button>
      <button onClick={() => handleTabChange('facts')}>3.Facts</button>
      <button onClick={() => handleTabChange('recipes')}>4.Recipes</button>
      <button onClick={() => handleTabChange('combinations')}>5.Combinations</button>
    </nav>
  );
}

export default Navbar