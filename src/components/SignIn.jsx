import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component {
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

    signIn = () => {
        const {email, password} = this.state;
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })

    }

    render() {
        return (
            <div className="signUp form-inline">
                <h2>Введите данные для входа</h2>
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
                    <button onClick={() => this.signIn()} className="btn btn-success" type="button">Sign In
                    </button>
                    <div>{this.state.error.message}</div>
                    <div>
                        <Link to={'/signup'}>страница Регистрации</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;