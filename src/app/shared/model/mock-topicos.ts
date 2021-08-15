import { Topico } from './topicos.model';
import { ResponsePageable } from "./responsePageable.model";

export const TOPICOS: ResponsePageable = {
  content:[
    {id:1,curso:"HTML 5",titulo:"Dúvida HTML 5",mensagem:"Erro ao criar projetoHTML 5",dataCriacao:"2019-05-05T18:00:00",nomeAutor:"Aluno",status:"NAO_RESPONDIDO",respostas:[]},
    {id:2,curso:"HTML 5",titulo:"Dúvida HTML 5 2",mensagem:"Projeto não compila HTML 5",dataCriacao:"2019-05-05T19:00:00",nomeAutor:"Aluno",status:"NAO_RESPONDIDO",respostas:[]},
    {id:3,curso:"HTML 5",titulo:"Dúvida HTML 5 3",mensagem:"Tag HTML HTML 5",dataCriacao:"2019-05-05T20:00:00",nomeAutor:"Aluno",status:"NAO_RESPONDIDO",respostas:[]},
  ],
  first:  true,
  last:  false,
  number:  1,
  numberOfElements:  3,
  pageable:  [],
  size:  3,
  sort:  1,
  totalElements:  3,
  totalPages:  1,
};
// HTML 5
// Spring Boot
// Python',