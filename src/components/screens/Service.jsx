import React, { useState } from 'react'
import styled from 'styled-components'
import AddService from './modal/AddService';
import ServiceList from './ServiceList';

const Service = () => {
  const[isAddService, setAddServices] = useState(false)
  return (
      <>
          <MainContainer>
              <ServiceList
                  isAddService={isAddService}
                  setAddServices={setAddServices}
              />
              <AddService
                  isAddService={isAddService}
                  setAddServices={setAddServices}
              />
          </MainContainer>
      </>
  );
}

export default Service

const MainContainer = styled.div`
    height: 100vh;
    padding-left: 270px;
    background: #000;
`;

