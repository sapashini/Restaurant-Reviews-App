#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I have incrementally converted a static webpage to a mobile-ready web application. In this first stage, I have taken a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Also, I added a service worker to begin the process of creating a seamless offline experience for end users.

### Specification

I have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. YMy task was to update the code to resolve these issues while still maintaining the included functionality.

### What I did from here?

1. In the project folder, I started up a simple HTTP server to serve up the site files on my local computer,using Python.

2. With my local server running, I visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

3. I then explored the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.

4. I wrote codes to implement the updates to get the site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

The project uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). So I replaced `<my MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/).

### Note about ES6

Most of the code in the project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, I tried to maintain the use of ES6 in any additional JavaScript I wrote.

### How to run this application.
1. If you are running the app locally,you could clone or download the project.

2. Then, set up a localhost in your computer.

3. CD to the clone project and lunch your webpage in the terminal.


