import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'Un saludo para todas y todos';

    setTimeout(()=> {
      this.mensaje= 'Otro mensaje diferente';
    }, 3000);
   }

  ngOnInit(): void {
  }

  mostrarSaludo(): string{
    return 'Saludo desde el método';
  }

}
