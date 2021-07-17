document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btnBinary');
	const input = document.getElementById('numbersBinary');
	const message = document.getElementById('resultBinary');
	function binaryConvert() {
		if (!input.value || !parseInt(input.value)) {
			message.innerHTML = 'Error';
			return;
		}
		const BinariConvert = (cont) => {
			cont = parseInt(cont);
			let messageString = '';
			do {
				messageString += (cont % 2).toString();
				console.log(cont + 1);
				cont = Math.floor(cont / 2);
			} while (cont !== 0);
			return messageString.split('').reverse().join('');
		};

		message.innerHTML = BinariConvert(input.value);
		input.value = '';
	}
	btn.onclick = binaryConvert;
});
