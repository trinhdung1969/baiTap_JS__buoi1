/*
*dau vao
*   tao bien so2Kyso gan gia tri so2Kyso = 89
*xu ly
*   tao bien hHangchuc gan gia tri hHangchuc = so2Kyso%10
*   tao bien hHangdonvi gan gia tri hHangdonvi = so2Kyso/10
*   tao bien tong2Kyso gan gia tri tong2Kyso=0
*   tong2Kyso = hHangchuc + hHangdonvi
*dau ra
*   xuat ra ket qua tong 2 ky so la tong2Kyso
*/
console.log("<------   ------>")
console.log("Tổng hai ký số của số 89")
var so2Kyso = 89;
var hHangchuc = Math.floor(so2Kyso / 10) ;
console.log("số hàng chục của số 89 là : " + hHangchuc);
var hHangdonvi = Math.floor(so2Kyso % 10) ;
console.log("số hàng đơn vị của số 89 là : " +hHangdonvi);
var tong2Kyso = 0;
tong2Kyso = hHangchuc + hHangdonvi;
console.log("Tong 2 ky so cua so co hai ky so la : " + tong2Kyso);