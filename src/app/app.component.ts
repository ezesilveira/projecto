import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projecto';

}

enum UserStatus {
  Activo = 'enabled',
  Inactivo = 'disabled',
}

class Usuario {
  id : number;
  nombre : string;
  estado : UserStatus;
  inicioSesion : boolean = false;

  constructor (id : number, nombre : string, estado? : UserStatus){
    this.id = id;
    this.nombre = nombre;
    this.estado = estado || UserStatus.Activo;
  }
  iniciarSesion() {
    this.inicioSesion = true;
  }
}

const UsuarioJuan = new Usuario (1, 'Juan');
const UsuarioMartin = new Usuario (2, 'Martin');

UsuarioJuan.iniciarSesion();

console.log(UsuarioJuan)