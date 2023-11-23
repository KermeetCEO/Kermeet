chrome.windows.onFocusChanged.addListener(function(windowId) {
  // Supprimez cette ligne de code
});

document.addEventListener('DOMContentLoaded', function() {
  var messageInput = document.getElementById('messageInput');
  var phoneNumberInput = document.getElementById('phoneNumberInput');
  var countryCodeSelect = document.getElementById('countryCodeSelect');
  var sendButton = document.getElementById('sendButton'); 

  sendButton.addEventListener('click', function() {
    var message = messageInput.value;
    var phoneNumber = countryCodeSelect.value + phoneNumberInput.value;
    var url = 'https://web.whatsapp.com/send?phone=' + encodeURIComponent(phoneNumber) + '&text=' + encodeURIComponent(message) + '&type=phone_number&app_absent=0';

    //Copy message to clipboard
    copyToClipboard(message);

    chrome.tabs.create({ url: url });
  });
});


function copyToClipboard (text) {
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);

  // Select and copy the text
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
};