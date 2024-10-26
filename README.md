<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Favorite Song</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>My Favorite Song</h1>
    <div class="video-container">
        <iframe width="560" height="315" src="https://youtu.be/Y0ORhLyJWuc?si=lMvfWUDHwpJX3_0e" allowfullscreen></iframe>
    </div>
    <script src="script.js"></script>
</body>
</html>

body {
    background-color: #282c34;
    color: #61dafb;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

h1 {
    font-size: 2.5em;
    margin: 20px 0;
}

.video-container {
    margin: auto;
    max-width: 600px;
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.style.opacity = 0;

    let fadeEffect = setInterval(() => {
        if (!title.style.opacity) {
            title.style.opacity = 1;
        }
        if (title.style.opacity < 1) {
            title.style.opacity = parseFloat(title.style.opacity) + 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
});
