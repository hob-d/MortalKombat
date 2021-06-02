const arenas = document.querySelector('.arenas');

const player1 = {
  name: 'Scorpion',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['weapon1', 'weapon2'],
  attack() {
    console.log(this.name + ' ' + 'fight!');
  },
};

const player2 = {
  name: 'Subzero',
  hp: 60,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['weapon3', 'weapon4'],
  attack() {
    console.log(this.name + ' ' + 'fight!');
  },
};

function createPlayer(classname, {name: playername, hp, img: imgSource}) {
  const player = document.createElement('div');
  const progressbar  = document.createElement('div');
  const character  = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const img = document.createElement('img');

  player.classList.add(`${classname}`);
  progressbar.classList.add('progressbar');
  character.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');
  img.src = imgSource;
  life.style.width = `${hp}%`;
  name.innerText = playername;

  progressbar.append(life, name);
  character.append(img);
  player.append(progressbar, character);
  arenas.append(player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);