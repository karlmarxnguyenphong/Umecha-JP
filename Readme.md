# Gulp Front-End Kit

## Introduction

The Gulp Starter Kit is a basic project template using Gulp to automate web development tasks. It includes configurations for compiling Sass, minifying CSS, and minifying JavaScript. This starter kit helps you quickly get started with new frontend projects.

## Features

- **Sass Compilation**: Automatically compiles `.scss` files into CSS.
- **CSS Minification**: Optimizes and minifies CSS files to reduce size and improve performance.
- **JavaScript Minification**: Optimizes and minifies JavaScript files.
- **Automatic Browser Reload**: Uses BrowserSync to automatically reload the browser when changes occur.

## Installation

1. **Clone Repository**
   ```bash
   git clone git@github.com:karlmarxnguyenphong/gulp-front-end-kit.git
   cd gulp-starter-kit
2. **Install npm**
   ```bash
   npm install
3. **Directory Structure**
   ├──disk
   │  ├──js
   │  ├──scss
   │     ├──foundation
   │        ├──_base.scss
   │        ├──_normalize.scss
   │        └──_reset.scss
   │     ├──layout
   │        ├──_footer.scss
   │       ├──_header.scss
   │        ├──_main.scss
   │        └──_sidebar.scss
   │     ├──object
   │        ├──component
   │           ├──_button.scss
   │           ├──_dialog.scss
   │           ├──_girl.scss
   │           └──_media.scss
   │           
   │         ├──project
   │            ├──_aticles.scss
   │            ├──_comments.scss
   │            ├──_gallery.scss
   │            └──_profile.scss
   │         └──utility
   │            ├──_align.scss
   │            ├──_clearfix.scss
   │            ├──_margin.scss
   │            ├──_position.scss
   │            ├──_size.scss
   │            └──_text.scss
   │      └──style.scss
   ├──project
   │   ├──src
   │   │  ├──images
   │   │  ├──js
   │   │  └──style
   │   │     └──style.css
   │   └──index.html
   ├──.gitignore
   ├──gulpfile.js
   ├──package.json
   └──Readme.md