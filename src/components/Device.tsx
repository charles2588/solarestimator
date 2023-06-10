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
    noOfTransformers:number,
    noOfDevices:number,
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
    const transformerHeight = 10*5;
    const transformerWidth = 10*5;
    
    //Setting height and width of preview by 10 multiplier pixel factor
    console.log(renderingDetails);
    return (
        <>
            <div className='devices-container'>
            {Array.from({ length: renderingDetails.noOfDevicesRows}, (_, index) => (
                <div className='tesla-device-row'>
                {Array.from({ length: renderingDetails.noOfDevicesPerRow }, (_, index) => (
                    <div key={index} className="tesla-device" style={{ height: `${deviceHeight*7}px`, width: `${deviceWidth*7}px` }}>
                        {deviceName}
                    </div>
                    ))}
                </div>
            ))}
            <div className='tesla-device-row'>
            {Array.from({ length: renderingDetails.noOfDevicesOnlastrow }, (_, index) => (
                <div key={index} className="tesla-device" style={{ height: `${deviceHeight*7}px`, width: `${deviceWidth*7}px` }}>
                    {deviceName}
                </div>))}
            </div>
            </div>
            <div className='devices-container'>
            {Array.from({ length: renderingDetails.noOfTransformersRows }, (_, index) => (
                <div className='tesla-device-row'>
                {Array.from({ length: renderingDetails.noOfTransformersPerRow }, (_, index) => (
                    <StyledDiv key={index} className="tesla-device" style={{ height: `${transformerHeight}px`, width: `${transformerWidth}px` }}>
                        {"Transformer"}
                    </StyledDiv>))}
                </div>
            ))}
            <div className='tesla-device-row'>
            {Array.from({ length: renderingDetails.noOfTransformersOnlastrow }, (_, index) => (
                <StyledDiv key={index} className="tesla-device" style={{ height: `${transformerHeight}px`, width: `${transformerWidth}px` }}>
                    {"Transformer"}
                </StyledDiv>))}
            </div>
            </div>
        </>
    );
}