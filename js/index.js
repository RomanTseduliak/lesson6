//for(let i = 100; i >=0; i--) {
// document.write( i + '<br>');
// if ( i % 2 ===0 && i % 10 !== 0) {
//}
//}
let products = [ 'tesla x', 'tesla y', 'bmw i3' ];
products[4] = 'tesla x';
products[5] = 'zaz';
products.push('corvett');
products[10] = 'aveo'
console.log(products.length);
for(let i=0 ; i<products.length; i++); {
console.log(products [i]);
}