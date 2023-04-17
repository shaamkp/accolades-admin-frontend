import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/Store";

const Approute = ({ children }) => {
    const {
        state: {
            userData: { isVerified },
        },
    } = useContext(Context);
    return isVerified ? children : <Navigate to="/auth" />;
};

export default Approute;
