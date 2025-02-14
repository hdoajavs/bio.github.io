<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GlitchElite</title>
    <style>
        /* Общие стили */
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
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 600px;
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        /* Меню */
        .menu-button {
            display: none; /* Скрыто на больших экранах */
            font-size: 1.5rem;
            background: none;
            border: none;
            color: #4285F4;
            cursor: pointer;
            margin-bottom: 1rem;
        }

        .menu {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .menu a {
            color: #4285F4;
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }

        .menu a:hover {
            color: #ffffff;
        }

        /* Адаптивность */
        @media (max-width: 768px) {
            .menu {
                display: none; /* Скрываем меню по умолчанию */
                flex-direction: column;
                position: absolute;
                top: 60px;
                left: 0;
                width: 100%;
                background-color: #121212;
                padding: 1rem;
                z-index: 10;
            }

            .menu li {
                margin: 0.5rem 0;
            }

            .menu a {
                font-size: 1.2rem;
            }

            .menu.active {
                display: flex; /* Показываем меню при активации */
            }

            .menu-button {
                display: block; /* Показываем кнопку гамбургера */
            }
        }
    </style>
</head>
<body>
    <!-- Кнопка гамбургера -->
    <button class="menu-button" onclick="toggleMenu()">☰</button>

    <!-- Меню -->
    <ul class="menu" id="menu">
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#projects">Проекты</a></li>
        <li><a href="#skills">Навыки</a></li>
        <li><a href="#contacts">Контакты</a></li>
        <li><a href="#blog">Блог</a></li>
    </ul>

    <!-- Основной контент -->
    <div class="container">
        <h1>Привет, я GlitchElite</h1>
        <p>Я — разработчик, специализирующийся на создании веб-сайтов.</p>
        <div class="links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
            <a href="mailto:yourmail@example.com">Напишите мне</a>
        </div>
    </div>

    <script>
        // Функция для открытия/закрытия меню
        function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active'); // Добавляем/удаляем класс active
        }
    </script>
</body>
</html>
