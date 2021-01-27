import React from "react";
import AppContainer from "./AppContainer";

const Add = () => {
    return (
        <AppContainer title="ADD POST">
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input className="form-control" type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input className="form-control" type="text" name="" id="" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">ADD</button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
