const loadCountries = (SearchText) => {
    const url = `https://restcountries.com/v3.1/${SearchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => { displayCountries(data), dropdown(data) })
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // for(const countrie of countries){
    //     console.log(countrie)
    // }

    countriesContainer.innerHTML = '';

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
        <p>Capital: ${element.region}</P>
        
        <button class="btn btn-primary">Details</button>

        `;

        countriesContainer.appendChild(countryDiv)

    });
}

function dropdown(data) {
    const optionContainer = document.getElementById('ul-container');
    optionContainer.innerHTML ='';
    const option = document.createElement('option');
    option.value = 'all';

    option.innerHTML = `
                        <a href="#">all</a>
                        `
    optionContainer.appendChild(option)

    // console.log(optionContainer.childNodes)
    // optionContainer.childNodes.innerHTML = '';




    const newRegion = [];


    data.forEach(data => {
        const region = data.region
        // console.log(region)
        newRegion.push(region)

    });

    const stringset = new Set(newRegion);
    const uniqueString = [...stringset];

    // console.log(uniqueString)
    // displayRigion(uniqueString)
    uniqueString.forEach(data => {


        const option = document.createElement('option');
        option.value = data;

        option.innerHTML = `
                            <a href="#">${data}</a>
                            `
        optionContainer.appendChild(option)
    });

}

const loadRegionDetails = (code) => {
    const url = `
    https://restcountries.com/v3.1/region/${code}
    `

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
        
}

// const displayRigion = region => {
//     const li = document.getElementsByClassName('list');
//     // console.log(li)

//     for (const node of li) {
//         console.log(node)
//     }

//     // li.forEach(data => {
//     //     console.log(data)
//     // })

// }

// displayRigion()
document.getElementById('ul-container').addEventListener('change', function (e) {
    if(e.target.value === 'all'){
        loadCountries('all')
    }
    else{

        loadRegionDetails(e.target.value);
    }
    console.log(e.target.value)
    
})

// show all region 
// document.getElementById('all-region').addEventListener('click', function(){
//     loadCountries('all')
// })
loadCountries('all')





