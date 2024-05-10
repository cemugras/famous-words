import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import {useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';

const Topics = () => {
    const {allCategories} = useContext(AppContext);
    const navigate = useNavigate();
    const categories = allCategories?.categories || [];

    const topicsWithDividers = [];
    let lastChar = '-';

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // İlk harfi büyük yapma fonksiyonu

    categories.forEach((category, index) => {
        const curChar = category.charAt(0).toLowerCase();
        const isNewSection = index === 0 || curChar !== lastChar;

        if (isNewSection) {
            topicsWithDividers.push(
                <React.Fragment key={curChar}>
                    <li className='divider' id={curChar}>
                        {curChar.toUpperCase()}
                    </li>
                </React.Fragment>
            );
            lastChar = curChar;
        }

        topicsWithDividers.push(
            <li key={category}>
                <a onClick={() => navigate('/category/' + category, {state: {category: category}})}>{capitalize(category)}</a> {/* Başlığı büyük harf yap */}
            </li>
        );
    });

    return (
        <div>
            <Helmet>
                <title>Topics</title>
                <meta name='description' content='Find a wide range of topics. Dive into curated collections of quotes and sayings, organized for easy exploration and inspiration.'/>
            </Helmet>
            <div id='scrolling'>
                <h1>Inspirational Quote's Topics</h1>
                <ul className='list'>{topicsWithDividers}</ul>
            </div>
        </div>
    );
};

export default Topics;
