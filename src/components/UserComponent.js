import React from "react";
import UserService from "../services/UserService";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Route, withRouter } from "react-router-dom";

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: []
        };
        this.createUser = this.createUser.bind(this);
    }
    
    componentDidMount() {
        UserService.getUsers().then(response => {
        this.setState({ users: response.data });

        });
    }

    createUser() {
        this.props.history.push(`/users/add`);
    }

    
    render() {
        return (
        <div className="container">
            <div className="row">
    <div className="row">
            <button className="btn btn-primary" onClick={this.createUser}>Create User</button>
    </div>
                
            <div className="col-md-12">
                <h3>Users</h3>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                <table className="table table-striped">
                <thead>
                    <tr className="text-light">
                    <th> ID </th>
                    <th > Username </th>
                    <th> Password </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email </th>
                    <th> Role </th>
                    </tr>
                </thead>
                <tbody className="text-primary">
                    {this.state.users.map(user => (
                    <tr key={user.id} >
                      
                        <td className="text-light">{user.email}</td>
                        <td className="text-light">{user.firstName}</td>
                        <td className="text-light">{user.lastName}</td>
                        <td className="text-light">{user.password}</td>
                        <td className="text-light">{user.role}</td>
                        <td className="text-light">{user.username}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        );
    }
    }

    export default withRouter(UserComponent);