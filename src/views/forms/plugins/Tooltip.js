import React from 'react';

// material-ui

import { Fab, Grid } from '@mui/material';
import MuiTooltip from '@mui/material/Tooltip';

// project imports

import { gridSpacing } from 'store/constant';

// assets

import AddIcon from '@mui/icons-material/Add';


// ==============================|| PLUGIN - TOOLTIP ||============================== //

function Tooltip() {
     React.useState(false);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6} lg={4}>
               
                    <Grid container spacing={1} alignItems="center">
                       
                        <Grid item>
                            <MuiTooltip title="Add" aria-label="add">
                                <Fab size="small" color="primary" sx={{ m: 2 }}>
                                    <AddIcon />
                                </Fab>
                            </MuiTooltip>
                        </Grid>
                    </Grid>
               
            </Grid>
           
        </Grid>
    );
}

export default Tooltip;
