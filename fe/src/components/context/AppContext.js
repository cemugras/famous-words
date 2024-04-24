import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // To storage names in an array
  const [nameList, setNameList] = useState([]);
  const bannerListTemp = [];
  const [bannerList, setBannerList] = useState('');


  // To get names from API
  const fetchNames = async () => {
    try {
      const response = await axios.get('https://famous-words.vercel.app/api/getAllNames');
      setNameList(response.data);
    } catch (error) {
      console.error('Cannot fetch the names:', error);
    }
  };

  const getRecordById = async (id) => {
    try {
      const response = await axios.get(`https://famous-words.vercel.app/api/getRecordById?id=${id}`);
      bannerListTemp.push(response.data);
    } catch (error) {
      console.error('Cannot fetch the names:', error);
    }
  };

  // To send request to API when the page is rendered
  useEffect(() => {
    const fetchData = async () => {
      await fetchNames();
      await Promise.all([getRecordById(1), getRecordById(2), getRecordById(3)]);
      setBannerList([...bannerListTemp]);
    };
    fetchData();
  }, []);

  return <AppContext.Provider value={{ nameList, bannerList }}>{children}</AppContext.Provider>;
};

export default AppContext;
