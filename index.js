
function namedFunction(){
    return 6 * 2
}

function receivesAFunction(cb){
    console.log("hello there");
    cb();
}

function returnsANamedFunction(){
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I love cats');
    }
}