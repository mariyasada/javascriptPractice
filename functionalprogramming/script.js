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

            // const trytoReduce =(arr,acc)=>{
                    
            //     for(let i=0;i<arr.length;i++)
            //     {

            //          acc= acc + arr[i];
                      
            //     }
            //     return acc;
            // }
            // trytoReduce([2,3,5,7,18],0);


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

            const input=["apple","orange","mango","papaya"];
            const findLengthOfstring = ()

            
        