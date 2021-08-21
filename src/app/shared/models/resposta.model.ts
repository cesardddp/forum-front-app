// import { SafeResourceUrl } from '@angular/platform-browser';
import { Topico } from './topicos.model';
import { Usuario } from './usuario.model';


export class Resposta{
    id: number;
    mensagem: string;
    topico: Topico;
    dataCriacao: string;
    autor: Usuario;
    solucao: boolean;
}