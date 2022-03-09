function openMenu() {
    document.getElementById("navMenu").classList.toggle("classOpen");
    document.getElementById("burger").classList.toggle("classOpen");
}

const x = document.getElementById('burger');
x.onclick = openMenu
const container = document.getElementById("burger")
container.onclick = openMenu;

