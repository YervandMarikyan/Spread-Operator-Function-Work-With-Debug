"use strict";

// 1. Ստեղծում եք մի քանի ֆունկցիա, օբյեկտ, զանգված, ու պարապում եք դեբագրով, 
// պետք ա կոդը նենց ստեղծեք, որ սխալ լինի մեջը ու սխալը գտնեք դեբագեռով

//function 1
function showInfo(obj) {
    for(let key in obj) {
        if(typeof(obj[key]) === "object") {
            console.log(`1-st Property: ${key}`);
            for(let innerKey in obj[key]) {
                //console.log(`   2-nd Property: ${innerKey}, Value: ${obj[key][innerKey]}`);  //correct
                console.log(`   2-nd Property: ${innerKey}, Value: ${obj[key]}`);
            }
        } else {
            //console.log(`1-st Property: ${key}, Value: ${obj[key]}`); //correct
            console.log(`1-st Property: ${key}, Value: ${key}`);
        }   
    }    
}

//object 1
const person = {
    name: "Artur",
    lastName: "Sahakyan",
    age: 28,
    natioanality: "Armenian",
    address: {
        country: "Armenia",
        city: "Yerevan",
        postIndex: 1115,
        street: "Mashtots",
        building: 25,
        appartment: 10
    },
    phone: "+374 77 55 11 22"
};

showInfo(person);

//object 2
const car = {
    name: "Rolls Royce",
    year: 2021,
    color: "White"
};
//showInfo(car);

//function 2
function getSumOfArr(a) {
    let sum = 0;
    for(let i = a.length-1; i <= 0; i--) {
        sum += a[i];
    }
    console.log(sum);
}


//array 1
const array = [11, 42, 57, 31, 5, 6];
getSumOfArr(array);



// 2. ստեղծում եք spread operator-ի նման ֆունկցիա, որը կվերցնի զանգվածներ 
// ու կսփրի ինչ-որ այլ զանգվածի մեջ

function likeSpread(arr, arrays, insertionPoints) {
    let newA = [];
    if(arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {

            for(let k = 0; k < insertionPoints.length; k++) {
                if(i === insertionPoints[k] - 1) {
                    newA = small(newA, arrays[k]);
                }  
            }
            newA.push(arr[i]);
        }
    } else {
        for(let k = 0; k < arrays.length; k++) {
            newA = small(newA, arrays[k]); 
        }   
    }   
    
    function small(arr1, arr2) {    
        for(let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);        
        }
        return arr1;
    }

    return newA;
}

//const array1 = [];
const array1 = [11, 42, 57, 31, 5, 6];
const array2 = [1, 4, 5, 11, 25, 36];
const array3 = [4, 222, 100, 20, 50, 40];
const array4 = [1000, 200, 400, 5000];
// [[1,4,5,11,25,36],11,42,[1000,200,400,5000],57,31,5,[4,222,100,20,50,40],6]
const afterSpread =  likeSpread(array1, [array2, array4, array3], [1, 3, 6]);

console.log("afterSpread: " + afterSpread);


