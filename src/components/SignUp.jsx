import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp = () => {
        const {email, password} = this.state;
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })

    }

    render() {
        return (
            <div className="signUp form-inline">
                <h2>Регистрация</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={event => this.setState({email: event.target.value})}/>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={event => this.setState({password: event.target.value})}/>
                    <button onClick={() => this.signUp()} className="btn btn-primary" type="button">Sign Up
                    </button>
                    <div>{this.state.error.message}</div>
                    <div>
                        <Link to={'/signin'}>страница Входа</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;