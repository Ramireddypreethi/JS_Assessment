
let button=document.getElementById("button");
let content=document.getElementById("content");
button.onclick=function(){
    
       
        
        fetch(`https://restcountries.com/v2/all`).then(res => res.json())
        .then(data=>{
           const index=Math.floor(Math.random()*data.length);
           const country=data[index];
           const countryInformation=
           `
            ${country.name}

           Capital of ${country.name} is ${country.capital}

           Population of ${country.name} is ${country.population}

           Region of ${country.name} is ${country.region}

           SubRegion of ${country.name} is ${country.subregion}`;

           content.innerText=countryInformation;
        })
        .catch(() => {
            alert('There was a problem fetching the country information');
        });


    }
