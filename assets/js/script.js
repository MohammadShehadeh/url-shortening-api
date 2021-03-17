let elem = 0;

fetchShortenUrl = () => {
	const url = document.getElementById('form-input');
	const inputText = document.querySelector('.api-result');
	const warningText = document.querySelector('.text-warning');

	elem += 1
	if (url.value) {
		fetch(`https://api.shrtco.de/v2/shorten?url=${url.value}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(response => response.json())
			.then(data => inputText.innerHTML +=
				`<div class="show-result">
					<div class="url-field">
						<p>${url.value}</p>
					</div>
					<div class="api-field">
						<input type="text" value="${data.result.short_link}" class="myInput-${ elem }">
						<button onclick="myFunction(${ elem })" class="myButton-${ elem }">Copy</button>
					</div>
				</div>`
			);

		url.classList.remove('warning');
		warningText.classList.remove('show');
	} else {
		url.classList.add('warning');
		warningText.classList.add('show');
	}
}

window.addEventListener('load', () => {
	const form = document.querySelector('.api-form');
	const toggle = document.querySelector('.toggle');
	const header = document.querySelector('.main-menu');
	const timeElem = document.querySelector('.time');

	// Toggle Navbar/header on click
	toggle.addEventListener("click", function() {
		header.classList.toggle('show');
	});

	// Fetch API data
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		fetchShortenUrl();
	});

	setInterval(() =>{
		const date = new Date();
		timeElem.innerText = date.toLocaleTimeString();
	}, 1000)
});
