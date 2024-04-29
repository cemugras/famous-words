import React from 'react';
import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import AppContext from '../context/AppContext';
import SocialShare from '../../components/home/sections/social-share/SocialShare';
import LikeButton from '../../components/home/sections/like-button/LikeButton';
import {urlDecryptor} from "../../utils/endpointUtils";

const Author = () => {
    const {allDataList} = useContext(AppContext);
    const {urlDecryptor} = require('../../utils/endpointUtils');
    const {name} = useParams();
    const authorName = urlDecryptor(name);

    console.log(allDataList);
    const data = allDataList.find(item => {
        const normalizedAuthorName = authorName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const normalizedPersonName = item.person.personName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return normalizedPersonName === normalizedAuthorName;
    });

    return (
        <div className='page-container'>
            <div className='author-header'>
                <h1>{data.person.personName}</h1>
                <div className='author-info'>
                    <img src={data.person.photoUrl} alt=''/>
                    <div className='info-text'>
                        <p>{data.person.biography}</p>
                    </div>
                </div>
            </div>
            <div className='author-quotes'>
                <div className='quotes-header'>
                    <h1>Quotes</h1>
                </div>
                <div className='quote-card'>
                    {data.person.quotes.map(quote => {
                        return (
                            <div className='animated-border-quote'>
                                <blockquote>
                                    <p>{quote}</p>
                                    <cite>{data.person.name}</cite>
                                    <div className='social'>
                                        <SocialShare/>
                                        <LikeButton/>
                                    </div>
                                </blockquote>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Author;
