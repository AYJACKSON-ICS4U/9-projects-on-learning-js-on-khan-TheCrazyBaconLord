//an array of movie objects
var movies = [
    {title: "The Interview", stars: 5, yearReleased: "2014"}, 
    {title: "21 Jump Street", stars: 4, yearReleased: "2012"}, 
    {title: "The Hangover", stars: 4, yearReleased: "2009"}, 
    {title: "Horrible Bosses", stars: 5, yearReleased: "2011"},
    {title: "The Hangover: Part II", stars: 5, yearReleased: "2011"},
    {title: "22 Jump Street", stars: 5, yearReleased: "2014"}
];

//movie 1 object
var movie1 = {
    title: "The Interview",
    stars: 5,
    yearReleased: "2014"
};

//movie2 object
var movie2 = {
    title: "21 Jump Street",
    stars: 4,
    yearReleased: "2012"
};

//movie3 object
var movie3 = {
    title: "The Hangover",
    stars: 4,
    yearReleased: "2009"
};

//movie4 object
var movie4 = {
    title: "Horrible Bosses",
    stars: 5,
    yearReleased: "2011"
    
};

//movie5 object
var movie5 = {
    title: "The Hangover: Part II",
    stars: 5,
    yearReleased: "2011"
};

//movie6 object
var movie6 = {
    title: "22 Jump Street",
    stars: 5,
    yearReleased: "2014"
    
};

//movie7 object
var movie7 = {
    title: "We're The Millers",
    stars: 4,
    yearReleased: "2013"
};

// draw shelves
fill(173, 117, 33);
rect(0, 120, width, 10);
rect(0, 240, width, 10);
rect(0, 360, width, 10);


var x = 10;
var y = 20;

//drawing all the gray rectangle things with the tex
for (var i=0; i< movies.length; i++)
{
    fill(165, 165, 165);
    rect(x, y, 90, 100);
    fill(0, 0, 0);
    text(movies[i].title, x+10, y+10, 70, 100);
    text("Rated "+movies[i].stars+" stars", x+10, y+75, 70, 100);
    text(movies[i].yearReleased, x+10, y+56, 70, 100);
    
    
    
    x += 130;
    
    if (i % 3 === 0)
    {
        x = 10;
        y += 119;
    }
}


text("A collection of my favourite movies", 329, 282, 60, 80);
