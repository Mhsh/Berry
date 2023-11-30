import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from '@mui/material';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TablePagination from '@mui/material/TablePagination'; // Import TablePagination
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CustomizedInputBase from 'ui-component/extended/Form/SearchBar';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Set the number of rows per page

  // const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {

    // Fetch data from the API using Axios
    //   axios.get('https://dummyjson.com/users?limit=20')
    //     .then((response) => {
    //       setData(response.data.users);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //       setLoading(false);
    //     });
    // }, []); // The empty dependency array ensures this effect runs once when the component mounts

    axios.get('https://dummyjson.com/products?limit=50')
      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // const handleSearch = (value) => {
  //   const filtered = data.filter((item) => {
  //     return item.title.toLowerCase().includes(value.toLowerCase());
  //   });
  //   setFilteredData(filtered);
  // };

  // Function to handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Function to handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // function to delete row
  const handleDelete = (id) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this subscription? This action cannot be undone and will:\nStop the subscription content and delete all associated data.'
    );

    if (isConfirmed) {
      console.log(`Deleting item with ID: ${'id'}`);

      // Perform the DELETE request
      fetch(`https://dummyjson.com/products/${'id'}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((deletedData) => {
          console.log('Item deleted:', deletedData);

          // Update data state to reflect the deletion
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    }
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = data.slice(startIndex, endIndex);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {/* <h1>API Data Table</h1> */}
      <Stack spacing={60} direction="row">
        <Button color="secondary" variant="contained" endIcon={<AddIcon />}>Add Subscription</Button>
        {/* <CustomizedInputBase onSearch={handleSearch}/> */}
        <CustomizedInputBase/>
      </Stack>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TableContainer>
            <Table>
              {/* <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>id</TableCell>
                        <TableCell >Subscription_Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Status</TableCell>                       
                        <TableCell>Connector_Type</TableCell>
                        <TableCell>Schedule</TableCell>
                        <TableCell>Reporting</TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead> */}

              <TableHead>
                <TableRow >
                  {/* <TableCell sx={{ pl: 3 }}>id</TableCell> */}
                  <TableCell >title</TableCell>
                  <TableCell>category</TableCell>
                  <TableCell>price</TableCell>
                  <TableCell>discountPercentage</TableCell>
                  <TableCell>rating</TableCell>
                  <TableCell>stock</TableCell>
                  <TableCell align="center" sx={{ pr: 3 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* <TableBody>
                    
           {data && Array.isArray(data) && data.map((row,id) => (
                            <TableRow hover key={id}>
                                
                                 <TableCell  sx={{ pl: 3 }}>{row.id}</TableCell>
                                <TableCell>{row.firstName}</TableCell>                            
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.maidenName}</TableCell>                            
                                <TableCell>{row.age}</TableCell>
                                <TableCell>{row.gender}</TableCell>                            
                                <TableCell>{row.email}</TableCell> 
                                <TableCell>
                                <IconButton aria-label="edit" onClick={() => handleEdit(row.id)}>
                                 <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
                                  <DeleteIcon />
                               </IconButton>
                               <IconButton aria-label="file copy" onClick={() => handleFileCopy(row.id)}>
                                  <FileCopyIcon />
                               </IconButton>
                                  </TableCell>                              
                            </TableRow>                          
                        ))}                       
                </TableBody>    */}

              <TableBody>

                {displayedData && Array.isArray(displayedData) && displayedData.map((row, id) => (
                  <TableRow hover key={id}>

                    {/* <TableCell  sx={{ pl: 3 }}>{row.id}</TableCell> */}
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.discountPercentage}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.stock}</TableCell>
                    <TableCell>
                      <IconButton aria-label="file copy" color="secondary" onClick={() => handleFileCopy(row.id)}>
                        <FileCopyIcon />
                      </IconButton>
                      <IconButton aria-label="edit" color="secondary" onClick={() => handleEdit(row.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={data.length}
            // count={filteredData.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}

export default App;
