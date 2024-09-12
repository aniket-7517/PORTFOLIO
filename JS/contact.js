function send() {

    const text = document.getElementById('text').value;
    const gmail = document.getElementById('gmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (text.length === 0 || gmail.length === 0 || subject.length === 0 || message.length === 0) {
        window.alert('Please enter all details');
    } else {
        document.getElementById('text').value = '';
        document.getElementById('gmail').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
        window.alert('Message sent');
    }
}