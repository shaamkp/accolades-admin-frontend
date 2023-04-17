import React from 'react'
import styled from 'styled-components';

const ServiceList = ({ isAddService, setAddServices }) => {
    return (
        <div>
            <Button onClick={() => {
                setAddServices(true)
            }}>Add Service</Button>
        </div>
    );
};

export default ServiceList

const Button = styled.button`
    margin-top: 20px;
`;