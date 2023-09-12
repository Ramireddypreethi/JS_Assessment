let quote=document.getElementById("qu");
let newquote=document.getElementById("new-quote-btn");

newquote.onclick=function()
{
    const url="https://type.fit/api/quotes";
    fetch(url).then(res=>res.json())
    .then((data)=>{

        console.log(data)
        
       const{text}=data[Math.floor(Math.random()*data.length)]
     
        quote.innerText=text;
      
    });
}