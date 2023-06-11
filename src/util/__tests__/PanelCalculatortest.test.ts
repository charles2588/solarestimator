import getEstimation from '../PanelCalculator'; // Update with the correct file name

describe('getEstimation', () => {
  it('should calculate the rendering details correctly', () => {
    const battery = {
      batteryFloorHeight: 10,
      batteryFloorWidth: 20,
      batteryEnergy: 100,
      batteryCost: 500,
    };
    const noOfBatteries = 5;

    const expectedRenderDetails = {
      noOfDevicesPerRow: 5,
      noOfDevicesRows: 1,
      noOfDevicesOnlastrow: 0,
      noOfTransformersPerRow: 10,
      noOfTransformersRows: 0,
      noOfTransformersOnlastrow: 2,
      noOfTransformers: 2,
      noOfDevices: 5,
    };

    const estimation = getEstimation(battery, noOfBatteries);

    expect(estimation.renderingDetails).toEqual(expectedRenderDetails);
  });

  it('should cap the landWidth at 100 FT', () => {
    const battery = {
      batteryFloorHeight: 10,
      batteryFloorWidth: 50,
      batteryEnergy: 100,
      batteryCost: 500,
    };
    const noOfBatteries = 2;

    const expectedLandWidth = 100;

    const estimation = getEstimation(battery, noOfBatteries);
    expect(estimation.landWidth).toEqual(expectedLandWidth);
  });
});
