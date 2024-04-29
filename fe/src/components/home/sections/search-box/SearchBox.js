import * as React from 'react';
import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const SearchBox = () => {
  const { allDataList } = useContext(AppContext);

  if (!allDataList) {
    return <div>Loading...</div>;
  }
  return (
    <Autocomplete
      className='search-box'
      id='highlights-demo'
      sx={{ width: 300 }}
      options={allDataList}
      getOptionLabel={(option) => option.person.name}
      renderInput={(params) => <TextField {...params} label='Search' margin='normal' />}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.person.name, inputValue, { insideWords: true });
        const parts = parse(option.person.name, matches);

        return (
          <li {...props}>
            <div className='person-list'>
              <img className='person-img' src={option.person.photoUrl} alt={option.name} />
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
