import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";

const Home = () => {
    return (
        <AppContainer title="Laravel ReactJS - CRUD">
            <Link to="/add" className="btn btn-primary">
                ADD POST
            </Link>
            <div className="table-responsive">
                <table className="table table-stripped mt-4">
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample Title</td>
                            <td>Sample Description</td>
                            <td>
                                <Link to="/edit/:id" className="btn btn-warning">
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <a href="#" className="btn btn-danger">
                                    DELETE
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;
