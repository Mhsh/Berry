import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    TextField,
    Button,
    FormControl,
    Select,
    MenuItem,
    Switch,
    FormGroup,
    FormControlLabel,
    Typography,
    Snackbar,
    Box,
    Stepper,
    Step,
    StepButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

const ConnectStep1 = () => {
    const [rssName, setRssName] = useState('');
    const [rssUrl, setRssUrl] = useState('');
    const [authentication, setAuthentication] = useState('None');
    const [connectionTimeout, setConnectionTimeout] = useState(10);
    const [storeFullBody, setStoreFullBody] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});


    const [testResultDialogOpen, setTestResultDialogOpen] = useState(false);
    const [testResultMessage, setTestResultMessage] = useState('');

    const [saved, setSaved] = useState(false); // Track whether configuration is saved

    const [existingNames] = useState(['sachin', 'Example Name ']); // Replace with actual existing names ", setExistingNames"
    const [existingUrls] = useState(['www.xada.com', 'example rss']); // Replace with actual existing URLs ", setExistingUrls"

    const validateAndTestConnection = () => {
        // Validation for unique RSS Name
        if (existingNames.includes(rssName)) {
            setSnackbarMessage('The name you entered already exists. Names must be unique. Please choose a different name.');
            setSnackbarOpen(true);
            return;
        }

        // Validation for unique RSS URL
        if (existingUrls.includes(rssUrl)) {
            setSnackbarMessage(`This RSS URL already exists in subscription. Please add a different RSS URL.`);
            setSnackbarOpen(true);
            return;
        }

        // Simulate test results (modify as needed based on actual validation logic)
        const testSuccess = true; // Change to false to simulate test failure

        if (testSuccess) {
            setTestResultMessage('The RSS URL is accessible and has been validated as a valid RSS source.');
        } else {
            setTestResultMessage('Unable to connect to the RSS URL or the source is not a valid RSS feed.');
        }

        setTestResultDialogOpen(true);
    };

    const handleCloseTestResultDialog = () => {
        setTestResultDialogOpen(false);
    };

    const saveConfiguration = () => {
        // Validation for unique RSS Name
        if (existingNames.includes(rssName)) {
            setSnackbarMessage('The name you entered already exists. Names must be unique. Please choose a different name.');
            setSnackbarOpen(true);
            return;
        }

        // Validation for unique RSS URL
        if (existingUrls.includes(rssUrl)) {
            setSnackbarMessage(`This RSS URL already exists in subscription. Please add a different RSS URL.`);
            setSnackbarOpen(true);
            return;
        }

        // Implement logic to save configuration
        setSnackbarMessage('Configuration saved successfully');
        setSnackbarOpen(true);
        setSaved(true); // Set saved to true
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const steps = ['Connect', 'Map', 'Test', 'Schedule'];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const navigate = useNavigate();
    // const handleNext = () => {
    //     navigate('/subscriptions/subscription-2map', { state: { rssName, rssUrl } });
    //     const newActiveStep =
    //         isLastStep() && !allStepsCompleted()
    //             ? steps.findIndex((step, i) => !(i in completed))
    //             : activeStep + 1;
    //     setActiveStep(newActiveStep);
    // };
    const handleNext = () => {
        navigate('/subscriptions/subscription-2map', {
            state: {
                rssName,
                rssUrl,
                step1Completed: true, // Indicate that Step 1 is completed
            },
        });
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setSaved(false); // Reset saved to false
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="primary" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 4 }}>
                                <Box sx={{ flex: '1 1 50%', marginRight: 1 }}>
                                    <Typography variant="subtitle1">RSS Name</Typography>
                                    <TextField
                                        value={rssName}
                                        onChange={(e) => setRssName(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        error={existingNames.includes(rssName)}
                                        helperText={existingNames.includes(rssName) && 'Name must be unique. Please choose a different name.'}
                                    />
                                </Box>

                                <Box sx={{ flex: '1 1 50%' }}>
                                    <Typography variant="subtitle1">RSS URL</Typography>
                                    <TextField
                                        value={rssUrl}
                                        onChange={(e) => setRssUrl(e.target.value)}
                                        fullWidth
                                        variant="outlined"
                                        error={existingUrls.includes(rssUrl)}
                                        helperText={existingUrls.includes(rssUrl) && `This RSS URL already exists in subscription. Please add a different RSS URL.`}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', pt: 2, marginTop: 2 }}>
                                {/* <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ marginRight: 1 }}
                                >
                                    Back
                                </Button> */}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={validateAndTestConnection}
                                    sx={{ marginRight: 1 }}
                                >
                                    Test Connection
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={saveConfiguration}
                                    sx={{ marginRight: 1 }}
                                >
                                    Save
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    sx={{ marginRight: 1 }}
                                    disabled={!saved} // Disable if configuration is not saved
                                >
                                    Next
                                </Button>

                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button variant="contained"
                                            color="primary" onClick={handleComplete} disabled={!saved}>
                                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>

            <FormControl fullWidth variant="outlined" style={{ marginTop: 16, width: '40%' }}>
                <Typography variant="subtitle1" >Authentication Type</Typography>
                <Select
                    value={authentication}
                    onChange={(e) => setAuthentication(e.target.value)}
                // label="Authentication"
                >
                    <MenuItem value="None">None</MenuItem>
                </Select>
            </FormControl>

            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                Connection Timeout (seconds)
            </Typography>
            <TextField
                type="number"
                value={connectionTimeout}
                onChange={(e) => setConnectionTimeout(e.target.value)}
                fullWidth
                variant="outlined"
                style={{ width: '25%' }}
            />

            <FormGroup style={{ marginTop: 16 }}>
                <FormControlLabel
                    control={<Switch checked={storeFullBody} onChange={() => setStoreFullBody(!storeFullBody)} />}
                    label="Store Full Body"
                />
            </FormGroup>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />

            <Dialog open={testResultDialogOpen} onClose={handleCloseTestResultDialog}>
                <DialogTitle>Test Connection Result</DialogTitle>
                <DialogContent>
                    <Typography>{testResultMessage}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTestResultDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConnectStep1;
