let notesList = [];
const input = document.getElementById('input');
const savedList = document.getElementById('saved-list');
const notesFromLocalStorage = JSON.parse(localStorage.getItem('notesLits'));

if (notesFromLocalStorage) {
	notesList = notesFromLocalStorage;
	renderList(notesList);
}

function renderList(list) {
	let listItems = '';
	list.forEach((i) => {
        listItems += `
            <li class="list-item">
                <span>${i}</span>
                <button class="delete-btn" data-action="delete">✖</button>
            </li>
        `
    });
	savedList.innerHTML = listItems;
}

function updateLocalStorage() {
    localStorage.setItem('notesLits', JSON.stringify(notesList));
}

input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && input.value) {
		notesList.push(input.value);
		input.value = '';
		updateLocalStorage();
		renderList(notesList);
	}
});

//delete note
savedList.addEventListener('click', (e) => {
    if(e.target.dataset.action === 'delete') {
        const parentNode = e.target.closest('.list-item');
        parentNode.remove();
    }
});