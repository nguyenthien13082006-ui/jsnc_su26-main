// console.log('javascrip');

// let age = 19;
// const name = "Nguyễn Văn A";
// console.log(name);
// console.log(age);

// Kiểu dữ lieu
// 1. String (chuỗi) : "hoadv", "javascript", 'hoadv' 
// 2. Number (số)
// 3. Boolean (đúng hoặc sai)
// let game = "Liên Quân";
// let year = 9;
// let isAdmin = true;
// console.log(game);
// alert('Free Fire sống dai thành huyền thoại');
// const h1 = document.getElementById('title').innerHTML = "Danh sách vật phẩm";
// console.log(h1);
// const student = {
//     name: "Thiện",
//     age: 20,
//     isStudent: true,
// };
// h1.innerHTML = `Danh sách sinh viên: ${student.name} - ${student.age} tuổi`;

// console.log(student);
// const book = {
//     id: 1,
//     title: "Lập trình PHP",
//     author: "Nguyễn Ngọc Thiện",
//     image: "anh1.jpg",
//     year: 1999,
// };

// console.log(book);
// // document.getElementById("title2").innerHTML = `${book.title}`;
// // document.getElementById("title-author").innerHTML = `${book.author}`;
// // document.getElementById("title-image").innerHTML = `${book.image}`;
// // document.getElementById("title-year").innerHTML = `${book.year}`;
// document.getElementById("books").innerHTML = `
//<tr class="hover:bg-gray-50">    
//             <td class="px-4 py-2 border border-gray-300">${book.id}</td>
//             <td class="px-4 py-2 border border-gray-300">${book.title}</td>
//             <td class="px-4 py-2 border border-gray-300">${book.author}</td>
//             <td class="px-4 py-2 border border-gray-300">
//               <div class="flex items-center justify-center gap-2">
//                 <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
//                 <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
//               </div>
//             </td>
//           </tr>
// `



// const students = [
//     {
//         id: 1,
//         name: "An",
//         age: 20,
//     },
//     {
//         id: 2,
//         name: "Bình",
//         age: 21,
//     },
//     {
//         id: 3,
//         name: "Chi",
//         age: 22,
//     },
// ];
// const html = students.map((hi) => `
// <tr class="hover:bg-gray-50">
//         <td class="px-4 py-2 border border-gray-300">${hi.id}</td>
//         <td class="px-4 py-2 border border-gray-300">${hi.name}</td>
//         <td class="px-4 py-2 border border-gray-300">${hi.age}</td>
//         <td class="px-4 py-2 border border-gray-300">
//             <div class="flex items-center justify-center gap-2">
//                 <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
//                 <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
//             </div>
//         </td>
//     </tr>
// `,
// ).join("");
// document.getElementById("student-list").innerHTML = html;



// const products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         price: 25000000,
//     },
//     {
//         id: 2,
//         name: "Samsung S25",
//         price: 22000000,
//     },
//     {
//         id: 3,
//         name: "Xiaomi 15",
//         price: 18000000,
//     },
// ];
// const html = products.map((product) => `
// <tr class="hover:bg-gray-50">
//         <td class="px-4 py-2 border border-gray-300">${product.id}</td>
//         <td class="px-4 py-2 border border-gray-300">${product.name}</td>
//         <td class="px-4 py-2 border border-gray-300">${product.price}</td>
//         <td class="px-4 py-2 border border-gray-300">
//             <div class="flex items-center justify-center gap-2">
//                 <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
//                 <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
//             </div>
//         </td>
//     </tr>
// `,
// ).join("");
// document.getElementById("products").innerHTML = html;



// Fecht
// Axios
axios.get("http://localhost:3000/students").then((res) => {
    console.log("cal API", res.data);
    const students = res.data;
    document.getElementById("products").innerHTML = students.map((student) => {
        return `
<tr class="hover:bg-gray-50">
        <td class="px-4 py-2 border border-gray-300">${student.id}</td>
        <td class="px-4 py-2 border border-gray-300">${student.name}</td>
        <td class="px-4 py-2 border border-gray-300">${student.age}</td>
        <td class="px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center gap-2">
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sửa</a>
                <button onclick="deleteStudent(${student.id})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Xoá</button>
            </div>
        </td>
    </tr>
`;
    }).join("");
});
// function loadStudent() {
//     axios.get("http://localhost:3000/students").then((res) => {
//         const html = res.data.map(
//             (student) => `
//             <tr class="hover:bg-gray-50">
//         <td class="px-4 py-2 border border-gray-300">${student.id}</td>
//         <td class="px-4 py-2 border border-gray-300">${student.name}</td>
//         <td class="px-4 py-2 border border-gray-300">${student.age}</td>
//         <td class="px-4 py-2 border border-gray-300">
//             <div class="flex items-center justify-center gap-2">
//                 <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sửa</a>
//                 <button onclick="deleteStudent(${student.id})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Xoá</button>
//             </div>
//         </td>
//     </tr>`,
//         ).join("");
//         document.getElementById("student-list").innerHTML = html;
//     });
// }
// loadStudent();
function deleteStudent(id) {
    const result = confirm("Bạn có chắc chắn muốn xóa không?");
    if (result) {
        axios.delete("http://localhost:3000/students").then(() => {
            loadStudent();
        });
    }
}
