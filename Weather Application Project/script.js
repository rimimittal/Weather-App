// http://api.weatherapi.com/v1/current.json?key=0e9080476660416fb69115230242508&q=Mumbai&aqi=no

const temperatureFeild = document.querySelector(".temp");
const locationFeild = document.querySelector(".time_location p");
const dateAndTimeFeild = document.querySelector(".time_location span");
const conditionFeild = document.querySelector(".condition p");
const searchFeild = document.querySelector(".search_area");
const form = document.querySelector('form');


form.addEventListener('submit', searchForLocation)


let target = 'Lucknow'

const fetchResults = async (targetLocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=0e9080476660416fb69115230242508&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime

    let temp = data.current.temp_c
    let condition = data.current.condition.text
    
    updateDetails(temp, locationName, time, condition)
}

function updateDetails(temp, locationName, time, condition){

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay());

    temperatureFeild.innerText = temp
    locationFeild.innerText = locationName
    dateAndTimeFeild.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionFeild.innerText = condition
}

function searchForLocation(e){
    e.preventDefault()

    target = searchFeild.value 

    fetchResults(target)
}

fetchResults(target);

function getDayName(number){
    switch(number){
        case 0: 
        return "Sunday";
        case 1: 
        return "Monday";
        case 2: 
        return "Tuesday";
        case 3: 
        return "Wednesday";
        case 4: 
        return "Thursday";
        case 5: 
        return "Friday";
        case 6: 
        return "Saturday";
    }
}