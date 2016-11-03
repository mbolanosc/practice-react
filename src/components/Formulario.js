import React, { Component } from 'react';
const dataUser = 'mbolanos',
    dataPass = 'boro';
    const styles = ({
      msgError: {
        color: '#E3000E'
      },
      msgDefault:{
        color: 'black'
      },
      msgSuccess:{
        color:'#2CC990'
      }
    });
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      msg: '',
      mgsStyle: 'default'
    };
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
       setTimeout(function(){
          this.setState({username: '', password:''});
          this.setState({mgsStyle: 'success'});
          this.setState({msg: 'Login existoso :)'});
          console.log('state del user viejo' + this.state.username);
        }.bind(this), 2000);
        console.log('state del user nuevo' + this.state.username);
     }else{
       console.log('no valido nada');
       this.setState({msg: 'Datos incorrectos'});
       this.setState({mgsStyle: 'error'});
     }
   }else{
     this.setState({msg: 'Espacios sin llenar'});
     this.setState({mgsStyle: 'error'});
   }
 }
 validateEmpy(value){
   var fieldValid = true;
   if(value === ''){
     fieldValid = false;
     console.log('validacion de espacios: Si hay campos sin rellenar');
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
      var  msgColor='msgDefault',
          currentMsgStyle = styles.msgDefault;
      if(this.state.mgsStyle == 'error'){
        currentMsgStyle = styles.msgError;
      }else{
        currentMsgStyle = styles.msgSuccess;
      }




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
            <h4 style={currentMsgStyle}>{this.state.msg}</h4>
          </div>

        </div>
      </div>
    )
  }
}
export default Formulario;
