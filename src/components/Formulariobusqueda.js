import React, { Component } from 'react';
var userNameForDisplay = '';
class Formulariobusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhoneState: '',
      userName: '',
      localData:{
        personas:[
          {
            "name" : "Fernanda",
            "phone" : "89500481"
          },
          {
            "name" : "Rebeca",
            "phone" : "4343433"
          }
        ]
      }
    };
    this.handleChangeSearchPhone = this.handleChangeSearchPhone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChangeSearchPhone(event) {
    this.validateEmpy(event.target.value);
    this.setState({searchPhoneState: event.target.value});
  }
  handleSearch() {
    event.preventDefault();
    var searchDataPhone = this.state.searchPhoneState;
    console.log('state number:' + searchDataPhone);
    console.log('json original:', this.state.localData);

    var findData = this.findData(this.state.localData, this.state.searchPhoneState);
    console.log('sddasd findData '+ findData );

    if(findData){
      console.log('entro a que es true');
      this.setState({searchPhoneState: ''});
      this.setState({userName: userNameForDisplay});
      console.log('variable del user:' +userNameForDisplay.value );
      console.log('estado del user : ' + this.state.userName);
    }else{
      console.log('es false');
    }
 }
 validateEmpy(value){
 }
 findData(objectData, inputPhone){
    var foundData = false;
    objectData.personas.map(function(i){
      if(i.phone == inputPhone){
        console.log('lo encontro!');
        userNameForDisplay = i.name;
        console.log('NOMREEE ' + userNameForDisplay);
        foundData = true;
      }else {
        console.log('no lo encontro');
      }
      return foundData;
    })

    return foundData;
  }


  render(){
    return(
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-search">
            <label>Numero de telefono</label>
            <input
              type="text"
              placeholder="89500481"
              value={this.state.searchPhoneState}
              onChange={this.handleChangeSearchPhone}
            />
          </div>

          <div className="form-button">
            <button type="button"
            className="send-button" onClick={this.handleSearch}>Buscar</button>
          </div>

          <div>
            <h4>Informacion de contacto</h4>
            <p>{this.state.userName}</p>
          </div>

        </div>
      </div>
    )
  }
}
export default Formulariobusqueda;
