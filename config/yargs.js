const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'Base de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default: true,
    describe:'Indica si se lista o no la tabla de multiplicar'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Número hasta el cual se lista la tabla'
})
.check((argv,options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un número'
    }
    return true;
})
.argv;

module.exports = argv;