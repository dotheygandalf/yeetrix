var imageFiles = [
  './public/images/big mood.png',
  './public/images/big boss shrek.png',
  './public/images/bigger mood.png',
  './public/images/chef-shrek-kiss.png',
  './public/images/pirate-shrek.png',
  './public/images/rad-but-mad-but-thankful-cowboy-shrek.png',
  './public/images/rad-but-mad-ogre.png',
  './public/images/shrek sob 7.png',
  './public/images/shrek yeet large.png',
  './public/images/shrek-heart-2.png',
  './public/images/shrek-hide-the-pain2.png',
  './public/images/shrek-mind-blown.png',
  './public/images/shrek-stare.png',
  './public/images/shrek-strong-left.png',
  './public/images/shrek-strong-right.png',
  './public/images/shrek-wow.png',
  './public/images/shrek-yeet-up-close.png',
  './public/images/thanks shrek 3.png',
  './public/images/what are you doing in mah swamp.png',
  './public/images/zen-yeet.png'
];

var images = imageFiles.map(imageFile => {
  var temp = new Image(20, 20);
  temp.src = imageFile;
  return temp;
});

setTimeout(() => {

  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  var font_size = 20;
  var columns = c.width / font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for (var x = 0; x < columns; x++)
    drops[x] = 1;

  //drawing the characters
  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    // ctx.fillStyle = "#0F0"; //green text
    // ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
      //a random yeet to render
      var yeet = images[Math.floor(Math.random() * images.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.drawImage(yeet, i * font_size, drops[i] * font_size, 20, 20);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}, 200);
