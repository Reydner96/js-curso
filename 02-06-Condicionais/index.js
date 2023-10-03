var me = {
    name: 'Reydner',
    age: 16
}

function checkAge (person) {
    console.log('A idade da pessoa é: ' + person.age)
    if (person.age > 17) {
        console.log('Está pessoa e maior de idade!')
    } else {
        console.log('Essa pessoa e menor de idade')
    }
}

checkAge(me)