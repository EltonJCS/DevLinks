function toggleTheme() {
  const body = document.body;
  const profileImage = document.querySelector("#profile img");

  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    profileImage.setAttribute("src", "../assets/avatar-light.png");
  } else {
    profileImage.setAttribute("src", "../assets/avatar.png");
  }
}
