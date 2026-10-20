function openLetter() {
    const letter = document.getElementById("letter");
    const music = document.getElementById("birthdayMusic");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";

        music.play().catch(error => {
            console.log("Music playback needs another click.");
        });
    }
}