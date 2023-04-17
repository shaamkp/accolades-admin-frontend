import React, { useState } from 'react'
import styled from 'styled-components'
import GalleryList from './GalleryList'
import AddGallery from './modal/AddGallery'

const Gallery = () => {
  const [isAddGallery, setAddGallery] = useState(false)
  return (
      <div>
          <MainContainer>
              <GalleryList
                  setAddGallery={setAddGallery}
                  isAddGallery={isAddGallery}
              />
              <AddGallery
                  setAddGallery={setAddGallery}
                  isAddGallery={isAddGallery}
              />
          </MainContainer>
      </div>
  );
}

export default Gallery

const MainContainer = styled.div`
    height: 100vh;
    padding-left: 270px;
    background-color: #000;
`;