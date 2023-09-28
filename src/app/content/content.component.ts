import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  usuarios = [
    {id : 2342, nombre : 'Jac', apellido: 'Goodman', estado : 'Activo'},
    {id : 2789, nombre : 'Alejandro', apellido: 'Vang', estado : 'Activo'},
    {id : 3821, nombre : 'Alasdair', apellido: 'Wiley', estado : 'Inactivo'},
    {id : 5521, nombre : 'Isabel', apellido: 'Jacobson', estado : 'Activo'},
    {id : 3921, nombre : 'Amelie', apellido: 'Logan', estado : 'Activo'},
    {id : 9421, nombre : 'Raees', apellido: 'Cox', estado : 'Activo'},
    {id : 7421, nombre : 'Alexandra', apellido: 'Johnson', estado : 'Inactivo'},
    {id : 6421, nombre : 'Zachery', apellido: 'England',estado : 'Activo'}
  ]
}
