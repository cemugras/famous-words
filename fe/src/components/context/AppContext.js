import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // To storage names in an array
  const [nameList, setNameList] = useState([]); //todo: remove
  const allDataListTemp = [];
  const [allDataList , setAllDataList] = useState([]);
  const [homePageData, setHomePageData] = useState('');

  // To get names from API
  const fetchHomePageData = async () => {
    try {
      const response = await axios.get('https://famous-words.vercel.app/api/getHomePageRecords');
      setHomePageData(response.data.records);

    } catch (error) {
      console.error('Cannot fetch the names:', error);
    }
  };

  const fetchNames = async () => {
    try {
      const response = await axios.get('https://famous-words.vercel.app/api/getAllNames');
      setNameList(response.data.people);
      
      await fetchAllData(response.data.people.length);
    } catch (error) {
      console.error('Cannot fetch the names:', error);
    }
  };

  const fetchAllData = async (length) => { //todo: remove
    try {
      let id = 1
      while (id<length+1){
        const response = await axios.get(`https://famous-words.vercel.app/api/getRecordById?id=${id}`);
        allDataListTemp.push(response.data);
        id++
      }
    }
    catch (error){
      console.error('Cannot fetch the names:', error);
    }
  }

  // To send request to API when the page is rendered
  useEffect(() => {
    const fetchData = async () => {
      await fetchNames();
      await fetchHomePageData();
      setAllDataList([...allDataListTemp]);
    };
    fetchData();
  }, []);

  return <AppContext.Provider value={{ nameList, allDataList, homePageData }}>{children}</AppContext.Provider>;
};

export default AppContext;
