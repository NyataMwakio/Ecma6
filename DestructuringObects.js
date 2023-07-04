const sandwich = {
    bread: 'dutch crunch',
    meat: 'tuna',
    cheese: 'swiss',
    toppings: ['lettuce', 'tomato', 'mustard'],
    description:"A tuna sandwich with swiss cheese, lettuce, tomato, and mustard on dutch crunch bread.",
    cut: 'rectangle'
    }
    const {bread, meat} = sandwich;
    console.log(bread, meat);

    // destructuring objects with functions
    function logSandwich({bread, meat, cheese, toppings, description, cut}){
        console.log(bread, meat, cheese, toppings, description, cut);
    }
    logSandwich(sandwich);