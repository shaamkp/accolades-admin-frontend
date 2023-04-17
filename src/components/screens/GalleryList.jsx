import React from 'react'
import styled from 'styled-components';

const GalleryList = ({ isAddGallery, setAddGallery }) => {
    return (
        <div>
            <Button
                onClick={() => {
                    setAddGallery(true);
                }}
            >
                Add Gallery
            </Button>
        </div>
    );
};

export default GalleryList


const Button = styled.button`
    margin-top: 20px;
`;
