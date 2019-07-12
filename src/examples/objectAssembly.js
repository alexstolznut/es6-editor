export function objAssemblyComputedProps () {
    let superPower = 'laser eyes' //The object initializer
    let weaknesses = ['puppies'] //allows us to more succinctly take a 
    let cape = false            //variable and turn it into a key value pair

    const myHero = {    //When I create a new object 
        isGood: true,   //I can pass in my own key value pairs
        superPower,     //Or I can use this shorthand 
        weaknesses      //To add variables I already created
    }

    console.log('myHero= ', myHero)

    let creepyKeyName = 'skeletonKey'
    let rarity = 'very rare'

    const specialKeys = {
        [creepyKeyName]: rarity
    }

    console.log(specialKeys)
}