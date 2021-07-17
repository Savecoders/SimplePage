document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btnSubmit');
	const paragraph = document.getElementById('paragraph');
	const wordSearch = document.getElementById('wordSearch');
	const resultSearch = document.getElementById('resultSearch');
	function getResultSearch() {
		if (!paragraph.value || !wordSearch.value) {
			resultSearch.innerHTML = 'Error';
			console.log(paragraph.value);
			return;
		}
		const search = (arr, word) => {
			arr = arr
				.toLowerCase()
				.split(',')
				.join('')
				.split(' ')
				.filter((e) => e);
			console.log(arr);
			let contResult = false;
			Array.from(arr).forEach((e) => {
				if (e === word) {
					contResult = true;
				}
			});
			return contResult;
		};
		resultSearch.innerHTML = search(paragraph.value, wordSearch.value)
			? 'Si se encontro la palabra'
			: 'No se encontro la palabra';
	}
	btn.onclick = getResultSearch;
});
