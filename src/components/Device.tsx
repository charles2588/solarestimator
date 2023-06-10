import React from 'react';
import styled from '@emotion/styled';
import './css/TeslaMegapackStyles.css';

const StyledDiv = styled.div`
  ${props => props.className}
`;

interface renderingDetailsType {
    noOfDevicesPerRow: number,
    noOfDevicesRows: number,
    noOfDevicesOnlastrow: number,
    // noOfBatteriesOnlastrow: noOfBatteriesOnlastrow,
    // excessSpaceLeft: excessSpaceLeft,
    // noOfTransformersToFitInExcess: noOfTransformersToFitInExcess,
    // noOfTransformersLeft: noOfTransformersLeft,
    noOfTransformersPerRow: number,
    noOfTransformersRows: number,
    noOfTransformersOnlastrow: number,
}

interface DeviceProps {
    deviceName: string;
    deviceHeight: number;
    deviceWidth: number,
    // noOfDevices: number;
    // noOfTransformers: number;
    renderingDetails: renderingDetailsType;
}

// const renderingDetails = Object.freeze({
//     noOfDevicesPerRow : noOfDevicesPerRow,
//     noOfDevicesRows : noOfDevicesRows,
//     noOfDevicesOnlastrow: noOfDevicesOnlastrow,
//     // noOfBatteriesOnlastrow: noOfBatteriesOnlastrow,
//     // excessSpaceLeft: excessSpaceLeft,
//     // noOfTransformersToFitInExcess: noOfTransformersToFitInExcess,
//     // noOfTransformersLeft: noOfTransformersLeft,
//     noOfTransformersPerRow: noOfTransformersPerRow,
//     noOfTransformersRows: noOfTransformersRows,
//     noOfTransformersOnlastrow: noOfTransformersOnlastrow,
// });

export function Device(props: DeviceProps): JSX.Element {
    const { deviceName, deviceHeight,deviceWidth, renderingDetails } = props;
    const transformerHeight = 10*10;
    const transformerWidth = 10*10;
    //Setting height and width of preview by 10 multiplier pixel factor
    return (
        <>
            {Array.from({ length: renderingDetails.noOfDevicesRows - 1 }, (_, index) => (
                Array.from({ length: renderingDetails.noOfDevicesPerRow }, (_, index) => (
                    <div key={index} className="tesla-device" style={{ height: `${deviceHeight*10}px`, width: `${deviceWidth*10}px` }}>
                        {deviceName}
                    </div>))
            ))}
            {Array.from({ length: renderingDetails.noOfDevicesOnlastrow }, (_, index) => (
                <div key={index} className="tesla-device" style={{ height: `${deviceHeight*10}px`, width: `${deviceWidth*10}px` }}>
                    {deviceName}
                </div>))}

            {Array.from({ length: renderingDetails.noOfTransformersRows - 1 }, (_, index) => (
                Array.from({ length: renderingDetails.noOfTransformersPerRow }, (_, index) => (
                    <StyledDiv key={index} className="tesla-device" style={{ height: `${transformerHeight}px`, width: `${transformerWidth}px` }}>
                        {"Transformer"}
                    </StyledDiv>))
            ))}
            {Array.from({ length: renderingDetails.noOfTransformersOnlastrow }, (_, index) => (
                <StyledDiv key={index} className="tesla-device" style={{ height: `${transformerHeight}px`, width: `${transformerWidth}px` }}>
                    {"Transformer"}
                </StyledDiv>))}

        </>
    );
}