function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let card_div = document.createElement("div");
  card_div.setAttribute("class", "card");
  document.querySelector(".container").append(card_div);

  let img_div = document.createElement("img");
  img_div.src = thumbnail;
  img_div.setAttribute("class", "image");
  card_div.appendChild(img_div);

  let text_div = document.createElement("div");
  text_div.setAttribute("class", "text");
  card_div.appendChild(text_div);

  let text1_div = document.createElement("div");
  text1_div.setAttribute("class", "text1");
  text_div.appendChild(text1_div);
  
  let text2_div = document.createElement("div");
  text2_div.setAttribute("class", "text2");
  text_div.appendChild(text2_div);

  let text3_div = document.createElement("div");
  text3_div.setAttribute("class", "text3");
  text_div.appendChild(text3_div);
  
  let duration_div = document.createElement("div");
  duration_div.setAttribute("class", "duration");
  card_div.appendChild(duration_div);

  if( views >= 1000 && views < 1000000 ) {
    views = (views/1000) + "K";
  }
  else if( views >= 1000000 ) {
    views = (views/1000000) + "M";
  }
  duration_div.innerHTML = duration;
  text1_div.innerHTML = title;
  text2_div.innerHTML = cName;
  text3_div.innerHTML = views + " views • " + monthsOld + " months ago";

}

let v = prompt("Enter the Number of Cards to Create ...")
v--
    let tile = prompt("Enter the title");
    let ch_n = prompt("Enter the Channel Name");
    let vie = prompt("How many views did it got ?");
    let tim = prompt("How much old was the Video");
    let dur = prompt("How long was the Video in the form 00:00");
    let link = prompt("Give the link for the video");
createCard(
  tile,
  ch_n,
  vie,
  tim,
  dur,
  link
);
