function createUser(){
    let email = document.getElementById("email").value
    let username = document.getElementById("userName").value
    let password = document.getElementById("password").value
    let phone = document.getElementById("phone").value
    $.ajax({
        //url là đường dẫn chỉ đến router ở index.js
        url: "/user",
        //phương thức phải trùng với phương thức ở API
        method: "POST",
        data: {
            email,
            username,
            password,
            phone
        }
    })
    .then((data) => {
        alert("something")
    }).catch((err) => {
        alert("something wrong")
    });
    alert("Click done")
}