const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {displayCountries(data), dropdown(data)})
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // for(const countrie of countries){
    //     console.log(countrie)
    // }

    countries.forEach(element => {
        
        const countryDiv = document.createElement('div');
        countryDiv.classList.add("country");
        const name = element.name.common;
        
        const capital = element.capital ? element.capital[0] : 'No Capital';
        
        
        countryDiv.innerHTML = 
        `
        <img src="${element.flags.png}" height="160" alt="">
        <h3>Name: ${name} </h3>
        <p>Capital: ${capital}</P>
        <button class="btn btn-primary">Details</button>

        `;
        
        countriesContainer.appendChild(countryDiv)
        
    });
}

function dropdown(data){
    
    const ul = document.getElementById('ul');
    const newRegion = [];
    data.forEach(data => {
        
        
        const region = data.region
        console.log(region)
        newRegion.push(region)
        ul.innerHTML = `
    <li><a class="dropdown-item" href="#">Another action</a></li>
    `
    })

    for(const region of newRegion){
        if(newRegion === false){
            newRegion.push(region)
        }
    }
    console.log(newRegion)
    
    
    

}

// const displayDetails = code =>{
//     const url = `
//     https://restcountries.com/v3.1/alpha/${code}
//     `
    
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

loadCountries()
