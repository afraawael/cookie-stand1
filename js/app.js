'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
const seattle = {
location : 'seattle',
minCus : 23,
maxCus : 65,
Avg : 6.3,
total : 0,
randomCusPerHour : [],
cookiesPerHour :[],

   getcustumernumber: function () {
    for (let i=0;i<hours.length;i++){
     this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
    };
    console.log('number of customers per hour is',`${this.randomCusPerHour}`);
   },

   getcookiesInHour: function(){
    for (let i=0; i<this.randomCusPerHour.length; i++){
        this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
    };

    console.log('Average Cookies Per Hour is',`${this.cookiesPerHour}`);
   },


   table: function(){
    let container = document.getElementById('locations');
    let h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent= this.location;
    let list = document.createElement('ul');
    container.appendChild(list);
   let li=0;
    for (let i=0;i<hours.length;i++){
        li = document.createElement('li');
        list.appendChild(li);
        li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;

    }

   }
}



seattle.getcustumernumber();
seattle.getcookiesInHour();
seattle.table();


function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}




const tokyo = {
location : 'tokyo',
minCus : 3,
maxCus : 24,
Avg : 1.2,
total : 0,
randomCusPerHour : [],
cookiesPerHour :[],

   getcustumernumber: function () {
    for (let i=0;i<hours.length;i++){
     this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
    };
    console.log('number of customers per hour is',`${this.randomCusPerHour}`);
   },

   getcookiesInHour: function(){
    for (let i=0; i<this.randomCusPerHour.length; i++){
        this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
    };

    console.log('Average Cookies Per Hour is',`${this.cookiesPerHour}`);
   },


   table: function(){
    let container = document.getElementById('locations');
    let h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent= this.location;
    let list = document.createElement('ul');
    container.appendChild(list);
   let li=0;
    for (let i=0;i<hours.length;i++){
        li = document.createElement('li');
        list.appendChild(li);
        li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;

    }

   }
}



tokyo.getcustumernumber();
tokyo.getcookiesInHour();
tokyo.table();



const dubai = {
    location : 'dubai',
    minCus : 11,
    maxCus : 38,
    Avg : 3.7,
    total : 0,
    randomCusPerHour : [],
    cookiesPerHour :[],
    
       getcustumernumber: function () {
        for (let i=0;i<hours.length;i++){
         this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
        };
        console.log('number of customers per hour is',`${this.randomCusPerHour}`);
       },
    
       getcookiesInHour: function(){
        for (let i=0; i<this.randomCusPerHour.length; i++){
            this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
        };
    
        console.log('Average Cookies Per Hour is',`${this.cookiesPerHour}`);
       },
    
    
       table: function(){
        let container = document.getElementById('locations');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent= this.location;
        let list = document.createElement('ul');
        container.appendChild(list);
       let li=0;
        for (let i=0;i<hours.length;i++){
            li = document.createElement('li');
            list.appendChild(li);
            li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
        }
    
       }
    }
    
    
    
    dubai.getcustumernumber();
    dubai.getcookiesInHour();
    dubai.table();




    
const paris = {
    location : 'paris',
    minCus : 20,
    maxCus : 38,
    Avg : 2.3,
    total : 0,
    randomCusPerHour : [],
    cookiesPerHour :[],
    
       getcustumernumber: function () {
        for (let i=0;i<hours.length;i++){
         this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
        };
        console.log('number of customers per hour is',`${this.randomCusPerHour}`);
       },
    
       getcookiesInHour: function(){
        for (let i=0; i<this.randomCusPerHour.length; i++){
            this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
        };
    
        console.log('Average Cookies Per Hour is',`${this.cookiesPerHour}`);
       },
    
    
       table: function(){
        let container = document.getElementById('locations');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent= this.location;
        let list = document.createElement('ul');
        container.appendChild(list);
       let li=0;
        for (let i=0;i<hours.length;i++){
            li = document.createElement('li');
            list.appendChild(li);
            li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
        }
    
       }
    }
    
    
    
    paris.getcustumernumber();
    paris.getcookiesInHour();
    paris.table();


        
const lima = {
    location : 'lima',
    minCus : 2,
    maxCus : 16,
    Avg : 4.6,
    total : 0,
    randomCusPerHour : [],
    cookiesPerHour :[],
    
       getcustumernumber: function () {
        for (let i=0;i<hours.length;i++){
         this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
        };
        console.log('number of customers per hour is',`${this.randomCusPerHour}`);
       },
    
       getcookiesInHour: function(){
        for (let i=0; i<this.randomCusPerHour.length; i++){
            this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
        };
    
        console.log('Average Cookies Per Hour is',`${this.cookiesPerHour}`);
       },
    
    
       table: function(){
        let container = document.getElementById('locations');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent= this.location;
        let list = document.createElement('ul');
        container.appendChild(list);
       let li=0;
        for (let i=0;i<hours.length;i++){
            li = document.createElement('li');
            list.appendChild(li);
            li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
        }
    
       }
    }
    
    
    
    lima.getcustumernumber();
    lima.getcookiesInHour();
    lima.table();