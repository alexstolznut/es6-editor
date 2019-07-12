export function destrcturing () {
    const feast = {
        appetizer: 'Spring Rolls',
        entre: 'Enchiladas',
        dessert: 'Apple Pie',
        beverages: {
            wine: 'Merlot',
            water: 'Sparkling'
        }
    }

    let {           //To destructure the object we declare 
        appetizer,  //a new variable and then choose any number 
        dessert,
        entre   //of keys to create into stand alone variables
    } = feast       //we also specify the object we're destructuring 
    
        console.log('Appetizer= ', appetizer);
        console.log('Dessert= ', dessert);
        console.log('Entre= ', entre)

    let {entre: meal, beverages:{wine}} = feast
    let {water} = feast.beverages
    let {dessert: favorite} = feast

    console.log(meal)
    console.log(wine)
    console.log(water)
    console.log(favorite)
}
