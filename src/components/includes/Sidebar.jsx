import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Sidebar = () => {
  return (
      <div>
          <MainContaine>
              <MenuBox>
                  <MenuItemBox to="/accolades/about/">
                      <Title>About</Title>
                  </MenuItemBox>
                  <MenuItemBox to="/accolades/service/">
                      <Title>Service</Title>
                  </MenuItemBox>
                  <MenuItemBox to="/accolades/gallery/">
                      <Title>Gallery</Title>
                  </MenuItemBox>
              </MenuBox>
          </MainContaine>
      </div>
  );
}

export default Sidebar

const MainContaine = styled.div`
    width: 250px;
    position: fixed;
    height: 100vh;
    bottom: 0;
    left: 0;
    top: 0px;
    background-color: var(--color-1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 20;
    transition: all 0.3s ease-in;
    background-color: #1b1c1f;
`;
const MenuBox = styled.div``;
const MenuItemBox = styled(Link)`
    display: flex;
    align-items: center;
    padding: 15px;
`;
const Title = styled.h4`
    color: #fff;
    font-size: 16px;
    font-family: "gordita_medium";
`;
