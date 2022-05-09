const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endPoint)
.then(res => res.json())
.then(data => {
    cities.push(...data) //(...data) spreads the array into the variable instead of putting it as a element
})

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    //we cannot directly write place.city.match(/wordsToMatch/i) because it will the var as a word try to find its match so we write regular expression(regex) outside for the match command to work.
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        return` 
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${numberWithCommas(place.population)}</span>
        </li>`
    }).join('')
    suggestions.innerHTML = html;
}

const searches = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searches.addEventListener('change', displayMatches);
searches.addEventListener('keyup', displayMatches)