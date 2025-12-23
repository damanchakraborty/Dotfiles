function restore_options() {
    chrome.storage.sync.get(['format', 'action'], function(result) {
        let format = result.format;
        if (!format) format = "png";
        document.getElementById("format").value = format;
        
        let action = result.action;
        if (!action) action = "save";
        document.getElementById("action").value = action;
    });
}

// save the setting
document.getElementById("save").addEventListener("click", function() {
    chrome.storage.sync.set({
        format: document.getElementById("format").value,
        action: document.getElementById("action").value
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Settings saved!';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
});

restore_options();