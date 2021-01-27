import React from "react";
import AppContainer from "./AppContainer";

const Edit = () => {
    return (
        <AppContainer title="EDIT POST">
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
                    <button type="button" className="btn btn-success">
                        SAVE
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Edit;
