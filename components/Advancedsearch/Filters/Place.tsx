import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


interface SearchResult {
    id: number;
    name: string;
    // add any other properties here
}

function Index() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const handleSearch = async () => {
        //${searchValue}
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data);
    };

    const handleChipClick = (result: SearchResult) => {
        console.log(result);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: '4px' }}>
                <TextField
                    label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="contained" onClick={handleSearch} sx={{mx:"10px"}}>Search</Button>
            </Box>
            <Box sx={{
                display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', '-ms-overflow-style': 'none',
                scrollbarWidth: 'none',
                marginTop: 2,
                marginBottom: 2,
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                {searchResults.map((result) => (
                    <Chip
                        key={result.id}
                        label={result.name}
                        clickable
                        onClick={() => handleChipClick(result)}
                    />
                ))}
            </Box>
        </div>
    );
};

export default Index;
