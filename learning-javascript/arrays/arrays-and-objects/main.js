let monsters = [
  {x: 10, y: 50, health: 100},
  {x: 12, y: 55, health: 1},
  {x: 11, y: 60, health: 50},
  {x: 14, y: 55, health: 70},
  {x: 15, y: 50, health: 30},
];
monsters[4].health = 12;
console.log(monsters);
let hero = {
  name: 'Arnold',
  health: 20,
  weapons: ['sword', 'crossbow', 'bomb']
};
//add a new weapon
hero.weapons.push('spear');
console.log(hero);
