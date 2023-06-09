import { FormControl, MenuItem, InputLabel, Select, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch} from 'react-redux';
import { setBatteryType, setNoOfBatteries } from '../reducers/reducer';
import { battery_types } from '../util/Battery';

const InputDetailsPanel: React.FC = () => {
    const dispatch = useDispatch();
    const StyledContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
    });

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        dispatch(setBatteryType(event.target.value))
    };

    const handleNoofBatteryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        dispatch(setNoOfBatteries(event.target.value));
    };

    return (
        <div>
            <form>
                <StyledContainer>
                    <FormControl margin="normal">
                        <InputLabel id="select-label">Type Of Battery</InputLabel>
                        <Select
                            labelId="select-label"
                            onChange={handleOptionChange}
                        >
                            {battery_types && battery_types.map((battery_item) => (
                                <MenuItem value={battery_item.battery_name}>{battery_item.battery_name}</MenuItem>
                            ))}
                        </Select>
                        <TextField
                            name="noofbatteries"
                            label="Number Of Batteries"
                            onChange={handleNoofBatteryChange} required
                        />
                    </FormControl>
                </StyledContainer>
            </form>
        </div>
    );
};

export default InputDetailsPanel;