function addItem(listId, placeholder) {
    const list = document.getElementById(listId);
    const newItem = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = placeholder;
    
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "حذف";
    removeBtn.classList.add("btn", "remove-btn");
    removeBtn.onclick = function() { list.removeChild(newItem); };
    
    btnContainer.appendChild(removeBtn);
    newItem.appendChild(text);
    newItem.appendChild(btnContainer);
    list.appendChild(newItem);
}

function removeLastItem(listId) {
    const list = document.getElementById(listId);
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}