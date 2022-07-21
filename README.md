# Notebook App

For this project I decided to use [ReactJS](https://reactjs.org/) version 18.2.0 with Typescript. A Component architecture and for styling, CSS Modules with Sass.

## Offline Mode

- User inputs will persist in the browser thanks to the ```LocalStorage API``` provided by the browser.
- The Project can be run as a Progressive Web Apps(PWA). Offline mode is supported.

## How to use Notebook App

This is the main page of the application.

> ![image](https://user-images.githubusercontent.com/30419456/180275348-2ab57582-d62c-4b25-904e-c2ca1713737b.png)

Create a new entry by clicking on the ```Add a new entry``` button.

An edit view will appear on screen. You can start editing the ```title``` and the ```description``` of the new entry. Also, you will see relevant information about the new entry.
![image](https://user-images.githubusercontent.com/30419456/180275878-88e4e8c9-9ef7-4fc7-8713-708b1b8a09ea.png)

In ```Frequency and Similar Words``` section, we can check the frequency of a request word in our entry. Also Similar words will be displayed on screen. 
![image](https://user-images.githubusercontent.com/30419456/180276656-56b919ae-96ed-466c-9e91-4a4943357dff.png)

## Next Steps

New features to implement in the future:
- Authentication: App can be used with multiple users and note does not mix up.
- Advance search system: Can search for frequency in multiple notes.
- Tags on each note.
- Connection  with a DB.
- Richtext: Being able to add not only text, but images, tables, videos, audio.
- Integration testing with Cypress.

## Node Version

Using `v16.15.0`

## Development mode

Clone the repository and install dependencies
```bash
npm install
```

Runs the app in the development mode.
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)


## Production mode
Ceates a `build` directory with a production build of your app.
```bash
npm run build
```

## Live version
This project is hosted in Netlify.
You can see a live version of Notebook App [Here](https://aquamarine-starlight-7884fc.netlify.app/)