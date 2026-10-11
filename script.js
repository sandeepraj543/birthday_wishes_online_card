
const surpriseButton = document.getElementById("surpriseButton");

if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {
        let card = document.querySelector(".birthday-card");

        if (!card) {
            card = document.createElement("div");
            card.className = "birthday-card";
            surpriseButton.insertAdjacentElement("afterend", card);
        }


        const music = document.getElementById("birthdayMusic");
        if (music) {
            music.play().catch(() => {
                console.log("Audio play was blocked until user interaction.");
            });
        }

        card.innerHTML = `
            <div class="balloons">
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
            </div>

            <div class="cake">🎂</div>

            <h1 class="birthday-title">
                Happy Birthday,<br>
                 Mere Dost! 💖
            </h1>

            <p class="birthday-message">
                May your life be filled with laughter,
                endless happiness and beautiful memories! ✨
            </p>

            <p class="love-message">
                Stay happy, keep smiling! 🥰
            </p>

            <div class="confetti">🎊 ✨ 🎉 💖 🎊</div>
        `;

        surpriseButton.style.display = "none";
    });
}
