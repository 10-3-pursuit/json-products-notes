const { faker } = require('@faker-js/faker')

const createRandomProduct = () => {
    const product = {
        _id: faker.datatype.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        description: faker.commerce.productDescription(),
        brand: faker.company.name(),
        price: faker.commerce.price(10, 200, 2, '$'),
        currency: 'USD',
        inStock: faker.datatype.boolean(),
        attributes: {
            materials: faker.commerce.productMaterial(),
            color: faker.vehicle.color()
        }
    }
    return product
}



const randomProductFactory = (num) => {
    const products = []

    for(let i = 0; i < num; i++){
        products.push(createRandomProduct())
    }

    return products
}


module.exports = { 
    createRandomProduct, 
    randomProductFactory 
}