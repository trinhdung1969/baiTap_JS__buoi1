console.log("Hello cybersoft");
console.log("dung");

/* variabl (bien)
*  = phep gan
*  tao bien phai khai bao var
* ben phai lam truoc sau do gan cho bien
*
* kieu du lieu
*   string chuoi
*   number
*   boolean (true/false)
*   undefined
*   null
*/
var username = "cybersoft";
console.log(username);

var address = "112 cao thang";
console.log(address);
// dat ten bien theo quy tac lac da phan biet chu hoa-thuong
// khong dat trung tu khoa js
var number_studient = 30;
console.log(number_studient);

var numberStudient = 50;
console.log(numberStudient);

var isLogin = false;

// tao bien
var age;
// gan gia tri cho bien
age=18;
console.log(age);

var fullname = null;
console.log(fullname);

//  noi chuoi

var username = "cybersoft";
console.log("user: " + username);

var address = "112 cao thang";
console.log("adress: " + address);

var numberStudient = 50;
console.log("numberStudient: " + numberStudient);

/*
    cac loai toan tu
        + : noi chuoi , tong
        - : tru
        * : nhan so
        / : chia lay phan nguyen
        % : chia lay phan du
        ++ : tang 1 ddon vi
        = : phep gan
        += : 
        -= :
        *= :
        /= :
        %= :

*/

var number1 = 10;
var number2 = 5;
var tong = number1 + number2;
console.log(tong);

var hieu = number1-number2;
console.log(hieu);

var tich=number1*number2;
console.log("tich :" + tich);

var thuong =number1/number2;
console.log("thuong :" + thuong);

var chialaydu=number1%number2;
console.log("chia lay du : " + chialaydu)

var count=0;
console.log(count)
// count=count+1;
count++;
console.log(count)

var count=0;
var newcunt=count;
console.log(newcunt);
// ++count ra 1 cong truoc gan sau ; count++ gan gia tri truoc moi cong sau
newcunt=count++;
console.log(newcunt);

var number = 0;
// number=number+1;
number+=1;
console.log("number : " + number);

/*
hang so (const)
khai bao hang so phai gan gia tri, khong cho phep cap nhat gia tri moi cho hang so

*/

const PI=3.14;