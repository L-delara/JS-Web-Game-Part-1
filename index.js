function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

newImage("/assets/green-character.gif", 200, 200);
newImage("/assets/red-character.gif", 200, 400);
newImage("/assets/pine-tree.png", 600, 300);
newImage("/assets/sword.png", 300, 400);
newImage("/assets/sheild.png", 300, 300);
newImage("/assets/staff.png", 300, 200);
