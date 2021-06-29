//типы данных: null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0) //number
// console.log(typeof true) //boolean
// console.log(typeof 'the off-season') //string
// console.log(typeof undefined) //undefined
// console.log(null) //null
// console.log(typeof Math) // object
// console.log(typeof Symbol('JS')) //symbol
// console.log(typeof function () {}) //function, хотя это объект
// console.log(typeof NaN) //number :D

//приведение типов:
// let language = 'Javascript'
// if (language) {
// 	console.log("I'm writing on ", language)
// }

//false: '',0,null,undefined,NaN,false:

// console.log(Boolean(''))
// console.log(Boolean(0))
//и тд

// console.log(1 + '2') //string 12
// console.log('' + 1 + 0) //string 10
// console.log('' - 1 + 0) // number -1
// console.log('3' * '8') // number 24
// console.log(1 + 4 + 'px') //string 5px
// console.log('px' + 1 + 4) // string px14
// console.log('5px' - 2) // NaN
// console.log(null + 2) //2   null приводится к 0
// console.log(undefined + 2) //NaN    undefined не приводится к числу

// ==  сравнивает значение с приведением типов  (2=='2')/(undefined==null)  -> true
// === сравнивает значение без привидения типов (2==='2')/(undefined===null) -> false

// console.log(false == '') //true
// console.log(false == []) //true
// console.log(false == {}) //false

// console.log('' == 0) //true
// console.log('' == []) //true
// console.log('' == {}) //false

// console.log(0 == []) //true
// console.log(0 == {}) //false
// console.log(0 == null) //false
