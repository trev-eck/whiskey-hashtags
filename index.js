console.log("Hello");
let whiskeyType = document.getElementById("formControl1");
let preparation = document.getElementById("formControl2");
let specialStuff = document.getElementById("formControl3");
let mainstuff = document.getElementById("mainstuff");
// let thecard = document.getElementById("thecard");
// let tagdisplay = document.getElementById("tagsgohere");
console.log(specialStuff.value);
//assuming the use of 30 hashtags
//1m+, 3% of tags, pick one
const oneMil = [
  "#whiskey",
  "#mixology",
  "#cocktailporn",
  "#cocktailsofinstagram",
];

//500k+, 7% of tags, pick two tags
const fiveHun = [
  "#whiskeygram",
  "#distillery",
  "#homebar",
  "#giftguide",
  "#drinkresponsibly",
];
const fiveHunCock = ["#craftcocktail", "#cocktailoftheday"];

//100k+, 30% of tags, pick nine tags

const oneHun = [
  "#whiskeylover",
  "#whiskeylife",
  "#whiskeyporn",
  "#whiskeytime",
  "#americanwhiskey",
  "#whiskeytasting",
  "#instawhiskey",
  "#liqpic",
  "#garnishgame",
  "#drinksonme",
];
const oneHunB = ["#bourbongram", "#bourbonlover", "#bourbonwhiskey"];
const oneHunR = ["#ryewhiskey"];

const oneHunSpec = ["#caskstrength", "#singlebarrel"];

//50k+, 25% of tags, pick 7

const fiftyK = [
  "#whiskeycollection",
  "#whiskeybusiness",
  "#whiskeylove",
  "#whiskeytown",
  "#whiskeywithavie",
  "#whiskeybarrel",
  "#whiskeyneat",
];

const fiftyKB = ["#instabourbon", "#thebourbonleague"];
//20+, 25% of tags, pick 8

const twentyK = [
  "#whiskeyglass",
  "#bottlekill",
  "#barrell",
  "#bourbontasting",
  "#whiskeynight",
  "#farmtoglass",
  "#graintoglass",
];
const twentyKRo = [
    "#whiskeyontherocks"]

const twentyKB = [
    "#thebourbonalliance",
    "#bourbondrinker",
    "#bourboncollection"]

    const twentyKBRa = [ "#rarebourbon"]
//10k+, 10% of tags, pick 3

const tenK = [
  "#storepick",
  "#whiskeyconsesus",
  "#whiskeyoftheday",
];
const tenKB = [
    "#bourbonhunt",
    "#bourbonthieves"]

const tenKRa = [
    "#rarewhiskey"]

const tenKRy = [
    "#fryeday"]
const tenKWh = [
    "#wheatedbourbon"]

function generateTags() {
  let tagList = "";

  // select one million tag
  tagList += oneMil[Math.floor(Math.random() * oneMil.length)] + " ";

  //select two tags from 500k, dpending on if cocktail
  if (preparation.value == "Cocktail") {
    tagList += fiveHun[Math.floor(Math.random() * fiveHun.length)] + " ";
    tagList +=
      fiveHunCock[Math.floor(Math.random() * fiveHunCock.length)] + " ";
  } else {
    for (let i = 0; i < 2; i) {
      let rando = Math.floor(Math.random() * fiveHun.length);
      if (tagList.indexOf(fiveHun[rando], 0) == -1) {
        tagList += fiveHun[rando] + " ";
        i++;
      }
    }
  }

  if (whiskeyType.value == "Bourbon") {
    tagList += oneHunB[Math.floor(Math.random() * oneHunB.length)] + " ";
  } else {
    tagList += oneHunR[Math.floor(Math.random() * oneHunR.length)] + " ";
  }
  for (let i = 0; i < 8; i) {
    let rando = Math.floor(Math.random() * oneHun.length);
    if (tagList.indexOf(oneHun[rando], 0) == -1) {
      tagList += oneHun[rando] + " ";
      i++;
    }
  }

  if (whiskeyType.value == "Bourbon") {
    tagList += fiftyKB[0] + " ";
    tagList += fiftyKB[1] + " ";
    for (let i = 0; i < 5; i++) {
        tagList += fiftyK[i] + " ";
    }
  } else {
    for (let i = 0; i < fiftyKB.length; i++) {
      tagList += fiftyK[i] + " ";
    }
  }

      console.log(specialStuff.value);
      // too doooo add this special stuff tags

  if (whiskeyType.value == "Bourbon") {
      for (let i = 0; i < twentyKB.length; i++) {
          tagList += twentyKB[i] + " ";
      }
      if(preparation.value == "On The Rocks"){
          tagList += twentyKRo[0] + " ";
          for (let i = 0; i < 4; i++) {
              tagList += twentyK[i] + " ";
          }
      }else{
         for (let i = 0; i < 5; i++) {
          tagList += twentyK[i] + " ";
      } 
    }
} else {
    for (let i = 0; i < twentyK.length; i++) {
        tagList += twentyK[i] + " ";
}
}
// todoooo add special stuff tags to

if (whiskeyType.value == "Bourbon"){
    tagList += tenKB[Math.floor(Math.random() * tenKB.length)] + " ";
    for (let i = 0; i < 2; i) {
        let rando = Math.floor(Math.random() * tenK.length);
        if (tagList.indexOf(tenK[rando], 0) == -1) {
          tagList += tenK[rando] + " ";
          i++;
        }
      }
} else {
    for (let i = 0; i < tenK.length; i++) {
        tagList+= tenK[i] + " ";
    }

}

if(mainstuff.childElementCount > 1){
mainstuff.removeChild(mainstuff.lastChild);
}
let yourtags = document.createElement("div");
yourtags.classList="card mt-3";
yourtags.innerHTML = `
<div class="card-body">
  ${tagList}
</div>`;

mainstuff.appendChild(yourtags);

  console.log(tagList);

}

mainstuff.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log(specialStuff.value);
    generateTags();
})

//generateTags();
