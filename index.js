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

const user = {
    id: 1,
    name: 'Nguyễn Ngọc Thiện',
    age: 19,
    email: 'thien.nguyen@example.com',
    address: 'Hà Nội'
};

// In toàn bộ thông tin ra Console
console.log(user);
console.log("Họ tên:", user.name);
console.log("Tuổi:", user.age);
console.log("Email:", user.email);
console.log("Địa chỉ:", user.address);