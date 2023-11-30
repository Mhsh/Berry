import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
} from '@mui/material';

const Subscription2Map = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [rssName, setRssName] = useState('');
  const [rssUrl, setRssUrl] = useState('');

  useEffect(() => {
    // Set RSS Name and RSS URL from the location state
    if (location.state) {
      setRssName(location.state.rssName);
      setRssUrl(location.state.rssUrl);
    }
  }, [location.state]);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [isMappingSaved, setIsMappingSaved] = useState(false);

  const handleSave = () => {
    // Implement logic to save mapping information
    // For demonstration purposes, let's assume saving is successful
    // In a real application, you would have an API call or some asynchronous operation here
    setIsMappingSaved(true);
    setUnsavedChanges(false);
    setSaveDialogOpen(false);
    // Additional logic if needed
  };

  const handleDiscardChanges = () => {
    setUnsavedChanges(false);
    setSaveDialogOpen(false);

    // Redirect to the previous page without saving changes
    navigate('/subscriptions/subscription-1connect', { state: { rssName, rssUrl } });
  };

  const handleNext = () => {
    // Implement logic to move to Step 3 only if mapping is saved
    if (isMappingSaved) {
      navigate('/subscriptions/subscription-3test', {
        state: { rssName, rssUrl, selectedTargetFields, step1Completed: true, step2Completed: true, },
      });
      // For example, redirect to the Step 3 page
      // Additional logic if needed
    } else {
      // Show a message or take appropriate action if mapping is not saved
      console.log('Please save mapping information before proceeding to Step 3.');
    }
  };

  const handlePrevious = () => {
    if (unsavedChanges) {
      setSaveDialogOpen(true);
    } else {
      navigate('/subscriptions/subscription-1connect', { state: { rssName, rssUrl } });
      // Implement logic to move to Step 1
      // For example, redirect to the Step 1 page
      // Additional logic if needed
    }
  };

  const handleCloseSaveDialog = () => {
    setSaveDialogOpen(false);
  };

  const handleConfirmNavigation = (confirm) => {
    if (confirm) {
      // Reset unsaved changes after successfully navigating
      setUnsavedChanges(false);
      navigate('/subscriptions/subscription-1connect', { state: { rssName, rssUrl } });
    } else {
      // Handle the case when changes are discarded
      setUnsavedChanges(false);
      setSaveDialogOpen(false); // Close the dialog
    }
  };

  // Sample data for the mapping table (replace it with actual data)
  const sourceFields = ['title', 'link', 'description', 'guid', '...'];
  const targetFields = ['documentTitle', 'documentSourceLink', 'documentDescription', 'documentID', '...'];

  // State to store the selected target fields for mapping
  const [selectedTargetFields, setSelectedTargetFields] = useState({});

  // Handler to update the selected target field for a source field
  const handleTargetFieldChange = (sourceField, targetField) => {
    setSelectedTargetFields((prevSelected) => ({
      ...prevSelected,
      [sourceField]: targetField,
    }));
    setUnsavedChanges(true);
  };

  const steps = ['Connect', 'Map', 'Test', 'Schedule'];

  return (
    <div>
      <Stepper nonLinear activeStep={1}>
        {steps.map((label, index) => (
          <Step key={label} completed={index < 1}>
            <StepButton>{label}</StepButton>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 4 }}>
        <Box sx={{ flex: '1 1 50%', marginRight: 1 }}>
          <Typography variant="subtitle1">RSS Name</Typography>
          <TextField value={rssName} fullWidth variant="outlined" disabled />
        </Box>

        <Box sx={{ flex: '1 1 50%' }}>
          <Typography variant="subtitle1">RSS URL</Typography>
          <TextField value={rssUrl} fullWidth variant="outlined" disabled />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handlePrevious} sx={{ marginRight: 1 }}>
          Previous
        </Button>

        <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginRight: 1 }} disabled={!unsavedChanges}>
          Save
        </Button>

        <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginRight: 1 }} disabled={!isMappingSaved}>
          Next
        </Button>
      </Box>

      <Dialog open={saveDialogOpen} onClose={handleCloseSaveDialog}>
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          <Typography>
            Do you want to save your changes before proceeding to the previous step?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmNavigation(true)} color="primary">
            Save Changes
          </Button>
          <Button onClick={() => handleDiscardChanges(false)} color="primary">
            Discard Changes
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ marginTop: 4 }}>
        <Table>
          <TableBody>
            {sourceFields.map((sourceField) => (
              <TableRow key={sourceField}>
                <TableCell sx={{ width: '40%' }}>
                  <TextField
                    value={sourceField}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ width: '40%' }}>
                  <Select
                    value={selectedTargetFields[sourceField] || ''}
                    onChange={(e) => handleTargetFieldChange(sourceField, e.target.value)}
                  >
                    {targetFields.map((targetField) => (
                      <MenuItem key={targetField} value={targetField}>
                        {targetField}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default Subscription2Map;
