let currentRoom = "General";

// Join Chat Room
function joinRoom(room) {
    currentRoom = room;
    document.getElementById("current-room").innerText = `Room: ${room}`;
    document.getElementById("chat-box").innerHTML = "";  // Clear chat for new room
}

// Create Chat Room
function createRoom() {
    let roomName = document.getElementById("new-room").value.trim();
    if (roomName) {
        let roomList = document.getElementById("room-list");
        let li = document.createElement("li");
        li.innerText = roomName;
        li.onclick = () => joinRoom(roomName);
        roomList.appendChild(li);
        document.getElementById("new-room").value = "";
    }
}

// Send Message with Text Formatting
function sendMessage() {
    let messageInput = document.getElementById("message");
    let message = messageInput.value.trim();

    if (message) {
        let chatBox = document.getElementById("chat-box");
        let messageDiv = document.createElement("div");

        // Format text (bold, italics, links)
        message = message.replace(/\*(.*?)\*/g, "<b>$1</b>");  // Bold
        message = message.replace(/_(.*?)_/g, "<i>$1</i>");   // Italics
        message = message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'); // Links

        let timestamp = new Date().toLocaleTimeString();
        messageDiv.innerHTML = `<b>Jayaprakash:</b> ${message} <br> <small>${timestamp}</small>`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        messageInput.value = "";
    }
}

// File Sharing
document.getElementById("file-input").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let chatBox = document.getElementById("chat-box");
        let fileDiv = document.createElement("div");
        let timestamp = new Date().toLocaleTimeString();
        fileDiv.innerHTML = `<b>Jayaprakash:</b> Shared a file: <a href="${URL.createObjectURL(file)}" download="${file.name}">${file.name}</a> <br> <small>${timestamp}</small>`;
        chatBox.appendChild(fileDiv);
    }
});

// Voice Call
function startVoiceCall() {
    alert("Starting Voice Call...");
    // Implement WebRTC for real-time voice communication
}

// Video Call
function startVideoCall() {
    alert("Starting Video Call...");
    // Implement WebRTC for real-time video calls
}
