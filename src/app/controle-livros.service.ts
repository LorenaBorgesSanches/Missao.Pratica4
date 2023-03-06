import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  private livros: Array<Livro>

  constructor() {
    this.livros = new Array<Livro>(
      new Livro(1, 1,
        "O Guia do Mochileiro das Galáxias",
        "Arthur Dent tem sua casa e seu planeta (sim, a Terra) destruídos em um mesmo dia, e sai pela galáxia afora com seu amigo Ford, que acaba de revelar que, na verdade, nasceu em um pequeno planeta perto de Betelgeuse.",
        ["Douglas Adams"]
      ),

      new Livro(2, 2, "As Crônicas de Gelo e Fogo",
        "Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.",
        ["George R. R. Martin", "teste"]
      ),

      new Livro(3, 3, "Harry Potter",
        "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
        ["J. K. Rowling"]
      )
    )
  }

  public obterLivros = (): Array<Livro> => this.livros;

  public incluir(livro: Livro): void {
    let index = Math.max(...this.livros.map(x => x.codigo));
    livro.codigo = index + 1;
    this.livros.push(livro);
  }

  public excluir(codigo: number): void {
    let index = this.livros.findIndex(x => x.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
