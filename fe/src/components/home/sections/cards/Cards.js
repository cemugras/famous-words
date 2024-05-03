import React, {useContext} from 'react';
import QuotesCard from '../quotes-card/QuotesCard';
import AppContext from "../../../context/AppContext";

const Cards = () => {
    const {homePageData} = useContext(AppContext);
    return (
        <div className='cards-container flex'>
            <QuotesCard data = {homePageData}/>

        </div>
    );
};

export default Cards;
