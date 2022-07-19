import UserService from '../services/UserService';
import React from 'react'
import UserComponent from './UserComponent'
import { Route, withRouter } from "react-router-dom";

class UpdateUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.match.params.userId,
           firstName: "",
              lastName: "",
                email: "",
                password: "",
                role: "",
                username: ""
        }

        this.updateUser = this.updateUser.bind(this);
         
    }

    componentDidMount() {
        UserService.getUserById(this.state.userId).then(response => {
            this.setState({
                userId: response.data.userId,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                password: response.data.password,
                role: response.data.role,
                username: response.data.username
            });
        });
    }


        updateUser = (e) => {
            e.preventDefault();
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
                username: this.state.username
   
            }

            UserService.updateUser(user).then(response => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    role: "",
                    username: ""
                })
            }
            )
        }
        


    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    changeRoleHandler = (event) => {
        this.setState({ role: event.target.value })
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    updateUser() {
        this.props.history.push(`/users/add`);
    }
    

   




    render() {
        return (
            <div>
                <div className="container"></div>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="text-center"> update User 
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label >First Name</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input placeholder='Email' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input placeholder='Password' name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Role</label>
                                    <input placeholder='Role: [Please enter "ADMIN" or "PLAYER"]' name='role' className='form-control' value={this.state.role} onChange={this.changeRoleHandler} />
                                </div>
                                <div className="form-group">
                                    <label >Username</label>
                                    <input placeholder='Username' name='username' className='form-control' value={this.state.username} onChange={this.changeUsernameHandler} />
                                </div>


                               

                                    <button className="btn btn-primary" onClick={this.updateUser}>Update User</button>
                                    
                                    



                                    </form>
                             </div>
                         </div>
            </div> 
        </div> 
    </div>
        )
    }
}

export default withRouter(UpdateUserComponent);