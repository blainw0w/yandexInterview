function cpu(manufacturer, model, cores, threads, freq) {
	this.manufacturer = manufacturer
	this.model = model
	this.cores = cores
	this.threads = threads
	this.freq = freq
}

const r5_6600 = new cpu('AMD', 'ryzen 5 6600', 6, 12, 4800)
console.log(r5_6600)

//реализация new в es5:

// function myNew(constructor, ...args) {
// 	const obj = {}
// 	Object.setPrototypeOf(obj, constructor.prototype)
// 	return constructor.apply(obj, args) || obj
// }

// const r5_6600 = myNew(cpu, 'AMD', 'ryzen 5 6600', 6, 12, 4800)
// console.log(r5_6600)
