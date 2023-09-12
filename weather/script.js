let inputElement=document.getElementById("input");
let tempElement=document.getElementById("temp-value");
let locElement=document.getElementById("location");
let weather1=document.getElementById("weather-desc");
let button=document.getElementById("btn");
const apiKey="acee842d5ee50c2ff6c8a06e4bb04b5d";
button.onclick=function()
{
    if(inputElement.value=="")
    {
        alert("please enter location");
    }
    else{
        loc=inputElement.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        //sending request to server ,so passing url address
        //then method is used to get result of fetch method 
        fetch(url).then(res => res.json())
        .then(data=>{
           console.log(data)
           const{name}=data
           const{feels_like}=data.main
           const{description}=data.weather[0]
           tempElement.innerText=Math.floor(feels_like-273);
           locElement.innerText=name;
           weather1.innerText=description;
        })
       .catch(()=>{
            alert("enter valid location");
         })
        inputElement.value="";
   
    }
}