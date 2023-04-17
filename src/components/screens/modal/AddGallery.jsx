import React, { useState } from 'react'
import styled from 'styled-components';
import { userConfig } from '../../../axiosinstance';

const AddGallery = ({ isAddGallery, setAddGallery }) => {
    const [photo, setPhoto] = useState([]);
    const [imageUrl, setImageUrl] = useState("");

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

    const handleAddGallery = () => {
        const formData = new FormData();
        formData.append("photo", photo);

        userConfig.post("web/add-galleries/", formData, {}).then((response) => {
            const { StatusCode } = response.data;
            if (StatusCode === 6000) {
                setAddGallery(false);
            }
        });
    };

    return (
        <div>
            <Cover className={isAddGallery ? "active" : ""}>
                <Modal>
                    <FormContainer>
                        <Form>
                            <PhotoDiv>
                                <PhotoInput
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    placeholder="photo"
                                    onChange={handlephoto}
                                />
                            </PhotoDiv>
                            <Button onClick={handleAddGallery}>Submit</Button>
                        </Form>
                    </FormContainer>
                </Modal>
            </Cover>
        </div>
    );
};

export default AddGallery

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
const FormContainer = styled.div``;
const Form = styled.form``;
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