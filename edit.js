const id = new URLSearchParams(window.location.search).get("id");

if (id) {
    axios.get(`http://localhost:3000/students/${id}`).then((res) => {
        // console.log(res.data);
        document.getElementById("name").value = res.data.name;
        document.getElementById("age").value = res.data.age;
        document.getElementById("email").value = res.data.email;
    });
}

document.getElementById("form-edit").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    axios
        .put(`http://localhost:3000/students/${id}`, {
            name,
            age,
            email,
        }).then(() => {
            location.replace("index.html");
            alert("sua thanh cong");
        });
})