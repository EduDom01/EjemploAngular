import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  status = "Formulario no fue enviado"
  defaultName = ""

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.status = "El formulario se envió con éxito"
  }
  formpredeterminado(){
    this.defaultName ="Eduardo"
  }

}
