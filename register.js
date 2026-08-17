document.getElementById("form-register").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios
        .post("http://localhost:3000/users", {
            email,
            password,
        })
        .then(() => {
            location.replace("login.html");
            alert("Đăng ký thành công");
        })
        .catch(() => {
            alert("Đăng ký thất bại");
        });
});