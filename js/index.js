setTimeout(() => {
	let targList = document.getElementsByClassName('welcomeLetter');
	document.getElementsByClassName('welcomeLetter');
	if (targList) {
		Array.from(targList).forEach((e) => {
			e.style.visibility = 'hidden';
			e.style.opacity = '0';
			e.style.display = 'none';
		});
	}
}, 9000);
