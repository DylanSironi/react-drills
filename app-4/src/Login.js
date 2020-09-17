import React, { Component } from 'react'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            password: '', username: "",
        }
        this.loginContext = this.loginContext.bind(this)
    }
    usernameChanger(name){
        this.setState({username: name})
    }
    passwordChanger(word){
        this.setState({password: word})
    }
    loginContext(){
        alert(`Username: ${this.state.username}       Password: ${this.state.password}`)
    }
    render() {
        return <div>
            <input onChange= {action => this.usernameChanger(action.target.value)}type = 'text'/>
            <button onClick = {this.loginContext}>Login</button>
            <input onChange= {action => this.passwordChanger(action.target.value)}type = 'text'/>
        </div>
    }
}
export default Login