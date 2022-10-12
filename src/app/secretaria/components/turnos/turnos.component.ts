import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SecretariaService } from '../../services/secretaria.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements AfterViewInit {
  ELEMENT_DATA: any[] = [
    {},
    // {id: 2, nombre: 'Manuel', apellido: 'Gonzalez' , disciplina: 'Basketball', sexo:'M'},
    // {id: 3, nombre: 'Juana', apellido: 'Castillo', disciplina: 'Baseball', sexo:'F'},
    // {id: 4, nombre: 'Saldy', apellido:'Amparo' , disciplina: 'Voleibol', sexo:'F'},
    // {id: 5, nombre: 'Nicol', apellido: 'Borbon' , disciplina: 'Atletismo', sexo:'F'},
    // {id: 6, nombre: 'Keven', apellido: 'Correa', disciplina: 'Natacion', sexo:'M'},
    // {id: 7, nombre: 'Edgar', apellido: 'Mena', disciplina: 'Natacion', sexo:'M'},
    // {id: 8, nombre: 'Julia', apellido: 'Ruiz', disciplina: 'Boxeo', sexo:'F'},
    // {id: 9, nombre: 'Joan', apellido:'Sena' , disciplina: 'Judo', sexo:'M'},
    // {id: 10, nombre: 'Daniel', apellido: 'Perez', disciplina: 'Boxeo', sexo:'M'},
    // {id: 10, nombre: 'Daniel', apellido: 'Feliz', disciplina: 'Judo', sexo:'M'},
    
  ];

  atletas:any[]=[];
  atletaDetalle:any[]=[];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'LugarVisita', 'NombreAtleta'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);



  constructor(public dialog: MatDialog,
              private router:Router,
              private _secretariaService:SecretariaService){

  }
  
  ngOnInit(): void {
    this._secretariaService.getTurnos().subscribe(resp=>{
      this.ELEMENT_DATA=resp
      this.dataSource.data=this.ELEMENT_DATA
    })

  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  

  crearTurno(){
    this.router.navigate(['/secretaria/nuevo-turno'])
  }

  envio(id:number){
    this.router.navigate(['/secretaria/atleta-detalle', id])
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    


    
}
