const piano = document.querySelector("#piano");

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];

const blackKeys = [
    { note: "C#", left: 55, key: "W" },
    { note: "D#", left: 135, key: "E" },
    { note: "F#", left: 295, key: "T" },
    { note: "G#", left: 375, key: "Y" },
    { note: "A#", left: 455, key: "U" }
];

const keyMap = {
    A: "C",
    S: "D",
    D: "E",
    F: "F",
    G: "G",
    H: "A",
    J: "B",
    W: "C-sharp",
    E: "D-sharp",
    T: "F-sharp",
    Y: "G-sharp",
    U: "A-sharp"
};

let record = [];

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

function animate(key) {
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 100);
}

whiteKeys.forEach(function (note) {
    const key = document.createElement("div");
    key.classList.add("white");
    key.innerText = note;

    key.addEventListener("click", function () {
        playSound(note);
        record.push(note);
        animate(key);
    });

    piano.appendChild(key);
});

blackKeys.forEach(function (item) {
    const key = document.createElement("div");
    key.classList.add("black");
    key.innerText = item.note;
    key.style.left = item.left + "px";

    key.addEventListener("click", function () {
        const fileName = item.note.replace("#", "-sharp");
        playSound(fileName);
        record.push(fileName);
        animate(key);
    });

    piano.appendChild(key);
});

document.addEventListener("keydown", function (e) {
    const note = keyMap[e.key.toUpperCase()];
    if (!note) return;

    playSound(note);
    record.push(note);

    document.querySelectorAll(".white, .black").forEach(k => {
        if (k.innerText === note || k.innerText === note.replace("-", "#")) {
            animate(k);
        }
    });
});