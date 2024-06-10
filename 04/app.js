document.addEventListener("DOMContentLoaded", init);

function init() {
	console.log("DOM");

	//FORM
	const formEl = document.querySelector(".form");
	const latInput = document.querySelector(".form__field--lat");
	const latInputValue = latInput.value;
	// console.log(latInputValue)
	const longtInput = document.querySelector(".form__field--lng");
	const longtInputValue = longtInput.value;
	// console.log(longtInputValue)
	const submitBtn = document.querySelector(".form__submit");

	//WEATHER SECTION
	const latArea = document.querySelector(".weather__lat");
	const longArea = document.querySelector(".weather__lng");
	const weatherType = document.querySelector(".weather__summary");
	const weatherTemp = document.querySelector(".weather__temperature");

    //API 
    const apiKey = '17151440318c4f7f8a5f08e52a41c0de'

	const submitFn = e => {
		e.preventDefault();

		latArea.innerText = latInputValue;
		longArea.innerText = longtInputValue;

		//Fetch

		const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latInputValue}&lon=${longtInputValue}&units=I&lang=pl`);

		promise
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
                // console.log(data);
				// console.log(data.data[0].weather.description);
				// console.log(data.data[0].temp);
                weatherType.innerText = data.data[0].weather.description
                weatherTemp.innerText = data.data[0].temp

			})
			.catch(err => console.error(err));
	};

	formEl.addEventListener("submit", submitFn);
}
