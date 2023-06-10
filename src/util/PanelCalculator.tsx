import { transformer } from './Battery';
interface renderingDetails {
    noOfDevicesPerRow : number,
    noOfDevicesRows : number,
    noOfDevicesOnlastrow: number,
    // noOfBatteriesOnlastrow: noOfBatteriesOnlastrow,
    // excessSpaceLeft: excessSpaceLeft,
    // noOfTransformersToFitInExcess: noOfTransformersToFitInExcess,
    // noOfTransformersLeft: noOfTransformersLeft,
    noOfTransformersPerRow: number,
    noOfTransformersRows: number,
    noOfTransformersOnlastrow: number,
}
const getEstimation = (battery:any, noOfBatteries:number) => {
    /* show the price, land dimension required and the sites energy density */
    let noOfTransformers = getTotalTransformers(noOfBatteries);
    let landHeight = battery.batteryFloorHeight * noOfBatteries + (transformer.floor_height * noOfTransformers);
    let landWidth = battery.batteryFloorWidth * noOfBatteries + (transformer.floor_width * noOfTransformers);
    let siteEnergy = battery.batteryEnergy * noOfBatteries - transformer.energy * noOfTransformers;
    let price = battery.batteryCost * noOfBatteries + transformer.cost * noOfTransformers;

    let diff = 0;
    //- The site layouts should not exceed 100ft in width
    // Ensure the land width does not exceed 100 FT
    if (landWidth > 100) {
        diff = landWidth - 100
        landWidth = 100
    }

    if(noOfBatteries == 0){
        const renderingDetails: renderingDetails = {
            noOfDevicesPerRow : 0,
            noOfDevicesRows : 0,
            noOfDevicesOnlastrow: 0,
            // noOfBatteriesOnlastrow: noOfBatteriesOnlastrow,
            // excessSpaceLeft: excessSpaceLeft,
            // noOfTransformersToFitInExcess: noOfTransformersToFitInExcess,
            // noOfTransformersLeft: noOfTransformersLeft,
            noOfTransformersPerRow: 0,
            noOfTransformersRows: 0,
            noOfTransformersOnlastrow: 0,
        };
        return ({
            price: price,
            landHeight: landHeight,
            landWidth: landWidth,
            siteEnergy: siteEnergy,
            noOfTransformers: noOfTransformers,
            renderingDetails: renderingDetails,
        });
    }

    const noOfDevicesPerRow = Math.floor(100 / battery.batteryFloorWidth);
    const noOfDevicesRows = Math.ceil(noOfBatteries / noOfDevicesPerRow);
    //modulo
    const noOfDevicesOnlastrow = noOfBatteries % noOfDevicesPerRow;
    // excessSpaceLeft = 100 - (noOfBatteriesOnlastrow * battery.batteryFloorWidth);
    //render the devices
    landHeight = noOfDevicesRows * battery.batteryFloorHeight;

    // //try fitting transformers now in excess
    // noOfTransformersToFitInExcess = (excessSpaceLeft / transformer.floor_width).toInt();
    // //render this
    // noOfTransformersLeft = noOfTransformers - noOfTransformersToFitInExcess;

    const noOfTransformersPerRow = Math.floor(100 / transformer.floor_width);
    const noOfTransformersRows = Math.ceil(noOfTransformers/noOfTransformersPerRow);
    //modulo
    const noOfTransformersOnlastrow = noOfTransformers % noOfTransformersPerRow;
    landHeight =  landHeight + (noOfTransformersRows * transformer.floor_height);

    //render those

    
    const renderingDetails: renderingDetails = {
        noOfDevicesPerRow : noOfDevicesPerRow,
        noOfDevicesRows : noOfDevicesRows,
        noOfDevicesOnlastrow: noOfDevicesOnlastrow,
        // noOfBatteriesOnlastrow: noOfBatteriesOnlastrow,
        // excessSpaceLeft: excessSpaceLeft,
        // noOfTransformersToFitInExcess: noOfTransformersToFitInExcess,
        // noOfTransformersLeft: noOfTransformersLeft,
        noOfTransformersPerRow: noOfTransformersPerRow,
        noOfTransformersRows: noOfTransformersRows,
        noOfTransformersOnlastrow: noOfTransformersOnlastrow,
    };

    return ({
        price: price,
        landHeight: landHeight,
        landWidth: landWidth,
        siteEnergy: siteEnergy,
        noOfTransformers: noOfTransformers,
        renderingDetails: renderingDetails,
    });
}

const getTotalTransformers = (noOfBatteries:number) => {
    //- Assume that for every 4 industrial batteries bought 1 transformer is needed
    // so if we get 3.5 then we consider we will need 4 transformers
    return Math.ceil(noOfBatteries / 4);
}
export default getEstimation;