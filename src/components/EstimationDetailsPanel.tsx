import React from 'react';
import { useSelector } from 'react-redux';
import getEstimation from '../util/PanelCalculator'
import { Table, TableBody, TableRow, TableCell, Typography, Box, Paper } from '@mui/material';


const EstimationDetailsPanel = () => {
    const battery = useSelector((state: any) => state.battery);
    const noofbatteries = battery.noOfBatteries;
    const estimation = getEstimation(battery, noofbatteries);

    console.log(estimation);
    return (
        <>
            <Box m={2}>
                <Paper>
                    <Box p={2}>
                        <Typography variant="h6" gutterBottom>
                            {"Estimation Details"}
                        </Typography>
                        <Typography variant="body1">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{"Land Required for Site:- "}</TableCell>
                                        <TableCell>{estimation.landWidth + "FT(width) X " + estimation.landHeight + "FT(height)"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{"Site Energy:- "}</TableCell>
                                        <TableCell>{estimation.siteEnergy + " MWh"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{"Cost:- "}</TableCell>
                                        <TableCell>{"$" + estimation.price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{"No of Transformers Required:- "}</TableCell>
                                        <TableCell>{estimation.noOfTransformers}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default EstimationDetailsPanel;