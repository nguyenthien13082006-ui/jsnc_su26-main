// Fecht
// Axios

axios.get("http://localhost:3000/books").then((res) => {
    console.log("cal API", res.data);
    const books = res.data;
    document.getElementById("products").innerHTML = books.map((book) => {
        return `
        <tr class="hover:bg-gray-50">    
             <td class="px-4 py-2 border border-gray-300">${book.id}</td>
             <td class="px-4 py-2 border border-gray-300">${book.title}</td>
             <td class="px-4 py-2 border border-gray-300">${book.year}</td>
             <td class="px-4 py-2 border border-gray-300">${book.cover}</td>
             <td class="px-4 py-2 border border-gray-300">
               <div class="flex items-center justify-center gap-2">
                 <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
                 <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </div>
             </td>
           </tr>`;
    }).join("");
})