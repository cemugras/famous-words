import {useContext} from 'react';
import AppContext from '../../../context/AppContext';

const Banner = () => {
    const {bannerList} = useContext(AppContext);

    if (!bannerList || bannerList.length < 3) {
        return <div>Loading...</div>;
    }

    return (
        <div className='banner'>
            <div className='container'>
                {bannerList.map((item, index) => (
                    <div
                        key={index}
                        className='section'
                        style={{backgroundImage: `url(${item.person.photoUrl})`}}
                    >
                        <div className='content'>
                            <h1>{item.person.personName}</h1>
                        </div>
                        <div className='overlay'></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
