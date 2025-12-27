// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["💖", "💕", "💗", "💞", "💘"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Love button
function loveclick() {
  document.getElementById("message").innerHTML =
    "I love youuuuu sooooooo muchhhhhhh nanaluuuuuuuuuuuu 🥹💖 not kiddinggg ,can't waitt to have sex officiallyy with youuuuuuuuuuu..can't wait to have kids with youuu,to be very honestt i'm veryy expressive ,butt youu dont understandd how muchhh i love youuuu,nak ae ela cheppaloo thelitledu lee....and that's whyyy i'm trying to impress you in every single possiblee wayyyy
ila aina nik ardham avthundi ankuntunnaaa.....ni birthdayyyy ki nen long text pettadam nak asl pedha vishyam laaga anipiyaledhu nen prathisari ankuntaaa nv padkunnaaka msg chesi express chedham ani kaaniiii every night i end up tallking with youuu in callsss,padkunesthaaa and next morningg nitho paate lesthaa nak direct ga chepadaniki endhukoo goram siggu mohamatam anni aythunayyy....i dont know na efforts ni efforts tho match avthunayoo ledhooo kaanii ninnu sathayisthuntee entha manchiga anipisthado antha kante ekva baadha aythadii ayoo ibandhi pedthuna ani kani nan kakpothe inkevarni baristhad le ukuntaa......naku ni kante ekva chepali anipisthadiii hemanthhh i love you i love youu anii kaani emoo aagipothadii maata ...ippudu chepthunnaa i lovveeeee youuuuuuuuuuuuuuuuuuuuu..i lovee youuuuu the mosttttttttttttt";

  createHeart();
  createHeart();
}

// Miss button
function missclick() {
  document.getElementById("message").innerHTML =
    "I missssss you every singleee seconddddd 🥺💞 ik even when you’re not here, you’re alwaysss with me.Mr.hemanth reddyy,thankss for spendingg your valuable time with meee...thokkalo long distanceee hope this distancee ends soonnnnnnnn....";
  createHeart();
}

// Hug button
function hugclick() {
  document.getElementById("message").innerHTML =
    "Come hereee 🫂 Imagine me hugging you so tight and never lettingggg go.";
  createHeart();
  createHeart();
}