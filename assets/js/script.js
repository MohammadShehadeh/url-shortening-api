window.addEventListener('load', function(event) {

	/*
	* Toggle Navbar/header on click
	*/
	var toggle = document.querySelector('.fa-bars');
	var header = document.querySelector('.main-menu');

	toggle.addEventListener("click", function() {
		header.classList.toggle('show');
	});

	/*
	* Fetch API data
	*/
	var url = document.getElementById('form-input');
	var form = document.querySelector('.api-form');
	var inputText = document.querySelector('.api-result');
	var warningText = document.querySelector('.text-warning');

	var elem = 0;
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		elem += 1
		if (url.value) {
			fetch(`https://cu8.in/api/?action=short&urls=|${url.value}|`)
			.then(response => response.json())
				.then(data => inputText.innerHTML +=
					`<div class="show-result">
						<div class="url-field">
							<p>${url.value}</p>
						</div>
						<div class="api-field">
							<input type="text" value="${data.data.shortUrl['secure']}" class="myInput-${ elem }">
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

	});


});