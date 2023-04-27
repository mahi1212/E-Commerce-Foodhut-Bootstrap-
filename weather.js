const loadWeather = () => {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=71b460f2e1d5fc649c64425fece6538b`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data))
    .catch(err => alert('Enter valid city name'))
}

const displayResult = info => {
    console.log(info)
    const showRes = document.getElementById('show-result')
    showRes.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="icons/${info.weather[0].icon}.png" alt="icon">
    <h3>${info.name}</h3>
    <h3>${info.weather[0].main}</h3>
    <h3>${Math.round((info.main.temp)-273)} deg</h3>
    `
    div.classList.add('my-style')
    showRes.append(div)

}