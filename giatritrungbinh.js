/*
*dau vao
*   tao bien so1 gan gia tri so1=8
*   tao bien so2 gan gia tri so1=2
*   tao bien so3 gan gia tri so1=15
*   tao bien so4 gan gia tri so1=9
*   tao bien so5 gan gia tri so1=11
*   
*xu ly 
*   tao bien giatritrungbinh gan gia tri= 0
*   giatritrungbinh = (so1+so2+so3+so4+so5)/5
*dau ra
*   thong bao ra ket qua gia tri trung binh cua (5,2,7,9,11) = giatritrungbinh
*/

console.log("<------   ------>")
console.log("Tính giá trị trung bình của 4 số (8, 2, 15,9,11)")
// dau vao
var so1=8;
var so2=2;
var so3=15;
var so4=9;
var so5=11;
// xu ly
var giatritrungbinh = 0;
giatritrungbinh=(so1 +so2 +so3 + so4 + so5)/5;
// dau ra
console.log("gia tri trung binh cua (8,2,15,9,11) la : " + giatritrungbinh);