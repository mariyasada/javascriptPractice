///for in loop

const objOfNumber=
{
   a:1,
   B:2,
   C:3
};

for (const key in objOfNumber) {
    console.log(`${key}: ${objOfNumber[key]}`)  
}

//for Each loop for arrays

const numbers=[2,3,4,5,67,8];

const myfunction= (number,index,array)=>{
    console.log(`number is ${number}:::::${index}:::::[${array}]`);
}

numbers.forEach(myfunction);

/// for of loop for arrays and strings

for (const number of numbers) {
    console.log(`number is ${number}`);
}

const arrOfObj=[{a:1},{b:2},{c:3}];
arrOfObj.forEach(element => {
       for (const key in element) {
           console.log(`${key} and ${element[key]}`)
               
           }
       }

    )

  for (const element of arrOfObj) {
        for (const key in element) {
            console.log(`${key} = ${element[key]}`)
                 
            }
        }

        //Fp Exercises
        // take an object with your mothers name and your age .now create a object for your sibling by age difference

        const mariya ={Name:"rashida",age:26};
        const fida={...mariya,age:mariya.age-12};
        console.log(fida); //{Name: 'rashida', age: 14}

        //create an array with 5 colors and. create new array by adding two more colors

        const color=['red','green','blue','black','white'];
        const twocolorsAdded =[...color,"orange","purple"];
        console.log(color,twocolorsAdded)//['red', 'green', 'blue', 'black', 'white'] (7) ['red', 'green', 'blue', 'black', 'white', 'orange', 'purple']
   
        // write a function birthday() to take person's name and age in obj and increase age
        const person={name:"mariya",age:26}
        const birthday=(person)=>({...person,age:person.age + 1})
             
          birthday(person);
          birthday(fida);

          //filter a number which is less than 10
          const numbers=[2,3,5,78,98,56,10,30];
          const applyFilter = numbers.filter(number=>number>10);
          console.log(applyFilter); //[78,98,56]

          //another way
          const morethan10=num=>num>10;
          numbers.filter(morethan10); //[78,98,56]
          
          // given an array of numbers return an array with all the numbers increamented by two

          const numberIncrementByTwo = num=>num +2;
          numbers.map(numberIncrementByTwo); // [4, 5, 7, 80, 100, 58]

          //given an array of numbers return an object for each item
          const returnAObject = (number,index) =>({[`item ${index+1}`]:number});
          numbers.map(returnAObject);

          // take an array and return sum of the numbers of array

          const sumOfArray =(acc,num)=>acc+num;
          numbers.reduce(sumOfArray,0); //242

          // for array of numbers return a array with all numbers multiply by 10

          const multiplyBy10 =(num,index)=>(index,num*10);
          numbers.map(multiplyBy10);

          // using this array return a array in which even number is incremented by 3;

          const EvenIncrementedBy3 = num =>num%2===0? num+3 :num;
          numbers.map(EvenIncrementedBy3); //[5, 3, 5, 81, 101, 59]

  // using this array return a array in which even number is incremented by 3 and odd number incremented by 2;

            const EvenandOddIncremented = num =>num%2===0? num+3 :num+2;
            numbers.map(EvenandOddIncremented); //[5, 5, 7, 81, 101, 59]

            // write own reduce method

            
            const myReduce =(arr,func,initialValue)=>{
                if(arr.length===0 && initialValue===undefined)
                {
                    throw new Error("array has no value");
                }
                else
                {
                    let acc = initialValue ?? arr[0];
                    let currIndex = initialValue===undefined ?1:0;
                    for(let i=currIndex;i<arr.length;i++)
                    {
                        acc= func(acc,arr[i]);
                    }
                    return acc;
                }
                
            }

            const arr =[1,2,3,4];
            const sum = myReduce(arr,(acc,curr)=> acc - curr,5);
            console.log(sum);
            // reduce method practice
            // find the sum of all odd numbers

            const sumOfOddNumbers = (acc,num)=> num %2 !== 0? num + acc : acc;
            numbers.reduce(sumOfOddNumbers,0);

            // find the sum of all even numbers

            const sumOfEvenNum = (acc,num) =>num %2 ===0 ? num+acc: acc;
            numbers.reduce(sumOfEvenNum,0);

            // find the sum of all numbers at odd indices

            const sumofOddIndices =(acc,num,index)=>index %2!==0? num+acc :acc;
            numbers.reduce(sumofOddIndices,0)

            //find the sum of all numbers at even indices

            const sumOfEvenIndices =(acc,num,index)=> index%2===0? num+acc :acc;
            numbers.reduce(sumOfEvenIndices,0);

            // find the biggest number in the array

            const findBiggestNumber =(acc,num) => num > acc?num:acc;
            numbers.reduce(findBiggestNumber,0);

            //find the number divisible by 10

            const numberDivisibleBy10 =(num)=>num%10 ===0;            
            numbers.filter(numberDivisibleBy10);

            // return an array of numbers where odd numbers increment by one and even number are decremented by one

            const IncrementDecrementByOne = (num)=> num%2 ===0?num+1:num-1;
            numbers.map(IncrementDecrementByOne);
            
            //return an object with sum off all numbers and even numbers seperately

           const OddEvenObj ={odd:0,even:0};
           const SumOfoddEvenInObject =(OddEvenObj,num)=>num%2===0 ? {...OddEvenObj,even:OddEvenObj.even+num}: {...OddEvenObj,odd:OddEvenObj.odd + num}
           numbers.reduce(SumOfoddEvenInObject,OddEvenObj);

           // given array of string find the number of strings with similar number of character
           //const input=["apple","orange","mango","papaya"];
            //output={5:3,6:2};

            const InputObject ={length5:0,length6:0}
            const input=["apple","orange","mango","papaya","banana","kw","ryt","rltb"];
            const findLengthOfstring = (InputObject,str)=>str.length===5?{...InputObject,length5:InputObject.length5 + 1}:{...InputObject,length6:InputObject.length6 +1};
            input.reduce(findLengthOfstring,InputObject)

            //return an array with strings which have vowels.
              
            
            const findingVowelsString =(arr)=>{
                let vowels =['a','i','e','o','u'];
                let emptyArry=[];
                arr.forEach(element=>{
                    for(let i=0; i< element.length;i++)
                    {
                        if(element.includes(vowels[i]))
                        {
                            let alementinArr =emptyArry.push([element]);
                            return alementinArr;
                        }
                        else{
                            return 1;
                        }
                    }
                   console.log(alementinArr);
                    
                })
                     
            }
            console.log(findingVowelsString(input))

            
            //return an array of objects with key as item and value as number of character in string.
            const findlengthOfInputstr = (str,index)=>({[`item ${index +1}`]: str.length})
            input.map(findlengthOfInputstr,0)

            // akansha's question

            // Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
     
            const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
            const makeEvenToOdd = (arr)=> arr %2===0? arr+1:arr;
            arr.map(makeEvenToOdd); //[1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

            // Get the names in an array for only those who have a cycle.
                        const family = [
            {
                name    : 'Tanay',
                haveCycle : true
            },
            {
                name     : 'Akanksha',
                haveCycle : false
            },
            {
                name     : 'Tanvi',
                haveCycle : true
            },
                {
                name     : 'Kanak',
                haveCycle : false
            }
            ];


       const haveCycle =(acc,arr)=>arr.haveCycle ? [...acc,arr.name]:[...acc];
       family.reduce(haveCycle,[]); //[tanay,tanvi]
 
       //1. Given an array. ****Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

  const findlessthan8andEven =(arr)=> (arr%2===0 && arr<=8) 
  arr.filter(findlessthan8andEven); //[2,6,8,4]

  //Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

  const arrInput = ["eat", "sleep", "repeat", "code"];
  const morethan6Char =(arr)=> arr.length >5;
  arrInput.filter(morethan6Char); //[repeat]

  //1. Given an array. Write a function to get the sum of all elements which are greater than 50.

 const arr2=[1, 2, 3, 58, 5, 6, 62, 8, 70];
   const sumOfElements= (acc,arr)=> arr > 50? arr+acc: acc;
   arr2.reduce(sumOfElements,0); // 190

   //Given an array. Write a function to find the product of all elements which are even.
   const arr3 = [1, 2, 3, 7, 5, 6, 8, 9];
   const productOfEven =(acc,arr)=> arr %2 ===0 ? arr * acc :acc;
   arr3.reduce(productOfEven); //96

   // 1. Given an array of objects. Write a function to find the sum of ages of each person.
   const arr4 = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

const sumOfAge =(acc,arr)=> acc + arr.age  ;
arr4.reduce(sumOfAge,0);   //121

//Given an array. Convert it in to an object with key as the index of each element and value as the element itself.
const arr5 = ["You", "all", "are", "rockstars"];
// const mapKeyValue =(arr,index)=>({[`${index}`]: arr});
// arr5.map(mapKeyValue)

const  reduceObject =(acc,arr,index)=>({...acc,[` ${index +1}`]:arr});
arr5.reduce(reduceObject,{});

// Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. 
// If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 
            
const arr6 = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]   

const addtypeName =(arr)=>arr.name.length >5 ?{...arr,type:"vagetable"}:{...arr,type:"fruit"};
arr6.map(addtypeName);

//Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

  const Qtylessthan2 =(arr)=>arr.quantity< 2;
  inventory.filter(Qtylessthan2);

  // total quantity

  const totalQty = (acc,arr)=> acc+ arr.quantity;
  inventory.reduce(totalQty,0);  //9

  // Find the object which contains the item whose quantity is zero.
  const qtyzero =(arr)=>arr.quantity===0
  inventory.filter(qtyzero)

  // Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

const arrwithHyphen = ()=>arr.join("-");
console.log(arrwithHyphen());

//1. Write a function that accepts a number as input and inserts hyphens between every two even numbers.
const input = "24345687";
let regex = /([02468])([02468])/g;
const addHyphen =(str)=> str.replace(regex, '$1-$2');// remaining
console.log(addHyphen(input));

// another way of doing it

const addingHyphen =(num)=>{
    num= num.toString();
    const SplitNum =num.split('');
    const arrMap = SplitNum.map((item,index,arr)=>{
        if(item %2===0 && arr[index +1] %2 ===0)
        {
            return (item=item + "-");
        }
        else{
            return item;
        }
    });
    return arrMap.join('');
};
console.log(addingHyphen(24345687));

//Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

const converUppercase =(str)=>str.toUpperCase(); 
console.log(converUppercase("neogrammer"));

// Write a function that takes in a string and converts only the vowels to uppercase and 
// all other characters to lowercase.

  

// Flatten an array without using flat().

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

const flattenarray =(acc,arr)=>[...acc, ...arr];
const arrayflatten=input.reduce(flattenarray,[]);

//Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
const reduceFlattenarray =(acc,curr)=>{
    // let numOfocc =0;
    if(acc[curr])
    {
        acc[curr]=acc[curr]+1;
        return {...acc,[curr]:acc[curr]}
    }
    else{
       return {...acc,[curr]:1}
    }
} 
console.log(arrayflatten.reduce(reduceFlattenarray,{}));

//currying
 //create a function which takes your name and return a function which would add your name to anything that function

 const mariyasays =name=> msg=>`${name} says ${msg}`;
 const mariyaLogger = mariyasays("mariya");
 mariyaLogger("hello");
// two parameter
 const mariyasays =(name,a)=> msg=>`${name}  has ${a}says ${msg}`;
 const mariyaLogger = mariyasays("mariya",20);
 mariyaLogger("hello");

 //curring
 add(2)(3)
 const add= a=>b=>a+b;
 const add2= add(3);
   console.log(add2(2)); 

   const multiply= a=>b=>(`a is ${a} and b is ${b},${a*b}`);
   const multi=multiply(6);
   console.log(multi(7))
   console.log(multiply(8)(9))

 // write a function which can log any text with your name,another function which can write any text with your userId
// now compare both functions to give one fumction which can log any text with bothe userid and usertext
 const NameLogger =(msg)=>(`Mariya: ${msg}`);
 const UserIdText =msg=>(`12345: ${msg}`);
 console.log(UserIdText(NameLogger("hello")));

 // trying composition

 const add =(a)=>a+2;
 const multiply=(a)=> a*2;
 const subtract=(a,)=>a-2;
 const power=num=> num**2;

 console.log(subtract(power(multiply(add(3)))))

 //write function compose() which take any number of function and return a function which will run 
//  the given function in order when called a parameter with an argument

const inc = num=> num+1;
const double = num=>num*2;
const square = num=> num* num;

const Increthensquarethendouble =(...fns)=>num =>fns.reduce((acc,fn)=>fn(acc), num);
const  returnFunction =Increthensquarethendouble(num);
console.log(Increthensquarethendouble(inc,square,double)(2))
// console.log(Increthensquarethendouble(double(square(inc(2)))))

 

 
 