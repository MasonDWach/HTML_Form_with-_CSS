const resultsList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.innerHTML += `<p><strong>${name}:</strong> ${value || 'Not provided'}</p>`;
});