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
} from '@mui/material';

const Subscription3Test = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [rssName, setRssName] = useState('');
  const [rssUrl, setRssUrl] = useState('');
  const [selectedTargetFields, setSelectedTargetFields] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    // Set RSS Name, RSS URL, and selected target fields from the location state
    if (location.state) {
      setRssName(location.state.rssName);
      setRssUrl(location.state.rssUrl);
      setSelectedTargetFields(location.state.selectedTargetFields || {});

      // Check if Step 1 and Step 2 are completed
      const isStep1Completed = location.state.step1Completed || false;
      const isStep2Completed = location.state.step2Completed || false;

      // Update completed steps array
      setCompletedSteps([isStep1Completed, isStep2Completed]);
    }
  }, [location.state]);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  const handleDiscardChanges = () => {
    setUnsavedChanges(false);
    setSaveDialogOpen(false);

    // Redirect to the previous page without saving changes
    navigate('/subscriptions/subscription-2map', { state: { rssName, rssUrl } });
  };

  const handleTest = () => {
    // Implement logic to generate a sample output and create a zip file
    // For demonstration purposes, let's assume testing is successful
    // need to replace this with the actual logic for generating and downloading the zip file
    console.log('Testing the mapping and generating a sample output.');
  };

  const handleNext = () => {
    // Implement logic to move to the next step
    navigate('/subscriptions/subscription-4schedule', { state: { rssName, rssUrl } });
    // Additional logic if needed
  };

  const handlePrevious = () => {
    if (unsavedChanges) {
      setSaveDialogOpen(true);
    } else {
      navigate('/subscriptions/subscription-2map', { state: { rssName, rssUrl } });
      // Implement logic to move to the previous step
      // For example, redirect to the previous step page
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
      navigate('/subscriptions/subscription-2map', { state: { rssName, rssUrl } });
    } else {
      // Handle the case when changes are discarded
      setUnsavedChanges(false);
      setSaveDialogOpen(false); // Close the dialog
    }
  };

  // Sample data for the mapping table (replace it with the actual data)
  const sourceFields = ['title', 'link', 'description', 'guid', '...'];

  return (
    <div>
      <Stepper nonLinear activeStep={2}>
        <Step key="Connect" completed={completedSteps[0]}>
          <StepButton>Connect</StepButton>
        </Step>
        <Step key="Map" completed={completedSteps[1]}>
          <StepButton>Map</StepButton>
        </Step>
        <Step key="Test">
          <StepButton>Test</StepButton>
        </Step>
        <Step key="Schedule">
          <StepButton>Schedule</StepButton>
        </Step>
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

        <Button variant="contained" color="primary" onClick={handleTest} sx={{ marginRight: 1 }}>
          Test
        </Button>

        <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginRight: 1 }}>
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
            <TableRow>
              <TableCell sx={{ width: '40%', fontWeight: 'bold' }}>Source Fields</TableCell>
              <TableCell sx={{ width: '40%', fontWeight: 'bold' }}>Target Fields</TableCell>
            </TableRow>
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
                  <TextField
                    value={selectedTargetFields[sourceField] || ''}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default Subscription3Test;
