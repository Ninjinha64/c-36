class Game {
  constructor() { }

  start() {
    //criando objetos para form e player e chamando a função display de form
    form = new Form();
    form.display();
    player = new Player();
  }
}
