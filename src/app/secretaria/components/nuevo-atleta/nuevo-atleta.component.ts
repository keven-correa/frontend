import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-atleta',
  templateUrl: './nuevo-atleta.component.html',
  styleUrls: ['./nuevo-atleta.component.css']
})
export class NuevoAtletaComponent implements OnInit {

  formulario!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      edad:['',Validators.required],
      fechaNacimiento:['',Validators.required],
      lugarNacimiento:['',Validators.required],
      disciplina:['',Validators.required],
      sexo:['',Validators.required],
      estadoCivil:['',Validators.required],
      modalidad:['',Validators.required],
      edadDeportiva:['',Validators.required],
      horasPractica:['',Validators.required],
      diasPractica:['',Validators.required],
      seguroMedico:['',Validators.required],
      tipoPaciente:['',Validators.required],
      escolaridad:['',Validators.required],
      horasEstudio:['',Validators.required],
      diasEstudio:['',Validators.required],
      direccion:['',Validators.required],
      telefonoCelular:['',Validators.required],
      telefonoCasa:['',Validators.required],
      tipoSangre:['',Validators.required],
      peso:['',Validators.required],
      altura:['',Validators.required],
      TA:['',Validators.required],
      FC:['',Validators.required],
      FR:['',Validators.required],
      tempe:['',Validators.required],
      foto:['',Validators.required]

    })
  }

  foto(evento:any){
    this.formulario.controls['foto'].setValue(evento.target.files[0].name)
  }

  guardar(){
    console.log(this.formulario.value)
  }

}
