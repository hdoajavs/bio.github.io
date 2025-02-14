<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Привет, я GlitchElite</h1>
        <p>Я — разработчик, специализирующийся на создании веб-сайтов.</p>
        <div class="links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
            <a href="mailto:yourmail@example.com">Напишите мне</a>
        </div>
    </div>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

.container {
    max-width: 600px;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.links a {
    color: #4285F4; /* Цвет ссылок */
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.links a:hover {
    color: #ffffff;
}
