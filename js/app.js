'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
let container=document.getElementById('locations');
let table=document.createElement('table');
container.appendChild(table);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
let shops = [];
function cookieStand (location,minCus,maxCus,Avg){
    this.location = location;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.Avg = Avg;
    this.custNumPerHour=[];
    this.cookiesPerHour=[];
    this.total = 0 ;
    shops.push(this);

}

    cookieStand.prototype.getcustumernumber= function(){
        for (let i=0;i<hours.length;i++){
                 this.custNumPerHour= randomValue(this.minCus,this.maxCus)
          };
    };
    

    cookieStand.prototype.getcookiesInHour=function(){
        for (let i=0;i<14;i++){
          this.cookiesPerHour.push(Math.ceil(this.Avg*this.custNumPerHour[i]));
        }
      };
      cookieStand.prototype.change=function(){
        for(let i=0;i<14;i++){
          this.total=this.total+this.cookiesPerHour[i];
        }
      };

 
 

    function headerRow(){
        let firstRow=document.createElement('tr');
        table.appendChild(firstRow);
        let cell=document.createElement('th');
        firstRow.appendChild(cell);


        let th1= null;
        for (let i=0;i<hours.length;i++){
        let th1 = document.createElement('th');
        firstRow.appendChild(th1);
        th1.textContent = hours[i]; 
        }

        let dailyHours = document.createElement ('th');
        firstRow.appendChild(dailyHours);
        dailyHours.textContent = 'Daily Location Total';
    }



    cookieStand.prototype.render= function (){
        let dataRow=document.createElement('tr');
        table.appendChild(dataRow);
        let locName=document.createElement('th');
        dataRow.appendChild(locName);
         locName.textContent = this.location;   

         let td = null;
         for (let i=0;i<this.cookiesPerHour.length;i++){
         td= document.createElement('td');
         dataRow.appendChild(td);
         td.textContent = this.cookiesPerHour[i];
    }
    let dailyTotal = document.createElement('th');
        dataRow.appendChild(dailyTotal);
        dailyTotal.textContent = this.total;


    }



    let Seattle = new cookieStand ('Seattle',23,65,6.3);
    let Tokyo = new cookieStand ('Tokyo',3,24,1.2);
    let Dubai = new cookieStand ('Dubai', 11, 38, 3.7, 0);
    let Paris = new cookieStand ('Paris', 20, 38, 2.3, 0);
    let Lima = new cookieStand ('Lima', 2, 16, 4.6, 0);
     
    console.log(Seattle);

    headerRow();


    for (let i=0;i<shops.length;i++){
        shops[i].getcustumernumber();
        shops[i].getcookiesInHour();
        shops[i].change();
        shops[i].render();



    }

    
    console.log(shops);


    const form = document.getElementById('cookieStand');
    form.addEventListener ('submit', handleSubmitting);


    function handleSubmitting(event){
      event.preventDefault();
    let location=event.target.location.value;
    let min=parseInt(event.target.min.value);
    let max=parseInt(event.target.max.value);
    let avg=parseFloat(event.target.avg.value);   
    let newLocation = new cookieStand(location,min,max,avg);


    newLocation.getcustumernumber();
    newLocation.getcookiesInHour();
    newLocation.change();
    newLocation.render();
    
    console.log(location);
  }
    



  
  
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
// const seattle = {
// location : 'seattle',
// minCus : 23,
// maxCus : 65,
// Avg : 6.3,
// total : 0,
// randomCusPerHour : [],
// cookiesPerHour :[],

//    getcustumernumber: function () {
//     for (let i=0;i<hours.length;i++){
//      this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
//     };
    
//    },

//    getcookiesInHour: function(){
//        let val =0;
//        val=randomValue(this.minCus, this.maxCus);
//     for (let i=0; i<this.randomCusPerHour.length; i++){
//         this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
//         this.total=this.total+val
//     };

//   },


//    table: function(){
//     let container = document.getElementById('locations');
//     let h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent= this.location;
//     let list = document.createElement('ul');
//     container.appendChild(list);
//    let li=0;
//     for (let i=0;i<hours.length;i++){
//         li = document.createElement('li');
//         list.appendChild(li);
//         li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;

//     }
//     let totalLiItem = document.createElement('li');
//         list.appendChild(totalLiItem);
//         totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//     }
// }



// seattle.getcustumernumber();
// seattle.getcookiesInHour();
// seattle.table();
// console.log(seattle);


// function randomValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); 
// }




// const tokyo = {
// location : 'tokyo',
// minCus : 3,
// maxCus : 24,
// Avg : 1.2,
// total : 0,
// randomCusPerHour : [],
// cookiesPerHour :[],

//    getcustumernumber: function () {
//     for (let i=0;i<hours.length;i++){
//      this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
//     };
//    },

//    getcookiesInHour: function(){
//     let val =0;
//     val=randomValue(this.minCus, this.maxCus);
//  for (let i=0; i<this.randomCusPerHour.length; i++){
//      this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
//      this.total=this.total+val
//     };

//    },


//    table: function(){
//     let container = document.getElementById('locations');
//     let h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent= this.location;
//     let list = document.createElement('ul');
//     container.appendChild(list);
//    let li=0;
//     for (let i=0;i<hours.length;i++){
//         li = document.createElement('li');
//         list.appendChild(li);
//         li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;

//     }
//     let totalLiItem = document.createElement('li');
//     list.appendChild(totalLiItem);
//     totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//    }
// }



// tokyo.getcustumernumber();
// tokyo.getcookiesInHour();
// tokyo.table();
// console.log(tokyo);



// const dubai = {
//     location : 'dubai',
//     minCus : 11,
//     maxCus : 38,
//     Avg : 3.7,
//     total : 0,
//     randomCusPerHour : [],
//     cookiesPerHour :[],
    
//        getcustumernumber: function () {
//         for (let i=0;i<hours.length;i++){
//          this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
//         };
//        },
    
//        getcookiesInHour: function(){
//         let val =0;
//         val=randomValue(this.minCus, this.maxCus);
//      for (let i=0; i<this.randomCusPerHour.length; i++){
//          this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
//          this.total=this.total+val
//         };
    
//        },
    
    
//        table: function(){
//         let container = document.getElementById('locations');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent= this.location;
//         let list = document.createElement('ul');
//         container.appendChild(list);
//        let li=0;
//         for (let i=0;i<hours.length;i++){
//             li = document.createElement('li');
//             list.appendChild(li);
//             li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
//         }
//         let totalLiItem = document.createElement('li');
//         list.appendChild(totalLiItem);
//         totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//        }
//     }
    
    
    
//     dubai.getcustumernumber();
//     dubai.getcookiesInHour();
//     dubai.table();
//     console.log(dubai);




    
// const paris = {
//     location : 'paris',
//     minCus : 20,
//     maxCus : 38,
//     Avg : 2.3,
//     total : 0,
//     randomCusPerHour : [],
//     cookiesPerHour :[],
    
//        getcustumernumber: function () {
//         for (let i=0;i<hours.length;i++){
//          this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
//         };
//        },
    
//        getcookiesInHour: function(){
//         let val =0;
//         val=randomValue(this.minCus, this.maxCus);
//      for (let i=0; i<this.randomCusPerHour.length; i++){
//          this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
//          this.total=this.total+val
//         };
    
//        },
    
    
//        table: function(){
//         let container = document.getElementById('locations');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent= this.location;
//         let list = document.createElement('ul');
//         container.appendChild(list);
//        let li=0;
//         for (let i=0;i<hours.length;i++){
//             li = document.createElement('li');
//             list.appendChild(li);
//             li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
//         }
//         let totalLiItem = document.createElement('li');
//         list.appendChild(totalLiItem);
//         totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//        }
//     }
    
    
    
//     paris.getcustumernumber();
//     paris.getcookiesInHour();
//     paris.table();
//     console.log(paris);


        
// const lima = {
//     location : 'lima',
//     minCus : 2,
//     maxCus : 16,
//     Avg : 4.6,
//     total : 0,
//     randomCusPerHour : [],
//     cookiesPerHour :[],
    
//        getcustumernumber: function () {
//         for (let i=0;i<hours.length;i++){
//          this.randomCusPerHour[i] = randomValue(this.minCus,this.maxCus)
//         };
//        },
    
//        getcookiesInHour: function(){
//         let val =0;
//         val=randomValue(this.minCus, this.maxCus);
//      for (let i=0; i<this.randomCusPerHour.length; i++){
//          this.cookiesPerHour[i]=Math.floor(this.randomCusPerHour[i]*this.Avg)
//          this.total=this.total+val
//         };
    
//        },
    
    
//        table: function(){
//         let container = document.getElementById('locations');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent= this.location;
//         let list = document.createElement('ul');
//         container.appendChild(list);
//        let li=0;
//         for (let i=0;i<hours.length;i++){
//             li = document.createElement('li');
//             list.appendChild(li);
//             li.textContent=  `${hours[i]} : ${this.cookiesPerHour[i]}`;
    
//         }
//         let totalLiItem = document.createElement('li');
//         list.appendChild(totalLiItem);
//         totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//        }
//     }
    
    
    
//     lima.getcustumernumber();
//     lima.getcookiesInHour();
//     lima.table();
//     console.log(lima);