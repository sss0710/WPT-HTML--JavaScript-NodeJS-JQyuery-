module.exports.calcArea = function(rad)
{
    var area = Math.PI*Math.pow(rad,2);
    console.log(area);
}

module.exports.calcCircum = function(rad)
{
    var circum = 2*Math.PI*rad;
    console.log(circum);
}

module.exports.calcDiam = function(rad)
{
    var diam = rad*2;
    console.log(diam);
}
