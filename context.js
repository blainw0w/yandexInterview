//scope - видимость определенных переменных
// =/=
//context - как ф-я была вызвана *this call apply bind*

const cpu = {
	manufacturer: 'AMD',
	description: function (model, cores, frequency) {
		if (frequency > 10) {
			frequency = frequency / 1000
		}
		if (cores > 4)
			console.log(
				`Процессор ${this.manufacturer} ${model} имеет ${cores} ядер на базовой частоте ${frequency} GHz`
			)
		else
			console.log(
				`Процессор ${this.manufacturer} ${model} имеет ${cores} ядра на базовой частоте ${frequency} GHz`
			)
	},
}

cpu.description('ryzen 1600', 6, 3200)

const intel = { manufacturer: 'intel' }

cpu.description.call(intel, 'i5 4460', 4, 3200)

//cpu.description.apply - то же самое, только аргументы для ф-ии подаются в массиве:

//cpu.description.apply(intel, ['i5 4460', 4, 3200])

const intel_i5_4460 = cpu.description.bind(intel, 'i5 4460', 4, 3200)()
