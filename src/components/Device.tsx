import React from 'react';
import styled from '@emotion/styled';
import './css/TeslaMegapackStyles.css';

const StyledDiv = styled.div`
  ${props => props.className}
`;

interface DeviceProps {
    deviceName: string;
    noOfDevices: number;
}

export function Device(props: DeviceProps): JSX.Element {
    const { deviceName, noOfDevices } = props;
    return (
        <>
            {Array.from({ length: noOfDevices }, (_, index) => (
                <StyledDiv key={index} className="tesla-device">
                    {deviceName}
                </StyledDiv>
            ))}
        </>
    );
}