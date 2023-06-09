import {transformer} from './Battery';
const getEstimation = (battery, noOfBatteries) => {
    {/* show the price, land dimension required and the sites energy density */ }
    let noOfTransformers = getTotalTransformers(noOfBatteries);
    let landHeight = battery.batteryFloorHeight * noOfBatteries + (transformer.floor_height * noOfTransformers);
    let landWidth = battery.batteryFloorWidth * noOfBatteries + (transformer.floor_width * noOfTransformers);
    let siteEnergy = battery.batteryEnergy * noOfBatteries - transformer.energy * noOfTransformers;
    let price = battery.batteryCost * noOfBatteries + transformer.cost * noOfTransformers;

    //- The site layouts should not exceed 100ft in width
    if(landWidth > 100){
        // alert("Land Width cannot exceed 100 FT, reduce number of devices");
        // return ({
        //     price: 0,
        //     landHeight: 0,
        //     landWidth: 0,
        //     siteEnergy: 0,
        //     noOfTransformers: 0,
        // });
    }

    return ({
        price: price,
        landHeight: landHeight,
        landWidth: landWidth,
        siteEnergy: siteEnergy,
        noOfTransformers: noOfTransformers,
    });
}

const getTotalTransformers = (noOfBatteries) => {
    //- Assume that for every 4 industrial batteries bought 1 transformer is needed
    // so if we get 3.5 then we consider we will need 4 transformers
    return Math.ceil(noOfBatteries / 4);
}
export default getEstimation;