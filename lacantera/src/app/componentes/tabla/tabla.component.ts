import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../../servicios/turnos.service';
import { Alquilar } from '../../modelos/alquilar';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
public turnos: any;
public ver:any;
public hora_turno:any;
public dia_turno:any;
public mensaje:string;
public turnoalquilado:Alquilar;
  constructor(private servicio:TurnosService) { 
          this.turnos=null;
        this.ver=null;
        this.mensaje="";
        this.dia_turno=null;
        this.hora_turno=null;
        this.turnoalquilado=new Alquilar("","",false);
}

  ngOnInit(): void {
    this.servicio.obtenerturnos().subscribe(
      result=>{
        this.turnos=result;
        console.log(result)
      },
      error=>{
     console.log(error)
   
      }
    )
  }

  verTurno(id :any,hora:any,dia:any){
    this.ver=id;
    this.hora_turno=hora;
    this.dia_turno=dia;
  }
  alquilar(form:any,dturno:any,hturno:any){
var d=dturno;
switch(d){
  case "LUNES":d="monday";break;
  case "MARTES":d="tuesday";break;
  case "MIERCOLES":d="wednesday";break;
  case "JUEVES":d="thursday";break;
  case "MIERCOLES":d="friday";break;
  case "JUEVES":d="saturday";break;
  case "VIERNES":d="sunday";break;
}
var fijo:number;
if(this.turnoalquilado.fijo==true){
fijo=1
}else{
  fijo=0
}
this.servicio.alquilarturno(this.ver.id,this.turnoalquilado.nombre,this.turnoalquilado.telefono,fijo,d,hturno).subscribe(
      result=>{
alert("Turno Alquilado satisfactoriamente!")
        console.log(result)

        this.servicio.obtenerturnos().subscribe(
          result=>{
            this.turnos=result;
            let date: Date = new Date();
            let mes:number=date.getMonth()+1;
            this.mensaje="Ultima actualización: "+date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds()+"  "+date.getUTCDate()+"/"+mes+"/"+date.getUTCFullYear()
          },
          error=>{
    alert("Error al Actualizar! vuelve a intentar en unos minutos !")   
          }
        )
      },
      error=>{
     alert("Error al alquilar turno")
     this.servicio.obtenerturnos().subscribe(
      result=>{
        this.turnos=result;
        let date: Date = new Date();
        let mes:number=date.getMonth()+1;
        this.mensaje="Ultima actualización: "+date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds()+"  "+date.getUTCDate()+"/"+mes+"/"+date.getUTCFullYear()
      },
      error=>{
alert("Error al Actualizar! vuelve a intentar en unos minutos !")   
      }
    )
      }

    )
form.reset();
  }
  desocuparturno(turnoborrado:any){
   this.servicio.desocuparturno(turnoborrado).subscribe(
      result=>{
alert("Turno desocupado satisfactoriamente!")
this.servicio.obtenerturnos().subscribe(
  result=>{
    this.turnos=result;
    let date: Date = new Date();
    let mes:number=date.getMonth()+1;
    this.mensaje="Ultima actualización: "+date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds()+"  "+date.getUTCDate()+"/"+mes+"/"+date.getUTCFullYear()
  },
  error=>{
alert("Error al Actualizar! vuelve a intentar en unos minutos !")   
  }
)
      },
      error=>{
     alert("Error al desocupar turno")
     this.servicio.obtenerturnos().subscribe(
      result=>{
        this.turnos=result;
        let date: Date = new Date();
        let mes:number=date.getMonth()+1;
        this.mensaje="Ultima actualización: "+date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds()+"  "+date.getUTCDate()+"/"+mes+"/"+date.getUTCFullYear()
      },
      error=>{
alert("Error al Actualizar! vuelve a intentar en unos minutos !")   
      }
    )
      }
    )

  }
actualizar(){
  this.servicio.obtenerturnos().subscribe(
      result=>{
        this.turnos=result;
        let date: Date = new Date();
        let mes:number=date.getMonth()+1;
        this.mensaje="Ultima actualización: "+date.getHours()+":"+date.getMinutes()+":"+date.getUTCSeconds()+"  "+date.getUTCDate()+"/"+mes+"/"+date.getUTCFullYear()
      },
      error=>{
alert("Error al Actualizar! vuelve a intentar en unos minutos !")   
      }
    )
}
}
