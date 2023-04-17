import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userConfig } from '../../axiosinstance';

const AbotsList = ({
    setAddAbout,
    addAbout,
    editAbout,
    setEditAbout,
    items,
    setItems,
}) => {

    console.log(items,"000000000000000000000");
    return (
        <div>
            <MainContainer>
                <Button
                    onClick={() => {
                        setAddAbout(true);
                    }}
                >
                    Add About
                </Button>
                {/* <AboutContainer>
                    {items.map((item) => (
                        <ContentContainer key={item.id}>
                            <Id>{item.id}.</Id>
                            <Name>{item.name}</Name>
                            <Description>{item.description}</Description>
                            <Button
                                onClick={() => {
                                    setEditAbout(true);
                                }}
                            >
                                Edit About
                            </Button>
                        </ContentContainer>
                    ))}
                </AboutContainer> */}
            </MainContainer>
        </div>
    );
};

export default AbotsList

const Button = styled.button`
    margin-left: 20px;
`;
const MainContainer = styled.div`
    padding-top: 20px;
`;
const AboutContainer = styled.div``;
const ContentContainer = styled.div`
    display: flex;
`;
const Id = styled.h3`
    color: white;
`;
const Name = styled.h3`
    color: white;
    margin-left: 20px;
`;
const Description = styled.h3`
    color: white;
    margin-left: 20px;
`;

