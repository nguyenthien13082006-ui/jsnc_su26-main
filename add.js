console.log("Thêm sinh viên");

const formAdd = document.getElementById("form-add");

formAdd.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    axios
        .post("http://localhost:3000/students", {
            name: name,
            age: age,
            email: email
        })
        .then(() => {
            alert("Thêm sinh viên thành công!");
        })
    window.location.href
});