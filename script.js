// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
//let imageArray =
//  ["https://media.pitchfork.com/photos/649dbfb832ef0bc7a4f1ac4f/master/w_1280%2Cc_limit/Drake-Scorpion.jpg", "https://images.genius.com/05033c92156c1d3f9cc521ce500cf6cc.1000x1000x1.jpg", "savage.jpg"]
//let songNameArray = ["Emotionless","ALL Falls Down", "Red Sky"]
//let artistArray = ["Drake", "Kanye West", "21 Savage" ]
//let songLinkArray = ["https://www.youtube.com/watch?v=w4MSbajRs_Y", "https://www.youtube.com/watch?v=8kyWDhB_QeI", "www.youtube.com/watch?v=5_-sIkbYd_M"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let Drake = {
  songUrl : "https://www.youtube.com/embed/w4MSbajRs_Y?si=F9_AZ7mvbncdKlE_",
  artistName : "Drake",
  SongName : "Emotionless",
  imageUrl : 
"https://media.pitchfork.com/photos/649dbfb832ef0bc7a4f1ac4f/master/w_1280%2Cc_limit/Drake-Scorpion.jpg"
}

let Kanye = {
  songUrl : "https://www.youtube.com/embed/8kyWDhB_QeI?si=IFwcQBh8gT_vxED_",
  artistName : "Kanye",
  SongName : "All Falls Down",
  imageUrl : "https://images.genius.com/05033c92156c1d3f9cc521ce500cf6cc.1000x1000x1.jpg"
}

let Savage = {
  songUrl : "https://www.youtube.com/embed/5_-sIkbYd_M?si=C0-YBrW2-htADmyU",
  artistName : "21 Savage",
  SongName : "Red Sky",
  imageUrl : "savage.jpg"
}

let Jcole = {
  songUrl : "https://www.youtube.com/embed/VMeirNg87AY?si=4-Dkx6sXISbPat2W",
    artistName : "Jcole",
    SongName : "Power Trip",
    imageUrl : "https://i1.sndcdn.com/artworks-8rSOMaO4gsjl-0-t500x500.jpg"
}

let bigArray = [Drake,Kanye,Savage,Jcole];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.



function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

bigArray.push({
               songUrl : songLink.value,
               artistName : artist.value,
               SongName : songName.value,
               imageUrl : image.value
             })
}

// task 10: use `.push()` to add each input value to the correct array.



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  for(let i = 0; i < bigArray.length; i++) {
   let SonG = bigArray[i] 
    let image = document.createElement('img')
    image_src = SonG.imageUrl
    image.src = image_src
    displayImage.appendChild(image)
    
    let songName = document.createElement('p')
    songName.innerHTML = SonG.SongName
    displaySong.appendChild(songName)

    let songLink = document.createElement('iframe')
    songLink.src = SonG.songUrl
    displayLink.appendChild(songLink)

    let songArtist = document.createElement('p')
    songArtist.innerHTML = SonG.artistName
    displayArtist.appendChild(songArtist)
   
  }}

  

  


   
  






// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
