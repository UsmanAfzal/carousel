# Carousel Exercise
An exercise to build a carousel using the pixabay API.


### Contents
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Running the application](#running-the-application)
- [Running tests](#running-tests)

## Requirements
This application requires the following:
* [Node][node]

## Getting Started
Clone the repository:
```bash
git clone https://github.com/usmanafzal/carousel-exercise.git
cd carousel-exercise
```
### Running the application
To run the application locally, run:
```bash
npm install
npm start
```
or if you prefer using GNU Make:
 ```bash
 make install
 make serve
 ```
### Watch files
To watch files when changes are made, in a seperate terminal tab or window run:
```bash
npm run watch
```
or
 ```bash
 make watch
 ```

### Running tests
* [Lighthouse][Lighthouse] Audit tool for accessibility, SEO, best practise and performance testing.
To run [Lighthouse][Lighthouse]:
```bash
npm test
```
or
```bash
make lighthouse
```

[node]:														https://nodejs.org/en/
[jest]:           		  					https://github.com/facebook/jest
[lighthouse]:                     https://github.com/GoogleChrome/lighthouse#readme