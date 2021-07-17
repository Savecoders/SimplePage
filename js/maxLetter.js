document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btnSubmit');
	const input = document.getElementById('letter');
	const resultMsg = document.getElementById('resultLetter');

	function checkWord() {
		if (!input.value) {
			resultMsg.innerHTML = 'Error';
			return;
		}
		const repeatedWord = (text) => {
			let obj = {};
			let arrWords = text
				.toLowerCase()
				.split(',')
				.join('')
				.split(' ')
				.filter((e) => e);
			Array.from(arrWords).forEach((e) => {
				obj[e] = !obj[e] ? 1 : (obj[e] += 1);
			});
			return Object.keys(obj)
				.map((words) => ({ word: words, repetead: obj[words] }))
				.sort((a, b) => b.repetead - a.repetead)[0].word;
		};
		resultMsg.innerHTML = repeatedWord(input.value);
	}

	btn.onclick = checkWord;
});
