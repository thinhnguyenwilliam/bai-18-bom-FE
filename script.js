//console.log(window);// trả ra object, f: viết tắt function
//những giá trị trong object mà có chữ f phía trước gọi là: method
//những giá trị trong object mà là string hay số gọi là: thuộc tính(properties)
// console.log(window.innerHeight);
// console.log(window.innerWidth);



//setTimeout, sau 1 times sẽ load lại nhưng load 1 lần duy nhất
//sau 3s mở trang 28tech, 3s nữa đóng trang 28tech
// setTimeout(() => {
//     var my_window=window.open("https://28tech.com.vn/","","width=1200, height=500, top=100, left=200")

//     setTimeout(() => {
//        my_window.close();
//     }, 3000);
// }, 3000);



// BOM screen
const a=window.screen.width;
console.log(a);
console.log(window.screen.height);



//Bom location
//host : tên miền(mua gắn vào chơi)
//protocal: http(kém bảo mật)(chữ i :logo trước url) và https(bảo mật)(vercel mình hay up code)(cái khóa :logo trước url)
//hosting: nơi đẩy code
console.log(window.location)


//Reload method
//setInterval : sau 1 times sẽ load lại, cứ lăp lại hoài lun
// setInterval(() => {
//     location.reload();
// }, 1000);



//BOM history
//chỉ truy cập được trang mà mình quản lý thôi
console.log(history);



//bom navigator
console.log(navigator);


//hàm built in trong bom popup
//alert,prompt,confirm



//hàm built in trong bom timing




//cookies
// var age=prompt("nhập tuổi");
// age=parseInt(age);
// document.cookie=`age=${age}`;

// console.log(age);
//console.log(document.cookie);
function setCookie(cname, cvalue, exdays) {
    // Create a new Date object
    var d = new Date();
    
    // Set the expiration time by adding the specified number of days
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    
    // Convert the expiration date to UTC format
    var expires = "expires=" + d.toUTCString();
    
    // Set the cookie with the provided name, value, and expiration date
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");// document.cookie ngăn cách bởi ";"
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") 
            c = c.substring(1);

        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
console.log(getCookie("age"));//returns the corresponding cookie value


function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}


var age=getCookie("age");
if(!age){
    age=prompt("Nhập tuổi");
    setCookie("age",age,2);//2 ngày, dù tắt máy hay trình duyệt thì vân lưu cho hết 2 ngày
    //document.cookie=`age=${age}`;//code lưu cookie(kg set thời giam hết hạn), tắt máy hay trình duyệt thì mất đi 1 session(phiên)->bắt nhập lại
}

age=parseInt(age);
console.log(age);
if(age>=18)
    console.log("Cho phép truy cập");
else
    console.log("OK lun");


////////////
const nutbam1=document.getElementById("delete_cookie");
nutbam1.addEventListener("click",()=>{
    deleteCookie("age");
});