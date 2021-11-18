module.exports.calcEqui = function(s1, s2, s3)
{
    if(s1 == s2 && s2 == s3)
        console.log("It is an Equilateral triangle");
    else
        console.log("It is not an Equilateral triangle");
}

module.exports.calcPerim = function(s1, s2, s3)
{
    var perim = (s1 + s2 + s3);
    console.log("The perimeter of the triangle: "+ perim );
}

