let weapons = ['sword', 'axe', 'greatsword', 'hammer'];

//array length
console.log(weapons.length);
//push() adds more to the weapons list
weapons.push('laser sword', 'crossbow');
//pop removes an item from the array
weapons.pop();
//splice() Removes array items you want, but you can also add in more
weapons.splice(1, 2, 'bombs','bow and arrow');
console.log(weapons);
