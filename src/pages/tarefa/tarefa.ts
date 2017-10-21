import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefasServiceProvider } from '../../providers/tarefas-service/tarefas-service';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {

  projetos: any[];
  novo: boolean;

  codigoTarefa: number;
  codigoProjeto: number;
  descricao: string;
  prioridade: number;
  data: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tarefasService: TarefasServiceProvider, public projetosService: ProjetosServiceProvider) {
    this.projetos = projetosService.getProjetos();
    this.codigoTarefa = navParams.get('codigo');
    this.novo = navParams.get('novo');
    if (!this.novo) {
      let tarefas = tarefasService.getTarefas();
      for (let i=0; i<tarefas.length; i++) {
        if (tarefas[i].codigo == this.codigoTarefa) {
          this.codigoProjeto = tarefas[i].projeto;
          this.descricao = tarefas[i].descricao;
          this.prioridade = tarefas[i].prioridade;
          this.data = tarefas[i].data;
        }
      }
    } else {
      this.codigoProjeto = this.projetos[0].codigoProjeto;
      this.descricao = '';
      this.prioridade = 3;
      this.data = new Date();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefaPage');
  }

}
