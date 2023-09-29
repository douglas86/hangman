## [Introduction](#table-of-content)

This is the second Milestone Project with Code Institute.

This Project will just have HTML, CSS, and vanilla JavaScript.

This is a simple Hangman Game were you guess what letters come into the spaces.

---

# Table of Content

- [Introduction](#introduction)
- [Planning](#planning)
  - [Colour Pallet](#colour-pallet)
  - [Technology Used](#technology-used)
    - [GitHub: Pros and Cons](#github-pros-and-cons)
    - [Jetbrains Spaces: Pros and Cons](#jetbrains-spaces-pros-and-cons)
  - [Wire framing](#wire-framing)
    - [Mobile Devices](#mobile-device)
    - [Tablet Devices](#tablet-device)
    - [Desktop Devices](#desktop-devices)
- [Bugs and Planning](#bugs-and-problems)
  - [Array appending instead of replacing](#array-appending-instead-of-replacing)
  - [Hangman Images not Changing on tries variable change](#hangman-images-not-changing-on-tries-variable-change)

---

## [Planning](#table-of-content)

### [Colour Pallet](#table-of-content)

![color-pallet.png](assets/images/readme/planning/color-pallet.png)

[URL: color space](https://mycolor.space/?hex=%2333976F&sub=1)

### [Technology Used](#table-of-content)

- figma—designing the wire frame diagram
- GitHub and Jetbrains Spaces—version control system

Comparison of using GitHub and Jetbrains Spaces.

The reason that I decided to use the two version control systems was I wanted to explore more of their products, as
their products are good and I enjoy using them.

#### [GitHub Pros and Cons](#table-of-content)

| Pros                                      | Cons                               |
|-------------------------------------------|------------------------------------|
| Most popular version control system       | very basic features                |
| Easy to create a new repository           | difficult to organise repositories |
| Can create private or public repositories |                                    |

#### [Jetbrains Spaces Pros and Cons](#table-of-content)

| Pros                                                   | Cons                                          |
|--------------------------------------------------------|-----------------------------------------------|
| Lots of nice features                                  | Only has limited features on the free version |
| Easy to setup and mirror other version control systems | Can be expensive                              |
| Excellent tool for using in collaboration              | Can't mix different paid plans                |
| Integrates well with Jetbrains products                | Can only create private repositories          |
| Easy to organise repositories into projects            |                                               |

### [Wire framing](#table-of-content)

#### [Mobile Device](#table-of-content)

![wireframe-mobile.png](assets/images/readme/planning/wireframe-mobile.png)

#### [Tablet Device](#table-of-content)

![wireframe-tablet.png](assets/images/readme/planning/wireframe-tablet.png)

#### [Desktop Devices](#table-of-content)

![wireframe-desktop.png](assets/images/readme/planning/wireframe-desktop.png)

---

## [Bugs and Problems](#table-of-content)

### [Array appending instead of replacing](#table-of-content)

- What is it suppose to do?
  
When I press a correct key, it should display the new array with the updated key

- What is it doing?

As the correct key is pressed instead of it displaying the new created array, it is appending to the previous  array, 
which then creates a longer array with to many spaces or letters.

- How did I get it to work?

When the correct key is pressed, that key is then placed in the array replacing the spaces that were created on a page 
load, while doing that I also replace the previous array passed into the function with the newly created array.

This is how it looks on a page load, with random word from an object:

![array-1.png](assets/images/readme/bugs/array-1.png)

This is what it looks like when I solved the bug:

![array-2.png](assets/images/readme/bugs/array-2.png)

### [Hangman Images not Changing on Tries variable change](#table-of-content)

- What is it suppose to do?

Whenever I press an incorrect key and the variable for tries, changes the image is suppose to change with it.

- What is it doing?

The image is not changing with the variable it remains the same.

- How did I get it to work?

I created a variable in the hangman Images function which gets the innerHTML of the tries variable on the screen. This function will run every time the variable changes.
Replacing the existing content that was there.

What it looks like on a page load:

![hangman-image-1.png](assets/images/readme/bugs/hangman-image-1.png)

When tries variably changed, image did not change with it:

![hangman-image-2.png](assets/images/readme/bugs/hangman-image-2.png)

---

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for Codeanywhere.
If you are using Gitpod,
then you need [this template](https://github.com/Code-Institute-Org/gitpod-full-template) instead.
We have preinstalled all the tools you need to get started.
It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **August 30th, 2023**

## Codeanywhere Reminders

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere, in the terminal, type:

`python3 -m http.server`

A button should appear to click: _Open Preview_ or _Open Browser_.

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere with no-cache, you can use this alias for `python3 -m http.server`.

`http_server`

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A button should appear to click: _Open Preview_ or _Open Browser_.

In Codeanywhere, you have superuser security privileges by default.
Therefore, you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku tool belt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works.
This API key is unique and private to you, so do not share it.
If you accidentally make it public, then you can create a new one with _Regenerate API Key_.

---

Happy coding!
