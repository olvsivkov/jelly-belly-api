import { useState, useEffect } from 'react';
import './App.css';

// Интерфесы ------- //
interface BeansData {
  beanId: number;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
}

interface HistoryData {
  mileStoneId: number;
  year: number;
  description: string;
}

interface FactsData {
  factId: number;
  title: string;
  description: string;
}

interface RecipesData {
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
  imageUrl: string;
  ingredients: string[];
  additions1: string[];
  additions2: string[];
  additions3: string[];
  directions: string[];
  tips: string[];
}

interface CombinationsData {
  combinationId: number;
  name: string;
  tag: string;
}

interface HandleTabChange {
  handleTabChange: (tab: 'beans' | 'history' | 'facts' | 'recipes' | 'combinations') => void;
}







// компоненты лицевой станицы -- ///

// Компонент для отображения списка бобов
function BeanList({ beans }: { beans: BeansData[] }) {
  return (
    <ul>
      {beans.map((bean) => (
        <li key={bean.beanId}>{bean.flavorName}</li>
      ))}
    </ul>
  );
}

function HistoryData({ history }: { history: HistoryData[] }) {
  return (
    <ul>
      {history.map((history) => (
        <li key={history.mileStoneId}>{history.description}</li>
      ))}
    </ul>
  );
}

function FactsData({ facts }: { facts: FactsData[] }) {
  return (
    <ul>
      {facts.map((facts) => (
        <li key={facts.factId}>{facts.description}</li>
      ))}
    </ul>
  );
}

function RecipesData({ recipes }: { recipes: RecipesData[] }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.recipeId}>{recipe.description}</li>
      ))}
    </ul>
  );
}

function CombinationsData({ combinations }: { combinations: CombinationsData[] }) {
  return (
    <ul>
      {combinations.map((combination) => (
        <li key={combination.combinationId}>{combination.name}</li>
      ))}
    </ul>
  );
}




// Навигация -- //

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

function App() {

  const [beans, setBeans] = useState<BeansData[]>([]);
  const [history, setHistory] = useState<HistoryData[]>([]);
  const [facts, setFacts] = useState<FactsData[]>([]);
  const [recipes, setRecipes] = useState<RecipesData[]>([]);
  const [combinations, setCombinations] = useState<CombinationsData[]>([]);

//--------------------------------------------------------------------------------------------------------------//
  const [selectedTab, setSelectedTab] = useState<'beans' | 'history' | 'facts' | 'recipes' | 'combinations'>('beans');

  // Функция для изменения выбранного таба
  function handleTabChange(tab: 'beans' | 'history' | 'facts' | 'recipes' | 'combinations') {
    setSelectedTab(tab);
  }
//--------------------------------------------------------------------------------------------------------------//

  // Функции для выполнения запросов к API
  async function fetchBeansData(section: string, pageSize: string) {
    try {
      const response = await fetch(`https://jellybellywikiapi.onrender.com/api/${section}?pageIndex=1&pageSize=${pageSize}`);
      const data = await response.json();
      if(section === 'beans') setBeans(data.items);
      if(section === 'MileStones') setHistory(data.items);     
      if(section === 'facts') setFacts(data.items);     
      if(section === 'recipes') setRecipes(data.items);     
      if(section === 'combinations') setCombinations(data.items);     
    } catch (error) {
      console.error('Error fetching beans:', error);
    }
  }

  // Вызываем соответствующие функции при изменении таба
  useEffect(() => {
    if (selectedTab === 'beans') {
      fetchBeansData('beans', '114');
    } else if (selectedTab === 'history') {
      fetchBeansData('MileStones', '23');
    } else if (selectedTab === 'facts') {
      fetchBeansData('facts', '99');
    } else if (selectedTab === 'recipes') {
      fetchBeansData('recipes', '27');
    } else if (selectedTab === 'combinations') {
      fetchBeansData('combinations', '54');
    }
  }, [selectedTab]);

  return (
    <div className="App">
      <Navbar handleTabChange = {handleTabChange}/>
        {selectedTab === 'beans' && <BeanList beans={beans} />}
        {selectedTab === 'history' && <HistoryData history={history} />}
        {selectedTab === 'facts' && <FactsData facts={facts} />}
        {selectedTab === 'recipes' && <RecipesData recipes={recipes} />}
        {selectedTab === 'combinations' && <CombinationsData combinations={combinations} />}
    </div>
  );
}

export default App;
