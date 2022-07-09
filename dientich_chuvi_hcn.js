/*
*dau vao
*   tao bien dai gan gia tri dai = 15
*   tao bien rong gan gia tri rong = 8
*xw ly
*   tao bien dientich gan gia tri dientich = 0
*   tao bien chuvi gan gia tri chuvi = 0
*   dientich = dai * rong
*   chuvi = (dai + rong) * 2
*dau ra
*   xuat ra ket qua dien tich HCN la dientich
*   xuat ra ket qua chu vi HCN la chu vi
*/
console.log("<------   ------>")
console.log("BÀI TẬP tính diện tích và chu vi hình chữ nhật")
console.log("chiều dài 15, chiều rộng 8")
var dai = 15;
var rong = 8;
var dientich = 0;
var chuvi = 0;
dientich = dai * rong;
chuvi = (dai + rong)*2;
console.log("dien tich hinh chu nhat la : " + dientich);
console.log("chu vi hinh chu nhat la : " + chuvi);