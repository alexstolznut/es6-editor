export function spreadOperator() {
    const sauces = [ 'bbq', 'buffaloe', 'honey mustard']

    const dressings = ['ranch', 'balsamic', 'thousand island']

    const superSecretSauce = [...sauces, ...dressings]

    console.log(superSecretSauce)

    //Technically this is not allowed in objects, but you can do it in create react app

    const favoriteToppings = {
        peanutButter: 'crunchy',
        jelly: 'strawberry'
    }

    const sandwich = {
        breadSlices: 2,
        ...favoriteToppings
    }

    console.log('Sandwich= ', sandwich)

    const sameSandwich = Object.assign({breadSlices:2}, favoriteToppings);
    console.log(sameSandwich)
}