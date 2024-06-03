document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input');
    let button = document.getElementById('btn');
    let para = document.getElementById('para');

    button.addEventListener('click', () => {
        if (input.value.trim() !== "") {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.innerHTML = `${input.value}`;
            let editBtn = document.createElement('button');
            editBtn.textContent = "Edit Note";
            editBtn.className = 'edit-btn';
            let br = document.createElement('br');
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            li.appendChild(br); 
            li.appendChild(editBtn);
            li.appendChild(deleteButton);
            li.appendChild(br); 
            ul.appendChild(li);
            para.append(ul);
            editBtn.addEventListener('click', () => {
                let newInput = document.createElement('input');
                newInput.type = 'text';
                newInput.className = 'input';
                newInput.value = li.firstChild.textContent.trim();
                li.insertBefore(newInput, editBtn);
                li.firstChild.remove();
                let save = document.createElement('button');
                save.textContent = "Save";
                save.className = "save-btn todo";
                li.insertBefore(save, br);
                save.addEventListener('click', () => {
                    if (newInput.value.trim() !== "") {
                        li.insertBefore(document.createTextNode(newInput.value + ' '), newInput);
                        newInput.remove();
                        save.remove(); 
                    } else {
                        alert("Please enter a task!");
                    }
                });
                newInput.focus();
            });
            deleteButton.addEventListener('click', () => {
                para.removeChild(ul);
            });
            input.value = ''; 
        } else {
            alert("Please enter a task!");
        }
    });
});
