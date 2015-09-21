---
title: "Letterwar (In Progress)"
layout: project
permalink: project/letterwar
hideMoreInfo: true
demoHtml: demo-letterwar.html

brief: >
     Letterwar is an open source word game based on Android's Letterplex. It is currently in alpha - not all features have finished devleopment.
     
tags: React Flux ES6 Webpack SocketIO WebSockets NodeJS MongoDB Docker
gitHubUrl: https://github.com/osidenate/letterwar-web
screenshotBundle:
    - /img/letterwar-alpha.png
---

## Overview
If you've ever played Android's [Letterplex](https://play.google.com/store/apps/details?id=com.infinite_imagination.letterplex&hl=en) or IOS's [Letterpress](https://itunes.apple.com/us/app/letterpress-word-game/id526619424), then you'll be familiar with this game.
Letterwar is an open source clone of these games. Rather than being a native app, Letterwar runs in your browser.
 
Letterwar is still in alpha - not all features have been developed and it is not stable.

### System Overview

Letterwar consists of three different projects:

- **[letterwar-web](https://github.com/osidenate/letterwar-web)** is the webapp that the user runs in a browser to play the game.
  Under the hood, it is built with React using a similar application architecture to Flux. (It uses [Reflux](https://github.com/reflux/refluxjs).)
  SocketIO is used for real-time communication between the app and a backend server. The app is built using Grunt. Webpack is used for module bundling.
  It's written in ES6 and transpiled with Babel.
- **[letterwar-api](https://github.com/osidenate/letterwar-api)** is a NodeJS server using SocketIO to manage communication between each letterwar client.
- **[letterwar-db](https://github.com/osidenate/letterwar-db)** is a MongoDB database that is used to persist all the Game information. It is deployed using Docker.
