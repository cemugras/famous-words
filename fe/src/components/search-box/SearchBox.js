import * as React from 'react';
import {useContext} from 'react';
import AppContext from '../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import {useNavigate} from 'react-router-dom';

const {urlEncryptor} = require('../../utils/endpointUtils');

const SearchBox = () => {
    const {allDataList} = useContext(AppContext);
    const navigate = useNavigate();

    if (!allDataList) {
        return <div>Loading...</div>;
    }
    return (
        <Autocomplete
            className='search-box'
            id='highlights-demo'
            sx={{width: 300}}
            onChange={(event, newValue) => {
                if (newValue) {
                    navigate('/' + urlEncryptor(newValue.person.personName));
                }
            }}
            options={allDataList}
            getOptionLabel={(option) => option.person.personName}
            renderInput={(params) => <TextField {...params} label='Search' margin='normal'/>}
            renderOption={(props, option, {inputValue}) => {
                const matches = match(option.person.personName, inputValue, {insideWords: true});
                const parts = parse(option.person.personName, matches);

                return (
                    <li {...props}>
                        <div className='person-list'>
                            <img className='person-img' src={option.person.photoUrl} alt={option.personName}/>
                            <div>
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: part.highlight ? 700 : 400,
                                        }}
                                    >
                    {part.text}
                  </span>
                                ))}
                            </div>
                        </div>
                    </li>
                );
            }}
        />
    );
};

export default SearchBox;
