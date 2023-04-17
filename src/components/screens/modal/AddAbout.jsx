import React, { useState } from 'react'
import styled from 'styled-components'
import { userConfig } from '../../../axiosinstance';


const AddAbout = ({ setAddAbout, addAbout }) => {
    const [name, setName] = useState("")
    const [description, setDescritpion] = useState("")
    const [photo, setPhoto] = useState([])
    const [imageUrl, setImageUrl] = useState("")

    const handlephoto = (event) => {
        setPhoto(event.target.files[0]);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);

        // Handle the image content
        fileReader.onload = () => {
            const imageContent = fileReader.result;
            setImageUrl(imageContent);
        };
    };

    const handleAddAbout = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("photo", photo);

        userConfig.post("web/add-abouts/", formData, {})
        .then((response) => {
            const { StatusCode } = response.data;
            if (StatusCode === 6000) {
                setAddAbout(false)
            }

        })
    }
        
        return (
            <div>
                <Cover className={addAbout ? "active" : ""}>
                    <Modal>
                        <FormContainer>
                            <Form>
                                <NameDiv>
                                    <NameInput
                                        type="text"
                                        placeholder="Enter the About name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </NameDiv>
                                <DescriptionDiv>
                                    <TextArea
                                        rows="4"
                                        cols="50"
                                        placeholder="Enter the description"
                                        onChange={(e) =>
                                            setDescritpion(e.target.value)
                                        }
                                    />
                                </DescriptionDiv>
                                <PhotoDiv>
                                    <PhotoInput
                                        type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                        placeholder="photo"
                                        onChange={handlephoto}
                                    />
                                </PhotoDiv>
                                <Button onClick={handleAddAbout}>Submit</Button>
                            </Form>
                        </FormContainer>
                    </Modal>
                </Cover>
            </div>
        );
};

export default AddAbout

const Cover = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: scale(0, 0);
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0;
    &.active {
        transform: scale(1, 1);
        backdrop-filter: blur(4px);
    }
`;
const Modal = styled.div`
    width: 90%;
    max-width: 736px;
    max-height: 100vh;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: 1000;
    border: 1px solid #26272a;
    background: #fff;
    border-radius: 5px;
    overflow-y: hidden;
    box-shadow: 0px 3px 56px #00000048;
    overflow-y: scroll;
    padding: 50px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
const FormContainer = styled.div`
`;
const Form = styled.form``;
const NameDiv = styled.div`
    margin-top: 20px;
`;
const NameInput = styled.input`
    padding: 5px;
`;
const DescriptionDiv = styled.div`
    margin-top: 20px;
`;
const TextArea = styled.textarea``;
const PhotoDiv = styled.div`
    margin: 20px 20px;
`;
const PhotoInput = styled.input``;
const Button = styled.button`
    padding: 5px;
    width: 50%;
    margin: 0 auto;
    display: block;
`;