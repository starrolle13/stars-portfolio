let recipientName, hostName;

function replaceContent() {
    recipientName = document.getElementById("recipientNameInput").value;
    hostName = document.getElementById("hostNameInput").value;
    
    document.getElementById("recipientNamePlaceholder").innerText = recipientName;
    document.getElementById("hostNamePlaceholder").innerText = hostName;
    
    return false;
}