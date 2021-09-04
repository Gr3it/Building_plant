function clicked(room) {
  var element = document.querySelector("." + room);
  if (!element.classList.contains("occupied"))
    element.classList.toggle("selected");
}
