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
	list.forEach((i) => (listItems += `<li class="list-item">${i}</li>`));
	savedList.innerHTML = listItems;
}

input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter' && input.value) {
		notesList.push(input.value);
		input.value = '';
		localStorage.setItem('notesLits', JSON.stringify(notesList));
		renderList(notesList);
	}
});
