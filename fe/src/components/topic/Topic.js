import {useLocation} from "react-router-dom";
import QuotesCard from "../home/sections/quotes-card/QuotesCard";
import React, {useContext, useEffect} from "react";
import AppContext from "../context/AppContext";

const Topic = () => {
    const location = useLocation();
    const category = location.state?.category;
    const { getDataByTopic, setTopicData, topicData } = useContext(AppContext);

    useEffect(() => {
        getDataByTopic(category);
        setTopicData(null);
    }, [category]);

    if (!topicData) {
        return <div>Loading...</div>;
    }

    console.log(topicData);

    return (
        <div className='cards-container flex'>
            <QuotesCard data = {topicData}/>

        </div>
    );
}

export default Topic;
