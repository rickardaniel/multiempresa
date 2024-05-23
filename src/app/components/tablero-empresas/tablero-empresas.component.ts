import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablero-empresas',
  templateUrl: './tablero-empresas.component.html',
  styleUrls: ['./tablero-empresas.component.scss']
})
export class TableroEmpresasComponent {
 arreglo = [1,2,3,5,6,4,5,4];
  constructor
  (
    private route: Router
  )
  {
  }

  returnSystem(){
  this.route.navigateByUrl('acceso')

  }

}
