import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa'
import { TarefasServiceProvider } from '../../providers/tarefas-service/tarefas-service';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[];
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarefasService: TarefasServiceProvider, public projetosService: ProjetosServiceProvider) {
    this.projetos = projetosService.getProjetos();
    this.tarefas = tarefasService.getTarefas();
  }

  nomeProjeto(cod): string {
    for(let i=0; i<this.projetos.length; i++)
      if (this.projetos[i].codigo == cod)
        return this.projetos[i].nome;
    return "Projeto não encontrado";
  }

  touchTarefa(codigo) {
    let cod = parseInt(codigo);
    this.navCtrl.push(TarefaPage, {codigo: cod, novo: false});
  }

  addTarefa() {
    this.navCtrl.push(TarefaPage, {codigo: 0, novo: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefasPage');
  }

}
