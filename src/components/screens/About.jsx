import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { userConfig } from '../../axiosinstance';
import { Context } from '../contexts/Store';
import AbotsList from './AbotsList'
import AddAbout from './modal/AddAbout';
import EditAbout from './modal/EditAbout';

const About = () => {
    const [addAbout, setAddAbout] = useState(false);
    const [iseditAbout, setEditAbout] = useState(false);
    const [items, setItems] = useState("");

    const {
        dispatch,
    } = useContext(Context);

    useEffect(() => {
        userConfig.get("web/abouts/").then((response) => {
            console.log(response.data, "-=-=-=-=-=-=-=-");
            const { StatusCode, data } = response.data;
            if (StatusCode === 6000) {
                setItems(data.data);
                dispatch({
                    type: "UPDATE_FETCH_DATA",
                    payload: {
                        items: data.data,
                    },
                });
            }
        });
    }, []);



    return (
        <div>
            <MainContainer>
                <AbotsList
                    setAddAbout={setAddAbout}
                    addAbout={addAbout}
                    setEditAbout={setEditAbout}
                    iseditAbout={iseditAbout}
                    setItems={setItems}
                    items={items}
                />
                <AddAbout setAddAbout={setAddAbout} addAbout={addAbout} />
                <EditAbout
                    setEditAbout={setEditAbout}
                    iseditAbout={iseditAbout}
                    setItems={setItems}
                    items={items}
                />
            </MainContainer>
        </div>
    );
}

export default About

const MainContainer = styled.div`
  background-color: #000;
  height: 100vh;
  padding-left: 270px;
`