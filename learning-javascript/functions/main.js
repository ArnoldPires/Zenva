//scope
let factor = 200;
let c = 1;
function converter(m) {
  let c = m * factor;
  return c;
}
console.log(c);

//nested function
function showEverywere(text) {
  function decorate(a) {
    return "This is extra stuff " + a + "more stuff that doesn't matter";
  };

  text = decorate(text);
  console.log(text);
  alert(text);
};
showEverywere("Hello World");

//Methods
var player = {
 x: 100,
 y: 200,
 energy: 10,
 weapons: ['sword', 'gun'],
 addWeapon: function(newWeapon) {
     this.weapons.push(newWeapon);
 }

 };

 player.addWeapon('axe');
 player.addWeapon('laser gun');
 player.addWeapon('knife');

 console.log(player.weapons);

//function Expression
var fly = function() {
  console.log('you are flying');
};
fly();
let playerx = {
  g: 10,
  h: 20,
  energy: 100,
  superpower: function() {
    console.log('no superpower');
  }
};
playerx.g = 100;
playerx.superpower = fly;
playerx.superpower();
