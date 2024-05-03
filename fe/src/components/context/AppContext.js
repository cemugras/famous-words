import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    // To storage names in an array
    const [homePageData, setHomePageData] = useState('');
    const [allDataForSearch, setAllDataForSearch] = useState('');
    const [authorData, setAuthorData] = useState('');
    const [topicData, setTopicData] = useState('');
    const [allCategories, setAllCategories] = useState('');

    // To get names from API
    const fetchHomePageData = async () => {
        try {
            const response = await axios.get('https://famous-words.vercel.app/api/getHomePageRecords');
            setHomePageData(response.data.records);

        } catch (error) {
            console.error('Cannot fetch the names:', error);
        }
    };

    const fetchAllDataForSearch = async () => {
        try {
            const response = await axios.get('https://famous-words.vercel.app/api/getAllNamesWithPics');
            setAllDataForSearch(response.data.people);

        } catch (error) {
            console.error('Cannot fetch the names:', error);
        }
    };

    const getDataById = async (id) => {
        try {
            const response = await axios.get(`https://famous-words.vercel.app/api/getRecordById?id=${id}`);
            setAuthorData(response.data.person);

        } catch (error) {
            console.error('Cannot fetch the names:', error);
        }
    };

    const getAllCategories = async () => {
        try {
            const response = await axios.get(`https://famous-words.vercel.app/api/getAllCategories`);
            setAllCategories(response.data);

        } catch (error) {
            console.error('Cannot fetch the names:', error);
        }
    }

    const getDataByTopic = async (topic) => {
        try {
            const response = await axios.get(`https://famous-words.vercel.app/api/getRecordsByCategory?category=${topic}`);
            setTopicData(response.data.people);

        } catch (error) {
            console.error('Cannot fetch the names:', error);
        }
    };

    // To send request to API when the page is rendered
    useEffect(() => {
        fetchHomePageData();
        fetchAllDataForSearch();
        getAllCategories();
    }, []);

    return <AppContext.Provider
        value={{
            homePageData,
            authorData,
            allDataForSearch,
            getDataById,
            setAuthorData,
            allCategories,
            getDataByTopic,
            topicData,
            setTopicData
        }}>{children}</AppContext.Provider>;
};

export default AppContext;
