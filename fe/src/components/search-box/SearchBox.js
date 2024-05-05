import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const { urlEncryptor } = require('../../utils/endpointUtils');
    const { allDataForSearch } = useContext(AppContext);
    const navigate = useNavigate();

    if (!allDataForSearch) {
        // If data not arrived show empty input
        return (
            <TextField
                label='Search'
                margin='normal'
                InputProps={{ disableUnderline: true }}
                fullWidth
                className="animate-pulse bg-gray-200"
                sx={{ width: 250 }} // Witdh for searchbox
            />
        );
    }

    return (
        <Autocomplete
            className='search-box'
            id='highlights-demo'
            sx={{ width: 250 }} // Witdh for searchbox
            onChange={(event, newValue) => {
                if (newValue) {
                    navigate('/' + urlEncryptor(newValue.person), { state: { id: newValue.id } });
                }
            }}
            options={allDataForSearch}
            getOptionLabel={(option) => option.person}
            renderInput={(params) => (
                <TextField {...params} label='Search' margin='normal' InputProps={{ ...params.InputProps, disableUnderline: true }} fullWidth />
            )}
            renderOption={(props, option, { inputValue }) => {
                const matches = match(option.person, inputValue, { insideWords: true });
                const parts = parse(option.person, matches);

                return (
                    <li {...props}>
                        <div className='person-list'>
                            <img className='person-img' src={option.photoUrl} alt={option.person} />
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
