var family = ["https://thumbs.dreamstime.com/b/lovely-grandpa-walking-walking-stick-cute-grandpa-106527138.jpg", "https://thumbs.dreamstime.com/b/grandmother-portrait-cute-old-woman-bag-walking-stick-wearing-glasses-short-grey-hair-senior-lady-walk-grandma-86364329.jpg", "https://thumbs.dreamstime.com/b/half-body-father-avatar-vector-bearded-circle-background-illustration-95946026.jpg", "https://i.pinimg.com/originals/ed/1e/cc/ed1ecce22d15db09bd24fca471fba80a.jpgF", "https://www.pngitem.com/pimgs/m/331-3319591_sister-clipart-face-brother-clipart-hd-png-download.png", "https://i.pinimg.com/originals/61/2c/b7/612cb73d4284b091530ef6dda0993021.jpg"]

var f_name = ["Grandpa", "Grandma", "Father", "Mother", "Sister", "Me"]

var i = 0;

function next_img() {
    i++;
    if (i > 5) {
        i = 0;
    }

    document.getElementById("img1").src = family[i];
    document.getElementById("names").innerHTML = f_name[i];

}