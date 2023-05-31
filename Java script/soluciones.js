VIDEOS-1

var letras = ['a','b','c','d',];
for (let i = 0; i < letras.length; i++);

letras.forEach((Element)=> {
    console.log(Element);
});


letras.forEach((Element) => console.log(Element));
//push
var letras = ['a','b','c','d',];
letras.push('e');
console.log(letras);

//shift
var letras = ['a','b','c','d',];
 var firstelement = letras.shift();
console.log(letras);
console.log(firstelement);


//pop
var letras = ['a','b','c','d',];
 var lastelement = letras.pop();
console.log(letras);
console.log(lastelement);


//map
//inmutable
var students = ['alex','maria','pepe'];
var attendance = students.map((students) => {
    return{
        name:students,
        attendance: false
    } 
})
console.log(students);
console.log(attendance);
console.log(students);

var productos =[
    {name:'camiseta', price:3000},
    {name:'jean', price:5000},
    {name:'blusa', price:7000}
]

var taxproduct = productos.map((productos) => {
    return{
        ...productos,
        impuesto: 0.19

    }
})
var prices = productos.map((productos) =>productos.prices);
console.log(productos);
console.log(taxproduct);
console.log(prices);


//filter
//inmutble
var students = [
    {nombre:'yo', edad:23, formacion:'feo'},
    {nombre:'yo-1', edad:27, formacion:'feo'},
    {nombre:'yo-2', edad:22, formacion:'lindo'},
    {nombre:'yo-3', edad:25, formacion:'lindo'}
]
var filtro = students.filter((students) => students.edad >= 24);
console.log(students);
console.log(filtro);

//reduce
//reducir un array en un valor

var grades = [3,5,6,7,3];
var sum = grades.reduce((acumulador,grades) => acumulador + grades, 0);
console.log(grades);
console.log(sum);
console.log(sum/ grades.length);


var ages = [22,21,23,43,21,43,18,28,23,23];
var resultado = ages.reduce((acumulador,ages)=>{
    if (acumulador[ages]){
        acumulador[ages] = 1
    }
    else{
        acumulador[ages] += 1
    }
    return acumulador;
})
console.log(ages);
console.log(resultado);


var sales = [
    {productosname: 'mouse', price: 45000, saleunits: 25},
    {productosname: 'teclado', price: 56788, saleunits: 26},
    {productosname: 'audifonos', price: 64553, saleunits: 56},
]

var resultado = sales.reduce((acumulador,productos) =>{
    let salestotal = productos.price * productos.saleunits;
    acumulador[productos.productosname] = salestotal;
    return acumulador;
})
console.log(sales);
console.log(resultado);


var students = [
    {nombre:'yo', edad:23, formacion:'feo'},
    {nombre:'yo-1', edad:27, formacion:'feo'},
    {nombre:'yo-2', edad:22, formacion:'lindo'},
    {nombre:'yo-3', edad:25, formacion:'lindo'}
]
var resultado = students
.map((students)=>students.formacion)
.reduce((acumulador,item)=>{
    if (item){
        acumulador.formacion += 1;
    }
    else{
        acumulador.nomatri +=1;
    }
    return acumulador
},{formacion:0,nomatri:0})
console.log(students);
console.log(resultado);
///////////////////////////////////////////////////////////////////////
VIDEO-2

// manipular arreglos 2

// some - every

//some: nos muestra en el array si hay un elemto que cumpla con una condicion
//every: si todos los elemntos cumplne con la condicion

var num = [1,2,3,4,5,6,7,8,9,10];
var num = [1,2,4,6,7,];
var resultado = num.some((num)=> num % 2 === 0);
console.log(resultado);


//every
var num = [1,2,3,4,5,6,7,8,9,10];
var resultado = num.every((num) => num % 2 === 0);
console.log(resultado);


//find -- findindex
// encontar un elemnto de un array

var clientes = [
    {id:1, nombre: 'santi'},
    {id:2, nombre: 'pablo'},
    {id:3, nombre: 'segura'},
    {id:4, nombre: 'sara'}
]

var cliente = clientes.find((cliente)=> cliente.id === 1);
console.log(cliente);
console.log(clientes);

//find index
var clientes = [
    {id:1, nombre: 'santi'},
    {id:2, nombre: 'pablo'},
    {id:3, nombre: 'segura'},
    {id:4, nombre: 'sara'}
]

var position = clientes.findIndex((cliente)=> cliente.id === 2);
console.log(clientes);
console.log(position);


//includes
//existe un elemnto especifico en un arreglo

var animales =['conejo','loro','gato','perro'];
var resultado = animales.includes('gato');
console.log(resultado);
console.log('santiago'.includes('sa'));

var buscador = (parametro)=>{
    let clientes = [
        {id:1, nombre: 'santi'},
        {id:2, nombre: 'pablo'},
        {id:3, nombre: 'segura'},
        {id:4, nombre: 'sara'}
    ]
    return clientes.filter((cliente)=> cliente.nombre.includes(parametro));

}
console.log(buscador('r'));


// join
// unir los elementos en un arreglo y generar un string


var elemntos = ['fire','water','air','land']
var resultado = elemntos.join('-_-')
console.log(resultado);

var clientes = [
    {id:1, nombre: 'santi'},
    {id:2, nombre: 'pablo'},
    {id:3, nombre: 'segura'},
    {id:4, nombre: 'sara'}
]
// console.log(cliente,join);
const csvGenerator = (array, separator =',')=>{
    let data = array.map((elemntos)=>Object.values(elemntos).join(separator))
    data.forEach(element => console.log(element));
}
// csvGenerator(clientes);
console.log(Object.values({id:3, nombre:'segura'}));


//concat -- sort -- splice -- slice
//cancat contatena 2 arreglos

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
var arr3 = arr1.concat(arr2);
console.log(arr3);

//sort
//ordenar
var arr1 = [1,2,3,4,5,6,7,8,0];
console.log(arr1.sort());

var array = [1,10000,21,31,4];
var order = array.sort((a,b)=> a-b);
console.log(order);
// console.log(Array.sorft());

//slice - splice
//splice-- remover o modificar elementos del array
var names = ['santiago','mama','hernan'];
names.splice(1, 1  ,'maricelly')
console.log(names)


//slice
//inmutable y retorna una copia mas pequña del array
var names = ['santiago','maricelly','hernan'];
var resultado = names.slice(1,2);
console.log(resultado);











