# 🎲 Dice Roller

A fun dice roller app that lets you roll multiple dice at once with visual dice images.

## What It Does

Enter the number of dice you want to roll, click the button, and the app generates random dice values (1–6) along with matching dice face images. You can roll as many dice as you want in a single throw.

## What I Learned

- **`Math.random()` & `Math.floor()`** — Generating random integers between 1 and 6 to simulate dice rolls.
- **Dynamic Image Rendering** — Using template literals to build `<img>` tags pointing to dice face images and injecting them via `innerHTML`.
- **Arrays & Loops** — Pushing values into arrays inside a `for` loop, then joining them for display.
- **`Number()` Type Conversion** — Converting the input value from string to number for the loop condition.
- **Template Literals** — Using backtick strings with `${}` to dynamically construct HTML and display text.

## What I Did Differently

- **Multiple dice support** — Most basic tutorials only roll a single die. I added a number input so you can roll any number of dice at once.
- **Visual dice faces** — Instead of just showing numbers, I used actual dice face images from a `diceImages/` folder, making the experience feel more like a real dice game.
- **Both text and image output** — The result shows the numeric values *and* the visual dice, so you get both at a glance.

## Tech Stack

- HTML
- CSS
- JavaScript (DOM, `Math.random()`, Arrays, Template Literals)

## How to Run

Just open `index.html` in any browser. Make sure the `diceImages/` folder with dice face PNGs (1.png through 6.png) is in the same directory.
