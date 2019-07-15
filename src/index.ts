const nameInput = document.getElementById('name') as HTMLInputElement;
const doItButton = document.getElementById('doit') as HTMLInputElement;
const messageOutput = document.getElementById('message');

doItButton.addEventListener('click', function () {
    const enteredname = nameInput.value;
    messageOutput.innerText = enteredname.toUpperCase();
});