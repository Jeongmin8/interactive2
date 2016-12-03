$(document).ready(function()
{
    $("#first,#second,#third").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
    });
    $("#f,#s").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
    });
});

function getRandomClass()
{
    //Store available css classes
    var classes = new Array("pink","hotpink","coral","yellow","green", "purple", "teal", "violet" );

    //Get a random number from 0 to 4
    var randomNumber = Math.floor(Math.random()*5);

    return classes[randomNumber];
}