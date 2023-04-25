import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import {userConfig} from "../../axiosinstance"
import styled from 'styled-components';
import {Context} from "../contexts/Store"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = () => {
        userConfig
            .post("accounts/chief/", {
                username: username,
                password: password,
            })
            .then((response) => {
                if (response.data.StatusCode == 6000) {
                    dispatch({
                        type: "UPDATE_USER_DATA",
                        payload: {
                            isVerified: true,
                            access: response.data.data.acess_token,
                        },
                    });
                    navigate("/");
                }
            });
    }


  return (
      <div>
          <MainContainer>
              <LoginConatiner>
                  <MainTitle>Accolades Chief</MainTitle>
                  <Content>
                      <Form>
                          <UsernameDiv>
                              <Label>Username</Label>
                              <Username
                                  type="text"
                                  placeholder="Your Username"
                                  onChange={(e) => setUsername(e.target.value)}
                                  value={username}
                              />
                          </UsernameDiv>
                          <PasswordDiv>
                              <Label>Password</Label>
                              <Password
                                  type="password"
                                  placeholder="Your Password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
                              />
                          </PasswordDiv>
                          <Submit onClick={handleSubmit}>LogIn</Submit>
                      </Form>
                  </Content>
              </LoginConatiner>
          </MainContainer>
      </div>
  );
}

export default Login

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #1b1c1f;
    position: fixed;
`;
const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    color: blue;
`;
const LoginConatiner = styled.div`
    width: 100%;
    height: 100%;
    background: #1b1c1f;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
`;
const Label = styled.label`
    font-size: 25px;
    font-weight: 700;
    color: #fff;
`;
const Form = styled.div``;
const UsernameDiv = styled.div`
    width: 500px;
    margin-bottom: 10px;
`;
const Username = styled.input`
    width: 500px;
    padding: 5px;
    margin-top: 5px;
`;
const PasswordDiv = styled.div`
    width: 500px;
`;
const Password = styled.input`
    width: 500px;
    padding: 5px;
    margin-top: 5px;
`;
const Submit = styled.button`
    width: 500px;
    padding: 5px;
    margin-top: 10px;
    background: blue;
    color: white;
    font-weight: 600;
`;