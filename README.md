# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshots

![Home-Desktop](./screenshots/screenshot_desktop_home.png)
![Home-Mobile](./screenshots/screenshot_mobile_home.png)
![Home-Tablet](./screenshots/screenshot_tablet_home.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/responsive-website-using-react-and-tailwind-css-H1JV76T49)
- Live Site URL: [Live Site](https://designo-multipage-website-virid.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS Grid
- Typescript
- [Yarn](https://yarnpkg.com/) - Package manager
- [React](https://reactjs.org/) - JS library
- [Create React app](https://create-react-app.dev/) - Tool to set up the development environment for React
- [React Router v6](https://reactrouter.com) - Routing library for React
- [tailwindcss](https://tailwindcss.com/) - CSS framwework
- [Leaflet](https://leafletjs.com/) - Library for interactive maps
- [React Leaflet](https://react-leaflet.js.org/) - Library for use of leaflet with React components
- [Storybook](https://storybook.js.org/) - For building UI components in isolation

### What I learned

- Using tailwindcss for the first time, I found out it's a wonderful CSS framework that uses an approach that covers almost any possible case for styling with CSS but at the same time giving you a lot of flexibility.

- I also had the chance of trying React Router v6, not extensively though, but I got an overview of the new approach of the library.

- I also learned about how to solve issues in Storybook when using UI components that implements functionality based in Reac Router, ie: useNavigate hook. The solution: adding a decorator on ./storybook/preview.js that will affect to all the stories.

```
import { MemoryRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];

```

So now MemoryRouter wraps all the stories and it will solve the errors related with using React Router components outside the Routes component.
It's the same principle as with the library [storybook-react-router](https://www.npmjs.com/package/storybook-react-router)

- I had the pleasure of using leaflet for the first time too, it's a library that I will try again for sure in future projects.

Also for avoiding errors when displaying components on Storybook, it was necessary to add leaflet's CSS link on .storybook/preview-head.html

### Continued development

Since it's the first time I got the chance to use tailwindcss I am sure that my solution is not optimal so I probably would review my implementation in the future.

### Useful resources

- [React Leaflet example](https://www.youtube.com/watch?v=62Y8SFi2wBk) - This short video helped me a lot with the implementation of the bonus challenge.
- [Tailwindcss Documentation](https://tailwindcss.com/docs/) - The documentation is sufficient and clear to be able to start working with the CSS framework. Of course there are some edge cases that may appear along the way that requires to search in forums.

## Author

- Website - [Gustavo Meza De Lama](https://www.linkedin.com/in/gmezadelama/)
- Frontend Mentor - [@gmezadelama](https://www.frontendmentor.io/profile/gmezadelama)
- Github - [@gmezadelama](https://github.com/gmezadelama)
- Twitter - [@gus4281](https://www.twitter.com/gus4281)

## Acknowledgments

I would like to thank to frontendmentor.io for these challenges that help us to learn new skills, improve our already learned skills and build our dev portfolios.
