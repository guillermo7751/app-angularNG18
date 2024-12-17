import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, FormularioComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  tituloA:string = 'Operando A';
  tituloB:string = 'Operando B';

  resultado:number | null = null;

  recibirResultado(res:number){
    this.resultado = res;
  }
}
