function required() {
    throw Error('Field is required');
    return;
}
console.log('hello from js', add(2,3));

function add(x = required(),y = requred()) {
    if(x == null) {
        throw Error('x cannot be added');
    }
    return x+y;
}