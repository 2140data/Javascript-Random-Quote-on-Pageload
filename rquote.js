const quotes = [
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.',
    'This is where you put your quote text.'
];

function displayRandomQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}

// Display quote when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayRandomQuote);

// To use it:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Random Quote Generator</title>
// </head>
// <body>
//     <div id="quote-container"></div>
//     <script src="quotes.js"></script>
// </body>
// </html>