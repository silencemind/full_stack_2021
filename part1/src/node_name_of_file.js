// Variables
const x = 1;
let y = 1

console.log(x,y);
y += 'abid\n';
console.log(x,y)
y += 'khan\n'
y += 3

console.log(x,y)



//  Arrays
console.log(" ARRAYS \n ")


const t = [1, -1 ,3]

t.push(5);
console.log(t.length )
console.log(t[0] )

t.forEach(value =>{
    console.log(value)
})




t2 = t.concat(7);  // Concat make a new array and add data to it
console.log(t)
console.log(t2)


console.log("MAP")
t3 = [1,2,3]
const m1 = t3.map(values => values* 2)
const m2 = t3.map(values => '<l1>'+ values +'</li>')

console.log(m1)
console.log(m2)
console.log(t3)

t4 = [1,2,3,4,5,6,7,8]
const [first,second,third, ... rest] =t4
console.log(first,second,third)
console.log(rest)
