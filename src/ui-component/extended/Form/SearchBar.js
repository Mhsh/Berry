import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

export default function CustomizedInputBase({ onSearch, originalData }) {
  const theme = useTheme();
  const [searchText, setSearchText] = React.useState('');
  const [, setFilteredData] = React.useState(originalData || []);

  React.useEffect(() => {
    //Defining the originalData 
    if (originalData) {
      // Filter data based on search text
      const filtered = originalData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.category.toLowerCase().includes(searchText.toLowerCase())
      );

      // Update the filtered data when the search text changes
      setFilteredData(filtered);
    }
  }, [originalData, searchText]);

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      handleSearch();
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSearch();
  };
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, borderRadius: '10px',
        boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.1)', color: theme.palette.grey[700]
      }}
      onSubmit={handleSubmit} // Handle form submission
    >

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}

        onChange={(e) => setSearchText(e.target.value)}
        onClick={handleKeyPress}
        // onKeyDown={handleKeyPress} 
        onKeyDown={handleKeyDown} // Use onKeyDown to handle Enter key press
      />

    </Paper>
  );
}

