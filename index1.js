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
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>

                <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
        </td>
    </tr>
`;
    }).join("");
})