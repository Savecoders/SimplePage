document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('myclick');
	const body = document.body;
	if (btn)
		btn.onclick = () => {
			if (!body.classList.contains('dark')) {
				body.classList.add('dark');
			} else {
				body.classList.remove('dark');
			}
		};
});
