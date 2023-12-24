
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("div");
    button.textContent = "Presentar";
    button.classList.add("button");

    button.addEventListener("click", function() {
        const character = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

        if (character !== null) {
            const characterFullName = getCharacterFullName(character);
            const span = document.querySelector('h1 span');
            const h1 = document.querySelector('h1');

            if (characterFullName) {
                span.textContent = characterFullName;
                h1.setAttribute('title', 'Presentado');

                const characterId = character.toLowerCase();
                const characterElement = document.getElementById(characterId);

                if (characterElement) {
                    characterElement.setAttribute('title', 'Presentado');
                }
            } else {
                span.textContent = '(desconocido)';
                h1.removeAttribute('title');
            }
        }
    });

    document.body.appendChild(button);

    function getCharacterFullName(character) {
        const characterNames = {
            'Mario': 'Mario',
            'Luigi': 'Luigi',
            'Bowser': 'Bowser Morton Koopa',
            'Peach': 'Princesa Peach Toadstool',
            'Yoshi': 'T. Yoshisaur Munchakoopas',
            'Toad': 'Toad',
            'Toadette': 'Toadette',
            'Daisy': 'Princesa Daisy',
        };

        return characterNames[character] || null;
    }
});