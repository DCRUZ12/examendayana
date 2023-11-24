import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-action-shet',
  templateUrl: './action-shet.page.html',
  styleUrls: ['./action-shet.page.scss'],
})
export class ActionShetPage implements OnInit, OnChanges {

  miFormulario: FormGroup;
  valido:boolean = false;


  constructor(private formBuilder: FormBuilder) { 
    this.miFormulario = this.formBuilder.group({
      name: ['', Validators.required],
      cell: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      fechanaci: ['', [Validators.required, Validators.email]],
    });


    this.miFormulario.valueChanges.subscribe(() => {
      this.valido = this.miFormulario.valid;
    });
  }

  ngOnInit() {
    
  }

  submitForm(){
    console.table(this.miFormulario.value)
    this.calcularEdad();
  }


  calcularEdad(){
    const fechaNacimiento = this.miFormulario.get('fechanaci')?.value;
    const naci = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - naci.getFullYear();
    console.log('Fecha de Nacimiento:', fechaNacimiento);
    console.log('Edad:', edad);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.miFormulario.valid){
      console.log('valido')
    }
  }
}
