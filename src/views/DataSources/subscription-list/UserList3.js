import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  Paper,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomizedInputBase from 'ui-component/extended/Form/SearchBar';
import axios from 'axios';

function DataTable() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  // const [, setSelectedRows] = React.useState([]);
  const [originalData, setOriginalData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=50')     //Fetching dummy data
      .then((response) => {
        const products = response.data.products;
        setData(products);
        setOriginalData(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {               // Redirect to the 'subscription-main' page
    navigate('/subscriptions/subscription-main');
  };

  // Opens the delete confirmation dialog
  const handleDelete = (id) => {
    setDeleteItemId(id);
    setDeleteDialogOpen(true);
  };

  // Closes the delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setDeleteItemId(null);
    setDeleteDialogOpen(false);
  };

  // Closes the delete confirmation dialog
  const handleConfirmDelete = () => {
    setDeleteItemId(null);
    setDeleteDialogOpen(false);

    if (deleteItemId) {
      console.log(`Deleting item with ID: ${deleteItemId}`);

      fetch(`https://dummyjson.com/products/${deleteItemId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => {
          const updatedData = data.filter((item) => item.id !== deleteItemId);
          setData(updatedData);
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    }
  };

  // Filter data based on the search text
  const handleSearch = (searchText) => {
    const filteredData = originalData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: 2 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        spacing={2}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
      >
        <Button color="secondary" variant="contained" startIcon={<AddIcon />} onClick={handleButtonClick}>
          Add Subscription
        </Button>
        <CustomizedInputBase onSearch={handleSearch} />
      </Stack>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ height: 450, width: '100%', marginTop: '20px' }}>
          <DataGrid
            rows={data}
            columns={[
              { field: 'id', headerName: 'ID', width: 85 },
              { field: 'title', headerName: 'Title', width: 180 },
              { field: 'category', headerName: 'Category', width: 150 },
              { field: 'price', headerName: 'Price', type: 'number', width: 120 },
              { field: 'discountPercentage', headerName: 'Discount %', type: 'number', width: 150 },
              { field: 'rating', headerName: 'Rating', type: 'number', width: 120 },
              { field: 'stock', headerName: 'Stock', type: 'number', width: 120 },
              {
                field: 'actions',
                headerName: 'Actions',
                width: 150,
                sortable: false,
                renderCell: (params) => (
                  <Stack direction="row" spacing={1}>
                    {/* <IconButton
                      aria-label="file copy"
                      color="secondary"
                      onClick={() => handleFileCopy(params.id)}
                    >
                      <FileCopyIcon />
                    </IconButton> */}
                    <IconButton
                      aria-label="edit"
                      color="secondary"
                      onClick={() => handleEdit(params.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() => handleDelete(params.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                ),
              },
            ]}
            rowsPerPageOptions={[5, 10, 25, 100]}
            pageSize={rowsPerPage}
            pagination
            page={page}
            onPageChange={(newPage) => setPage(newPage.page)}
            onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize.pageSize)}
          />
        </div>
      )}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h3" sx={{ marginBottom: 2 }}>
              Are you sure you want to delete this subscription?
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              This action cannot be undone and will stop the subscription content and delete all associated data.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default DataTable;


