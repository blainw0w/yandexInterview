// __proto__
function cpu(model, coresSlashThreads, freq) {
	this.model = model
	this.coresSlashThreads = coresSlashThreads
}

cpu.prototype.sayPositive = function () {
	console.log(`${this.model} is awesome `)
}

const r5_1600 = new cpu('ryzen 5 1600', '6/12', '3200')

r5_1600.sayPositive()
