//Day 7 Task

// 1. Get all the countries from the Asia continent /region using the Filter function


let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = function () {
  let result = JSON.parse(this.responseText);

 console.log(result.filter((value)=>value.continents.includes("Asia")).map((value)=>value.name.common))
};

xhr.send();


// 2. Get all the countries with a population of less than 2 lakhs using Filter function


let xhr1 = new XMLHttpRequest();

xhr1.open("GET", "https://restcountries.com/v3.1/all", true);

xhr1.onload = function () {
  let result = JSON.parse(this.responseText);

 console.log(result.filter((value)=>value.population<200000))
 
 console.log(result.filter((value)=>value.population<200000).map((v)=>v.name.common))

}
xhr1.send();


//3 .Print the following details name, capital, flag using forEach function


let xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://restcountries.com/v3.1/all", true);

xhr2.onload = function () {
  let result = JSON.parse(this.responseText);


  result.forEach((flag)=>console.log(`Flags:${flag.flag}`))
  result.forEach((cname)=>console.log(`Names:${cname.name.common}`))
  result.forEach((captial)=>console.log(`Captials:${captial.capital}`))

 

}
xhr2.send();

// 4. Print the country which uses US Dollars as currency.


let xhr3 = new XMLHttpRequest();

xhr3.open("GET", "https://restcountries.com/v3.1/all", true);

xhr3.onload = function () {
  let result = JSON.parse(this.responseText);


  let dollar = result.filter((value)=>value.currencies)

  console.log(dollar.filter(va=>Object.keys(va.currencies).includes("USD")).map((pp)=>pp.name.common))



 

}
xhr3.send();


 //4. Print the country which uses US Dollars as currency.


let xhr4 = new XMLHttpRequest();

xhr4.open("GET", "https://restcountries.com/v3.1/all", true);

xhr4.onload = function () {
  let result = JSON.parse(this.responseText);


  let dollar = result.filter((value)=>value.currencies)

  console.log(dollar.filter(va=>Object.keys(va.currencies).includes("USD")).map((pp)=>pp.name.common))



 

}
xhr4.send();


// 5. Print the total population of countries using reduce function

let xhr5 = new XMLHttpRequest();

xhr5.open("GET", "https://restcountries.com/v3.1/all", true);

xhr5.onload = function () {
  let result = JSON.parse(this.responseText);



let  filter = result.filter((value)=>value.population)

let map = filter.map((value)=>value.population)

let reduce = map.reduce((a,b)=>a+b)



 console.log(reduce)

}

xhr5.send();




