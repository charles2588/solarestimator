import { createSlice } from "@reduxjs/toolkit";
import {battery_types} from "../util/Battery";

const initialBatteryState = {
    batteryType: "",
    batteryName: "",
    batteryFloorHeight: 0,
    batteryFloorWidth: 0,
    batteryEnergy:0,
    batteryCost: 0,
    batteryReleaseDate: 0,
    noOfBatteries:0,
}

const getBatteryDetails = (input_battery: any) => {
    return battery_types.find((battery) => battery.battery_name === input_battery);
}

const batterySlice = createSlice({
    name: 'battery',
    initialState: initialBatteryState,
    reducers: {
        setBatteryType: (state, action) => {
            state.batteryType = action.payload;
            const battery = getBatteryDetails(state.batteryType);
            if (battery) {
                state.batteryCost = battery?.cost;
                state.batteryFloorHeight = battery?.floor_height;
                state.batteryFloorWidth = battery?.floor_width;
                state.batteryName = battery?.battery_name;
                state.batteryEnergy = battery?.energy;
                state.batteryReleaseDate = battery?.release_date;
            }
        },
        setNoOfBatteries: (state, action) => {
            state.noOfBatteries = action.payload;
        },
    },
});


export const { setBatteryType, setNoOfBatteries} = batterySlice.actions;

export default batterySlice.reducer