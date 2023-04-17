import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import { Context } from '../../contexts/Store';
import Approute from '../routes/AppRoute';
import AuthRoute from "../routes/AuthRoute";
import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';


const MainRouter = () => {
      const { dispatch } = useContext(Context);
      useEffect(() => {
          let userData = localStorage.getItem("userData");
          userData = JSON.parse(userData);
          dispatch({
              type: "UPDATE_USER_DATA",
              payload: userData,
          });
      }, []);
  return (
      <div>
          <Routes>
              <Route
                  path="auth/*"
                  element={
                      <AuthRoute>
                          <AuthRouter />
                      </AuthRoute>
                  }
              />
              <Route
                  path="/*"
                  element={
                      <Approute>
                          <AppRouter />
                      </Approute>
                  }
              />
          </Routes>
      </div>
  );
}

export default MainRouter