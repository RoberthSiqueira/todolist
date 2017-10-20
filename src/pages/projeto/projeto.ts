import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from "../../providers/projetos-service/projetos-service"

@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  codProjeto: number;
  nomeProjeto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public projetoService: ProjetosServiceProvider) {
    this.codProjeto = navParams.get('codigo');
    let projetos = projetoService.getProjetos();
    for (let i = 0; i < projetos.length; i++) {
      if (projetos[i].codigo == this.codProjeto ) {
        this.nomeProjeto = projetos[i].nome;
        break;
      }
    }
  }

  edit() {

  }

  delete() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetoPage');
  }

}
