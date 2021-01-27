import React, { Children } from "react";
import { Link } from "react-router-dom";

const AppContainer = ({ title, children }) => {
    return (
        <div className="container">
            <div className="card">
                <h5 className="card-title">{title}</h5>
                <div className="card-body">{children}</div>
            </div>
        </div>
    );
};

export default AppContainer;
