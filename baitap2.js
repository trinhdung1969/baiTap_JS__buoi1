/*
*   gia su
*   n=679| 6+7+9
*   
*   dau vao
*       tao bien n gan gia tri 123
*
*   xu ly
*       Tao bien hang tram = math.floor( n /100)
*       tao bien hang chuc = math.floor( n % 100/10)
*       tao bien hang don vi = math.floor( n % 10)
*   Dau ra
*       thong bao ra ket qua
*/

var n = 123;
var hangtram= Math.floor(n/100);
console.log(hangtram);
var hangchuc= Math.floor(n%100/10);
console.log(hangchuc);
var hangdonvi=Math.floor(n%10);
console.log(hangdonvi);
var tong=hangtram+hangchuc+hangdonvi;
console.log(tong);