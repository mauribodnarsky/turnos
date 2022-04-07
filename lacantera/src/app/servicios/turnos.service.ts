import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
    public url:string;

  constructor(private  _http: HttpClient) {
    this.url="https://gnuino.com.ar/~mauri/www/turnos/api/";
    } 
    obtenerturnos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    

  return this._http.get(this.url+"obtenerturnos.php", {headers: headers});
  }
  desocuparturno(turnob:any): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  var params={"turno":turnob};
  return this._http.post(this.url+"desocuparturno.php",params, {headers: headers});
    
  }
  alquilarturno(turnob:any,nombre:any,telefono:any,fijo:any,diaphp:any,horaphp:any): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  var params={"turnob":turnob,"nombre":nombre,"telefono":telefono,"fijo":fijo,"diaphp":diaphp,"horaphp":horaphp};
  return this._http.post(this.url+"guardarturno.php",params, {headers: headers});
    
  }
}
