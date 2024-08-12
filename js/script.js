let monthName=document.getElementById('month-name')
let dayName=document.getElementById('day-name')
let deyNumber=document.getElementById('dey-number')
let year=document.getElementById('year')




let date =new Date();

let month= date.getMonth();
monthName.innerHTML=date.toLocaleString("en",{
    month:"long"
});
 dayName.innerText= date.toLocaleString("en",{

    weekday:"long"
 });
 dayName.innerText= date.getDate();
 year.innerText=date.getFullYear();