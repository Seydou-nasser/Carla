
const messages = [
    "Tu es sûre ?",
    "Vraiment sûre ??",
    "Tu es positifve ?",
    "Mon coeur s'il te plaît...",
    "Réfléchis-y !",
    "Si tu dis non, je serai vraiment triste...",
    "Je serai très triste...",
    "Je serai très très très triste...",
    "Ok d'accord, j'arrête de demander...",
    "Je plaisante ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    database.ref('no_count').once('value', function (snapshot) {
        const currentCount = snapshot.val();
        database.ref('no_count').put(currentCount + 1);
    });
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}