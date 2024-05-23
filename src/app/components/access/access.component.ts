import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent {
  flagLoader=false;

  constructor
  (
    private route: Router
  )
  {
  }

  formAccess = new FormGroup({
    ruc: new FormControl('')
  })

  accessSystem(form:any){
    console.log(form);
    
  if(form.ruc !=1234){
    this.flagLoader = true;
  }else{
    this.route.navigateByUrl('empresas')
  }

  }
}
