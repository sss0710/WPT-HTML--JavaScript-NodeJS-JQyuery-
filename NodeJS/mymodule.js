const { compileFunction } = require("vm");

module.exports.fact = function(a)
{
    var fac = 1;

    if(a > 1)
    {
        for(var i = 1; i < a; i++)
        {
            fac*=i;
        }
    }
    console.log(fac);
}

module.exports.myprime = function(n)
{
    var flag = 'true';

    for( var i = 2; i < n/2; i++)
    {
        if(n%i == 0)
            flag = 'false';
    }
    if(flag == 'true')
        console.log("Prime Number");
    else
        console.log("Not a prime number")

}

module.exports.print_table = function(n)
{
    for(var i = 1; i <= 10; i++)
        console.log(n +" x "+ i +" = "+ (n*i));
}