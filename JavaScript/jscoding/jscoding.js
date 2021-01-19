// Question: 1
let a = {},
b="0",
c = 0;

a[b] = "abc"
a[c] = "xyz"

console.log(a[b])

// Question: 2
let i = {},
j = Symbol('1'),
k = Symbol('1');

i[j] = "abc";
i[k] = "xyz";

console.log(i[j])

// Question: 3
let x = {},
y={
    n:'1'
}
z={
    m:'2'
}
x[y] = "abc"
x[z] = "xyz"
console.log(a[b])