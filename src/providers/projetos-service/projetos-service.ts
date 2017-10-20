import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosServiceProvider {

  projetos = [
    {codigo: 1, nome: 'Webservice'},
    {codigo: 2, nome: 'Backend'},
    {codigo: 3, nome: 'API'},
    {codigo: 4, nome: 'Frontend'}
  ];
  ultimoCodigo = 4;

  getProjetos() {
    return this.projetos;
  }

  // constructor(public http: Http) {
  //   console.log('Hello ProjetosServiceProvider Provider');
  // }

}
