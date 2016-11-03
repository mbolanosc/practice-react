import React, { Component } from 'react';
var dataUser = 'mbolanos',
    dataPass = 'boro'
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      msg: ''};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChangeUsername(event) {
    this.validateEmpy(event.target.value);
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.validateEmpy(event.target.value);
    this.setState({password: event.target.value});
  }
  handleLogin() {
   event.preventDefault();
   var validUser =  this.validateEmpy(this.state.username);
   var validPass =  this.validateEmpy(this.state.password);
   console.log('valor de validUser: ' + validUser);
   console.log('valor de validPass: ' + validPass);
   if((validUser) && (validPass)){
     var dataUser = this.validateData(this.state.username);
     var dataPass = this.validateData(this.state.password);
     if((dataUser) && (dataPass)){
       console.log('doblemente valido');
     }else{
       console.log('no valido nada');
     }
   }
 }
 validateEmpy(value){
   var fieldValid = true;
   if(value === ''){
     fieldValid = false;
     console.log('validacion de espacios: Si hay campos sin rellenar');
     this.setState({msg: 'Datos incorrectos'})
   }else{
     console.log('validacion de espacios: No hay campos sin rellenar');
   }
   return fieldValid;
  }
  validateData(value){
    var validData = false;
    if((value == dataUser) || (value == dataPass)){
      console.log('el usuario entro');
      validData = true;
    }else{
      console.log('el usuario no entro');
    }
    return validData;
  }



  render(){
    return(
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-username">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          </div>

          <div className="form-password">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>

          <div className="form-button">
            <button type="button"
            className="send-button" onClick={this.handleLogin}>Enviar</button>
          </div>

          <div>
            <h4>{this.state.msg}</h4>
          </div>

        </div>
      </div>
    )
  }
}
export default Formulario;
