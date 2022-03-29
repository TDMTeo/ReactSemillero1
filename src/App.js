import React, { Component } from 'react';
import { TareaService } from './service/TareaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { PersonaService } from './service/PersonaService';
import { RolService } from './service/RolService';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export default class App extends Component{
  constructor(){
    super();
    this.TareaService = new TareaService();
    this.RolService = new RolService();
    this.PersonaService = new PersonaService();
    this.state = {};
    this.items = [
      {
        label : 'Registrar Usuario',
        icon: 'pi pi-fw pi-plus',
        command: () => {this.register()}
      }
    ];
    this.footer=(
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save}/>
      </div>
    );

  }

  componentDidMount(){
    this.roles = [
      {label: 'Oferente', value: '1'},
      {label: 'Hacedor', value: '2'}
    ];
    this.TareaService.getAll().then(data => this.setState({tarea: data}))
    this.setState({
      visible : false,
      persona : {
        perCodPersona:null,
        perPriNombre:null,
        perSegNombre:null,
        perPriApellido:null,
        perSegApellido:null,
        perCorreo:null,
        perContra:null,
        perRol:null
      }
    });
  }

  register(){
    this.setState({
      visible:true
    });
  }

  save(){
    this.PersonaService.save(this.state.persona).then(data => {
      console.log(data);
    })
  }

  render(){
    return(
      <div style={{width:'80%',marginTop:'20px',margin:'0 auto'}}>
        <Menubar model={this.items}></Menubar>
        <br></br>
        <Panel header="Semillero">
          <DataTable value={this.state.tarea}>
            <Column field="tarCodTarea" header="ID"></Column>
            <Column field="tarDescripcion" header="Servicio"></Column>
          </DataTable>
        </Panel>
        <Dialog header='Registro De Usuario' visible={this.state.visible} style={{width: '40%'}} footer={this.footer} modal={true} onHide={() => this.setState({visible:false})}>
        <br/>
          <span className='p-float-label'>
            <InputText style={{width : '100%'}} value={this.state.value} id="perCorreo" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perCorreo = e.target.value

              return { persona };
            })} />
            <label htmlFor='perCorreo'>Correo:</label>
          </span>

          <br/>
          <span className='p-float-label'>
            <Password style={{width : '100%'}} value={this.state.value} id="perContra" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perContra = e.target.value

              return { persona };
            })} />
            <label htmlFor='perContra'>Password:</label>
          </span>


          <br/>
          <span className='p-float-label'>
            <InputText style={{width : '100%'}} value={this.state.value} id="perPriNombre" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perPriNombre = e.target.value

              return { persona };
            })} />
            <label htmlFor='perPriNombre'>Primer Nombre:</label>
          </span>
          <br/>
          <span className='p-float-label'>
            <InputText style={{width : '100%'}} value={this.state.value} id="perSegNombre" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perSegNombre = e.target.value

              return { persona };
            })} />
            <label htmlFor='perSegNombre'>Segundo Nombre:</label>
          </span>

          <br/>
          <span className='p-float-label'>
            <InputText style={{width : '100%'}} value={this.state.value} id="perPriApellido" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perPriApellido = e.target.value

              return { persona };
            })} />
            <label htmlFor='perPriApellido'>Primer Apellido:</label>
          </span>

          <br/>
          <span className='p-float-label'>
            <InputText style={{width : '100%'}} value={this.state.value} id="perSegApellido" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perSegApellido = e.target.value

              return { persona };
            })} />
            <label htmlFor='perSegApellido'>Segundo Apellido:</label>
          </span>


          <br/>
          <span className='p-float-label'>
            <Dropdown style={{width : '100%'}} value={this.state.value} options={this.roles} id="perRol" onChange={(e) => this.setState(prevState => {
              let persona = Object.assign({}, prevState.persona);
              persona.perRol = e.target.value

              return { persona };
            })} placeholder="Rol"/>
          </span>

        </Dialog>
      </div>
    )
  }
}