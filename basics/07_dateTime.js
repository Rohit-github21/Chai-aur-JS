// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// myCreatedDate = new Date(2023, 0, 23,10 ,5,45)
 myCreatedDate = new Date("2023-06-24")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getHours());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleDateString(`default`,{
    weekday: "long"
})
console.log(newDate);