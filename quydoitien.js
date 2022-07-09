/*
*dau vao
*   tao hang so tigiaUsd gan gia tri - 23500
*   tao bien so tien USD sotienUsd gan gia tri = 7
*xu ly
*   tao bien sotienVnd gan gia tri = 0
    sotienVnd = sotienUsd * tigiaUsd
*dau ra
*   thong bao ra ket qua "so tien VND cua 7USD la : " sotienVnd
*/
console.log("<------   ------>")
console.log("Quy đổi tiền USD sang tiền VNĐ")
console.log("Đổi 7USD sang tiền VNĐ với tỉ giá là 23500")
const tigiaUsd = 23500;
var sotienUsd = 7;
var sotienVnd = 0;
sotienVnd = sotienUsd*tigiaUsd;
console.log("so tien VND cua " + sotienUsd + "USD la : " + sotienVnd);