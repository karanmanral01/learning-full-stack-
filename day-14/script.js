arr = [{
    user: 'karan',
    age: 33,
    city: 'uttrakhand',
},
{
    user: 'anshu',
    age: 26,
    city: 'bhopal',
},
{
    user: 'sandeep',
    age: 21,
    city: 'delhi',
},
{
    user: 'aman',
    age: 34,
    city: 'uttar pardesh'
}]


let sum = 0

arr.forEach(function (elem) {
    sum = sum + elem.age
})

console.log(sum/arr.length);
