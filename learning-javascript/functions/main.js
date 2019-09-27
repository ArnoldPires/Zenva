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
  x:100,
  y: 200,
  energy: 10,
  weapons: ['sword,' 'gun']
};
player.addweapon('axe');
player.addweapon('laser gun');
player.addweapon('bow');

console.log(player.weapons);
