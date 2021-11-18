module.exports.greetDay = function()
{
    var today = new Date();

    var hr = today.getHours();

    if(hr >= 5 && hr < 12)
        return "Good Morning";
    else
        if(hr >= 12 && hr < 16)
            return "Good Afternoon";
        else
            return "Good Evening";
}