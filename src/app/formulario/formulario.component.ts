import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() notificarResultado = new EventEmitter<number>();

  @Input() tituloOperandoA:string = '';
  @Input() tituloOperandoB:string = '';

  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;
  
  sumar(){
    this.resultado = this.operandoA + this.operandoB;
    this.notificarResultado.emit(this.resultado);
  }

}
