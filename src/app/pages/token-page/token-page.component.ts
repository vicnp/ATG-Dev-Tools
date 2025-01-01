import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-token-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './token-page.component.html',
})
export class TokenPageComponent {


  selectedEmpresa: any;
  carregandoAlteraEmpresa: boolean;
  carregandoRecuperarToken:boolean;

  empresas = [
    { id: 174, nome: 'QL03' },
    { id: 39, nome: 'MG45' },
    { id: 61, nome: 'WH01' }
  ];

  constructor() {
    this.carregandoAlteraEmpresa = false;
    this.carregandoRecuperarToken = false;
  }

  alterarEmpresaAlocadaUsuario() {
    alert(this.selectedEmpresa);
  }

  carregandoEmpresa(): string {
   if(this.carregandoAlteraEmpresa){
    return 'button is-info is-loading';
   }
   return 'button is-success';
  }

  copyToClipBoard(value: string) {
    navigator.clipboard.writeText(value);
  }
  
  carregandoRecuperacaoToken(): string {
    if(this.carregandoAlteraEmpresa){
     return 'button is-large is-info is-fullwidth is-active is-loading';
    }
    return 'button is-large is-success is-fullwidth is-active';
 }

}
