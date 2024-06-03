let input = document.getElementById('input');
let button = document.getElementById('btn');
let para = document.getElementById('para');


button.addEventListener('click', () => {
    para.innerHTML += `
        <ul>
        <li> ${input.value} <br>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        </li>
        </ul>
        
       <br>`;
});
