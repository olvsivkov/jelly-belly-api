import { useState, useEffect } from 'react';
import './App.css';

import { HistoryDataInterface } from './interfaces/interfaces';
import { BeansData } from './interfaces/interfaces';
import { FactsDataInterface } from './interfaces/interfaces';
import { RecipesDataInterface } from './interfaces/interfaces';
import { CombinationsDataInterface } from './interfaces/interfaces';
import { PageNameTypes } from './interfaces/interfaces';

import Navbar from './pages/navbar/navbar';
import BeanList from './pages/beanList/beanList';
import HistoryData from './pages/history/historyData';
import FactsData from './pages/facts/facts';
import RecipesData from './pages/recipes/recipes';
import CombinationsData from './pages/combinations/combinations';

import { API_URL } from './API/config';

function App() {

  const [beans, setBeans] = useState<BeansData[]>([]);
  const [history, setHistory] = useState<HistoryDataInterface[]>([]);
  const [facts, setFacts] = useState<FactsDataInterface[]>([]);
  const [recipes, setRecipes] = useState<RecipesDataInterface[]>([]);
  const [combinations, setCombinations] = useState<CombinationsDataInterface[]>([]);
  const [selectedTab, setSelectedTab] = useState<PageNameTypes>('beans');

  // Функция для изменения выбранного таба
  function handleTabChange(tab: PageNameTypes) {
    setSelectedTab(tab);
  }

  function putDataOnSetter(section: string, data: any){
    if(section === 'beans') setBeans(data.items);
    if(section === 'MileStones') setHistory(data.items);     
    if(section === 'facts') setFacts(data.items);     
    if(section === 'recipes') setRecipes(data.items);     
    if(section === 'combinations') setCombinations(data.items);   
  }

  // Функции для выполнения запросов к API
  async function fetchBeansData(section: string, pageSize: string) {
    try {
      const response = await fetch(`${API_URL}${section}?pageIndex=1&pageSize=${pageSize}`);
      const data = await response.json();
      putDataOnSetter(section, data)
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
