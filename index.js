function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(url, left, bottom) {
  let object = newImage(url, left, bottom);

  object.addEventListener("dblclick", () => {
    object.remove();
  });
}

newImage("/assets/green-character.gif", 180, 150);
newImage("/assets/red-character.gif", 180, 350);
newImage("/assets/pine-tree.png", 600, 300);
newImage("/assets/tree.png", 350, 350);
newImage("/assets/rock.png", 500, 100);
newImage("/assets/well.png", 680, 250);

newItem("/assets/sword.png", 300, 350);
newItem("/assets/sheild.png", 300, 250);
newItem("/assets/staff.png", 300, 150);
