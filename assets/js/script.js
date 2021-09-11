let elem = 0;
let inputText;
let url;
let warningText;

/**
 * Renders Url Shorten
 * @param {string} outputUrl returns url
 */
const renderUrlShorten = (outputUrl = '') => {
	inputText.innerHTML += `<div class="show-result">
			<div class="url-field">
				<p>${url.value}</p>
			</div>
			<div class="api-field">
				<input type="text" value="${outputUrl}" class="myInput-${elem}">
				<button onclick="myFunction(${elem})" class="myButton-${elem}">Copy</button>
			</div>
		</div>`;
};

/**
 * Fetches shorten url
 */
const fetchShortenUrl = () => {
	url = document.getElementById("form-input");
	inputText = document.querySelector(".api-result");
	warningText = document.querySelector(".text-warning");

	elem += 1;
	if (url.value) {
		fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${url.value}`)
			.then((response) => response.json())
			.then((data) => renderUrlShorten(data.data))
			.catch((error) => {
				console.error("Error:", error);
			});

		url.classList.remove("warning");
		warningText.classList.remove("show");
	} else {
		url.classList.add("warning");
		warningText.classList.add("show");
	}
};

window.addEventListener("load", () => {
	const form = document.querySelector(".api-form");
	const toggle = document.querySelector(".toggle");
	const header = document.querySelector(".main-menu");
	const timeElem = document.querySelector(".time");

	// Toggles Navbar/header on click
	toggle.addEventListener("click", function () {
		header.classList.toggle("show");
	});

	// Fetches API data
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		fetchShortenUrl();
	});

	setInterval(() => {
		const date = new Date();
		timeElem.innerText = date.toLocaleTimeString();
	}, 1000);
});
