function blocks(url, left, bottom, width, height) {
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      newImage(url, left + w * 100, bottom + h * 100);
    }
  }
}
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

let horizon = window.innerHeight / 1.5;
let sky = window.innerHeight - horizon;
let grass = horizon;

blocks("assets/grass.png", 0, 0, window.innerWidth / 100, grass / 100);
blocks("assets/sky.png", 0, horizon, window.innerWidth / 100, sky / 100);

newImage("/assets/green-character.gif", 180, 150);
newImage("/assets/red-character.gif", 180, 350);
newImage("/assets/pine-tree.png", 600, 300);
newImage("/assets/tree.png", 350, 350);
newImage("/assets/rock.png", 500, 100);
newImage("/assets/well.png", 680, 250);

newItem("/assets/sword.png", 300, 350);
newItem("/assets/sheild.png", 300, 250);
newItem("/assets/staff.png", 300, 150);
