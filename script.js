const searchCity = function () {
	const cityName = document.getElementById('input-city-name').value;
	const apiKey = '1c51f8891905cade5548d838147753c8';
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
	)
		.then(res => res.json())
		.then(data => handleTemperature(data))
		.catch(err => console.log(err));
};

const handleTemperature = function (temperature) {
	const cityName = getId('city-name');
	const { name } = temperature;
	cityName.innerText = name;
	const degTemperature = getId('deg-temperature');
	const { temp } = temperature.main;
	const degTemperatureNum = Math.ceil(temp);
	degTemperature.innerText = degTemperatureNum;
	const weatherCondition = getId('weather-condition');
	const weather = temperature.weather[0];
	const { main, icon } = weather;
	weatherCondition.innerText = main;
	const weatherImg = getId('weather-img');
	weatherImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
	const display = getId('display');
	display.style.display = 'inline';
};
const getId = function (id) {
	const getElement = document.getElementById(id);
	return getElement;
};
