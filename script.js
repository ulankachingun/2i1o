function displayMessage(name) {
    const inn = document.getElementById('inn').value;
    const list = document.getElementById('chat');
    const newMessage = document.createElement('li');
    newMessage.textContent = `${name}: ${inn}`;
    list.appendChild(newMessage);
    document.getElementById('inn').value = '';
}