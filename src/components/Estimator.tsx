import React from 'react';
import { Grid } from '@mui/material';
import InputDetailsPanel from './InputDetailsPanel';
import BatteryDetailsPanel from './BatteryDetailsPanel';
import PlanLayoutPanel from './PlanLayoutPanel';
import EstimationDetailsPanel from './EstimationDetailsPanel';

const Estimator = () => {
    return (
        <>
            <Grid container spacing={2} border={1}>
                <Grid item xs={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} border={1}>
                            <InputDetailsPanel />
                        </Grid>
                        <Grid item xs={12}>
                            <BatteryDetailsPanel/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8} border={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} border={1}>
                            <EstimationDetailsPanel/>
                        </Grid>
                        <Grid item xs={12}>
                            <PlanLayoutPanel />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Estimator;