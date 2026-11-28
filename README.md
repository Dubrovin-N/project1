# Minimalist Tetris (Brick Game Inspired)

![HTML5](https://shields.io)
![CSS3](https://shields.io)
![JavaScript](https://shields.io)

A lightweight, minimalist clone of the classic Tetris game built with pure Vanilla JS, HTML, and CSS without using HTML5 Canvas.

The main goal of this project was to focus entirely on core game logic, state management, and mechanics rather than complex visual graphics.

## Features & Architecture

- **Game Flow & Windows:**
  - **Main Menu:** Start screen to initialize the game.
  - **Game Board (10x20 Grid):** Pure DOM-based grid displaying real-time game stats including **Current Level**, **Score**, and **Pause State**.
  - **Game Over Screen:** Features a classic "curtain" closing animation upon defeat (inspired by handheld Brick Game consoles).
- **Core Mechanics:**
  - Full boundary collision detection when moving pieces left, right, down or rotating them near the walls and other blocks.
  - Line clearing logic and progressive leveling system.
- **Sound Effects:**
  - Audio feedback for all key actions: moving/shifting, rotating pieces, soft/hard drops, clearing lines, and game over melody.

## Tech Stack

- **HTML5** — Semantic structure and game screens.
- **CSS3** — Grid layout for the 10x20 board and curtain animation.
- **JavaScript (ES6+)** — Game loop, collision math, DOM manipulation, and Web Audio/HTMLAudio integration.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Open `index.html` in any modern web browser.
