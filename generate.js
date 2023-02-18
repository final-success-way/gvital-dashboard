const { Nuxt, Builder, Generator } = require('nuxt');
const config = require('./nuxt.config.js')

async function main() {
    const nuxt = new Nuxt({
        ...config,
        dev: false
    })
    await nuxt.ready()
    const builder = new Builder(nuxt)
    const generator = new Generator(nuxt, builder)
    await generator.generate()

}

main()
