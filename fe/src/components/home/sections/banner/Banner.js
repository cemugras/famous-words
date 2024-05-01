import {useContext} from 'react';
import AppContext from '../../../context/AppContext';

const Banner = () => {
    const {homePageData} = useContext(AppContext);

    if (!homePageData || homePageData.length < 3) {
        return <div>Loading...</div>;
    }

    return (
        <div className='banner'>
            <div className='container'>
                {homePageData.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className='section'
                        style={{backgroundImage: `url(${item.photoUrl})`}}
                    >
                        <div className='content'>
                            <h1>{item.personName}</h1>
                        </div>
                        <div className='overlay'></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
