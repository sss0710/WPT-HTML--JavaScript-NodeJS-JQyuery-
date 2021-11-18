module.exports.add = function( a, b)
{
    console.log( a + b);
}
module.exports.subs = function( a, b)
{
    console.log(a-b);
}
module.exports.mul = function( a, b)
{
    console.log(a*b);
}
module.exports.div = function( a, b)
{
    if(a >= b)
        console.log(a/b);
    else
        console.log (b/a);
}
module.exports.sum = function( a, b, c)
{
    console.log (a+b+c);
}
module.exports.max = function( a, b, c)
{
    if(a > b)
        if(a > c)
            console.log (a);
        else
            console.log (c);
    else
        if( b > c)
            console.log (b);
        else 
            console.log (c);
}

module.exports.min = function( a, b, c)
{
    if(a < b)
        if(a < c)
            console.log (a);
        else
            console.log (c);
    else
        if( b < c)
            console.log (b);
        else 
            console.log (c);
}
