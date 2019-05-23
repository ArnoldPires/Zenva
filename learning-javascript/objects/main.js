var player = {
  name: 'Arnold',
  energy: 100,
  lives: 2,
  x: 20,
  y: 100,
  color:'red'
};
console.log(player);
console.log(player.name);
console.log(player['color']);
player.name = 'some other name';
player.friend = {
  name: 'Josh'
};
