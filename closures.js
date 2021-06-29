//ф-я замыкает в себе опр. значения из вышестоящего скоупа

// function helloTo(name) {
// 	const message = 'Hello ' + name + '! '
// 	return function () {
// 		console.log(message)
// 	}
// }

// const helloToNikita = helloTo('Nikita')
// helloToNikita()
// const helloToMisha = helloTo('Misha')
// helloToMisha()

function listOfGroup() {
	const list = ['Sysoev', 'Klimchuk', 'Morozov']
	return {
		print: function () {
			console.log(list.join(' '))
		},
		add: function (surnameToAdd) {
			list.push(surnameToAdd)
		},
		remove: function (surnameToRemove) {
			let i = list.indexOf(surnameToRemove)
			if (i > -1) {
				list.splice(i, 1)
			} else console.log('error')
		},
	}
}

const list = listOfGroup()
list.print() //displays current list
list.add('Kharlamov') //adds Kharlamov
list.print() //displays new list
list.remove('Sysoev') //deletes Sysoev
list.print() //displays new list
