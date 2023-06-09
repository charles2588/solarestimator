import { useSelector } from 'react-redux';
import { transformer } from '../util/Battery';
import { Table, TableBody, TableRow, TableCell, Typography, Box, Paper } from '@mui/material';

const BatteryDetailsPanel = () => {
  const battery = useSelector((state: any) => state.battery);
  return (
    <>
      <Box m={2}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              {"Device Details"}
            </Typography>
            <Typography variant="body1">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>{"Device Type"}</TableCell>
                    <TableCell>{battery.batteryType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Floor Dimension"}</TableCell>
                    <TableCell>{battery.batteryFloorWidth + "FT(width) X " + battery.batteryFloorHeight + "FT(height)"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Energy"}</TableCell>
                    <TableCell>{battery.batteryEnergy + " MWh"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Cost"}</TableCell>
                    <TableCell>{"$" + battery.batteryCost}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Release Date"}</TableCell>
                    <TableCell>{battery.batteryReleaseDate}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box m={2}>
        <Paper>
          <Box p={2}>
            <Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>{"Transformer Cost"}</TableCell>
                    <TableCell>{transformer.cost}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Transformer Energy"}</TableCell>
                    <TableCell>{transformer.energy}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"Floor Dimension"}</TableCell>
                    <TableCell>{transformer.floor_width + "FT X " + transformer.floor_height + "FT"}</TableCell>
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

export default BatteryDetailsPanel;