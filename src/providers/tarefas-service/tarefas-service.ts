import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TarefasServiceProvider {

  tarefas = [
    {codigo: 1, projeto: 1, descricao: 'Tarefa 1', data: new Date(2017, 2, 27), prioridade: 1},
    {codigo: 2, projeto: 1, descricao: 'Tarefa 2', data: new Date(2017, 5, 17), prioridade: 2},
    {codigo: 3, projeto: 2, descricao: 'Tarefa 3', data: new Date(2017, 2, 10), prioridade: 1},
    {codigo: 4, projeto: 3, descricao: 'Tarefa 4', data: new Date(2017, 3, 27), prioridade: 3}
  ];
  ultimoCodigo = 4;    

  getTarefas(): any[] {
    return this.tarefas;
  }

  // constructor(public http: Http) {
  //   console.log('Hello TarefasServiceProvider Provider');
  // }

}
