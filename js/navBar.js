document.addEventListener('DOMContentLoaded', () => {
	const btnMenuVar = document.querySelector('.buttonMenuVar');
	const menuNav = document.querySelector('.menu');
	openBUtton();
	function openBUtton() {
		btnMenuVar.addEventListener('click', () => {
			console.log(menuNav);
		});
	}
});
