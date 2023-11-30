import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  TextareaAutosize,
  Snackbar,
  Divider,
  Box,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CustomizedInputBase from 'ui-component/extended/Form/SearchBar';
import { useNavigate } from 'react-router-dom';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const SubscriptionForm = () => {
  const [subscriptionName, setSubscriptionName] = React.useState('');
  const [connectorType, setConnectorType] = React.useState('RSS Connector');
  const [description, setDescription] = React.useState('');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSave = () => {
    // Checking if subscriptionName already exists
    if (subscriptionName === 'existingName') {
      setSnackbarOpen(true);
    } else {
      // Handle saving subscription details
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/subscriptions/subscription-1connect');
  };

  // Filter data based on the search text
  const handleSearch = () => {
    // search functionality
  };

  const handleEdit = (id) => {
    // Handle edit action, navigate to the edit screen or open a dialog
    console.log(`Edit RSS with ID: ${id}`);
  };

  const handleDelete = () => {
    // Handle delete action
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    // Close the delete confirmation dialog
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Close the delete confirmation dialog
    setDeleteDialogOpen(false);
    console.log('Deleting selected RSS items:', selectedRows);
    // TODO: Implement logic to delete selected RSS items from the UI
  };

  const columns = [
    { field: 'rssName', headerName: 'RSS Name', width: 200 },
    { field: 'rssURL', headerName: 'RSS URL', width: 250 },
    { field: 'authType', headerName: 'Auth Type', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'schedule', headerName: 'Schedule', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="edit"
            color="secondary"
            onClick={() => handleEdit(params.id)}
          >
            <EditIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  // Empty rows array
  const rows = [];

  // RSS URL Table
  const dataGrid = (
    <div style={{ height: 400, width: '100%' }}>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        checkboxSelection
        onSelectionModelChange={(newSelection) => setSelectedRows({ selectionModel: newSelection })}
        rowsPerPageOptions={[5, 10, 25]} // Specify the rows per page options
      />
    </div>
  );
  return (
    <>
      <div>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={6}>
            <Typography variant="h5">Subscription Name</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={subscriptionName}
              onChange={(e) => setSubscriptionName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Connector Type </Typography>
            <FormControl fullWidth variant="outlined">
              <Select
                value={connectorType}
                onChange={(e) => setConnectorType(e.target.value)}
                label="Connector Type"
              >
                <MenuItem value="RSS Connector">RSS Connector</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12}>
            <Typography variant="h5">Description</Typography>
            <TextareaAutosize
              rows={4}
              placeholder="Enter description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider style={{ margin: '10px 0' }} />
          </Grid>
          {/* Save Button */}
          <Grid item xs={12} justifyContent="flex-end" container>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ marginBottom: '30px' }}
            >
              Save
            </Button>
          </Grid>
        </Grid>

        {/* Snackbar for existing subscription name */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="The subscription name you entered already exists. Subscription names must be unique. Please choose a different name for this subscription."
        />

        <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent="flex-start" spacing={2} alignItems="center">
          <Button
            color="secondary"
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleButtonClick}
          >
            Add RSS URL
          </Button>
          <DeleteTwoToneIcon
            onClick={handleDelete}
            style={{ cursor: 'pointer' }}
            onMouseOver={() => {
              document.body.style.cursor = 'pointer';
            }}
            onMouseOut={() => {
              document.body.style.cursor = 'default';
            }}
          />
          <Box flex={1} />
          <CustomizedInputBase onSearch={handleSearch} />
        </Stack>
      </div>

      {/* RSS URL Table */}
      {dataGrid}


      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <Dialog
            open={deleteDialogOpen}
            onClose={handleCloseDeleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography variant="h6">
                  Are you sure you want to delete the selected RSS?
                </Typography>
                <Typography variant="body2">
                  This action cannot be undone and will stop the RSS content and delete all associated data.
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
        </Stack>
      </Stack>
    </>
  );
};

export default SubscriptionForm;
