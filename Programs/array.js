 let age = [20,11,32,21,30,20,10]
 for (let i =0; i< age.length; i++)
 {
    if(age[i] % 2 ==0)
    {
        console.log(age[i])
    }

  }

let age1 =[1,2,3,4,5,4,90]
for (let i=0; i<age.length; i++)
{
  if (age1[i]%2==0)
  {
    console.log(age1[i])
  }
}
// let age = [2,3,4,42,90,21,20,11]
// for (let i=0; i<age.length; i++)
// {
//     if(age[i]%2 ==0)
//     {
//         console.log(age[i])
        
//     }
// }
// let obj = [{test2: '3334'}]



// let a =[2,3,43,2323,66,98,57,40,22]

// for (let i =0; i<a.length;i++)
// {
//     if (a[i]%2 ==0)
//     {
//         console.log(a[i])
//     }
// }


// largest element in an array
// let a =[2,3,43,2323,66,98,57,40,22]
// let b = a[0]

// for (let i=0; i<a.length;i++)
// {

//     if( a[i] > b)
//     {
//           b = a[i]
//     }
    
// }
// console.log(b)

// Write a program that reverses all the elements of an array
// Write a program that prints all the male people’s first name given a complex object

// name_array = ['Ganesh','Lokesh','Priya','Lakshmi','Sai']
// gender_array = ['male','male','female','female','male']
// for (let i = 0 ; i<gender_array.length;i++)
// {
//     if (gender_array[i]=='male')
//     {
//         console.log(name_array[i])
//     }
// }

// const obj = {  fname: "Ganesh",
//          age: 22,
//          gender: 'male'
// }
// console.log(obj["fname"])
// console.log(obj.age)
// console.log(typeof(obj))
// Write a program that prints all the male people’s first name given a complex object

// const details = [{
//     fname:'Ganesh',
//     age:24,
//     gender:'male'},
//     {
//         fname:'Loki',
//         age:25,
//         gender:'male'},{
        
//         fname:"Sai",
//         age:26,
//         gender:'male'
    
//         }]

// for(let i =0; i < details.length;i++)
// {
//    if(details[i].gender == 'male')
//    {
//       console.log(details[i].fname)
//    }
// }

// const obj = [{
//     fname:'Ganesh',
//     age: 24,
//     gender: 'male'},{
    
//     fname: 'Sai',
//     age: 26,
//     gender: 'male'
//     },{
//         fname:'lakshmi',
//         age:25,
//         gender:'female'
//     }]
// for (let i =0; i<obj.length; i++)
// {
//     if(obj[i].gender == 'female')
//     {
//         console.log(obj[i].fname)
//     }
// }

// let a = [1,2,3,4,6,7,8];
// let max = a.length -1;
// //let b = a[max];
// for (let i=max; i>=0; i--)
// {
//     console.log(a[i]);
// }

// const fname = ['Ganesh','Sai Kumar','Lokesh'];
// b = fname.length - 1;
// for (let i=b; i>=0 ; i--)
// {
//     console.log(fname[i]);
// }