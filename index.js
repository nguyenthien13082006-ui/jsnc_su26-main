console.log('javascrip');

let age = 19;
const name = "Nguyễn Văn A";
console.log(name);
console.log(age);

// Kiểu dữ lieu
// 1. String (chuỗi) : "hoadv", "javascript", 'hoadv' 
// 2. Number (số)
// 3. Boolean (đúng hoặc sai)
let game = "Liên Quân";
let year = 9;
let isAdmin = true;
console.log(game);
// alert('Free Fire sống dai thành huyền thoại');
const h1 = document.getElementById('title').innerHTML = "Danh sách vật phẩm";
console.log(h1);
const student = {
    name: "Thiện",
    age: 20,
    isStudent: true,
};
h1.innerHTML = `Danh sách sinh viên: ${student.name} - ${student.age} tuổi`;
console.log(student);
const book = {
    title: "Lập trình PHP",
    author: "Nguyễn Ngọc Thiện",
    image: "",
    year: 1999,
};

console.log(book);

document.getElementById("title2").innerHTML = `${book.title}`;
document.getElementById("title-author").innerHTML = `${book.author}`;
document.getElementById("title-image").innerHTML = `${book.image}`;
document.getElementById("title-year").innerHTML = `${book.year}`;