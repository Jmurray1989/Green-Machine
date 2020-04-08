# Green-Machine

<hr>

### Code Institute / Interactive Frontend Development Milestone Project

Tasked to create a website combining knowledge from the Javascript Fundamentals & the Interactive Frontend Development modules on the Code Institute course.

## Introducing you to
<p align="center">
  <img width="350" height="350" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/e-scooterlogo1.png">
</p>

#### The Idea:

The latest craze around town is electric scooters. Everywhere you now look in any major city across the world you will see electric scooters as they are a great alternative to a bike as you can easily fold them down to carry them on public transport if needed. 
So this gave me the idea to build a mock up website for a scooter shop based in Dublin, Ireland.
I built this website using all the content we learned on the course and more using features like the Google Maps API, EmailJS & Javascript features.

#### The goal of this website is to:

Promote the shop by having a feature packed and user friendly website that will be fully responsive across all devices. To allow customers to experience a scooter by taking one of our models for a test drive before they buy.

## User Experience

<hr>

### User Stories:

1. As a user I want to easily navigate the site across all pages.
2. As a user I want to see what different scooter models are available.
3. As a user I want to be able to check the specifications of each model so i can compare and decide on what one i would like to purchase or take for a test drive.
4. As a user i want to be able to contact the shop to answer any queries i may have.
5. As a user I want to sign-up to a newsletter so i can be kept up to date with the latest models or special offers.

## Design

<hr>

The project utilises the [Bootstrap 4](https:/getbootstrap.com/) framework to ensure Mobile first fully responsive design. When considering the design elements for this project, an eco-friendly/modern color scheme is what came to mind first.

### Font:

The project has a main font of 'Orbitron' which was imported via css from Google Fonts, with the backup font being set to a default of 'Sans-serif'. The Robotic feel gave the website a modern look but also making each character very easy to read for the user.

### Logo:

The Logo itself was custom designed by me using a site called [Canva](https://www.canva.com/). Canva supplies you with a basic template which you can then use an image overlay to get the desired logo. My Logo can be seen in the navbar of my site and is used as 'Home' button across all pages. 

<p align="center">
  <img width="150" height="100" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/images/escooterlogo.png">
</p>

##### As seen here:

<p align="center">
<img width="750" height="250" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/navbar.jpg">
</p>

### Color Scheme:

To help me choose my color scheme i used [Adobe Color Wheel](https://color.adobe.com/create).

Two primary conflicting colors were chosen when creating this project:

- ![#35b729](https://placehold.it/15/35b729/000000?text=+) `#35b729` 
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` 

Both colours are featured across the site. On the homepage they are used to create a subtle gradient effect and also a glow in the sign-up modal.

A third color was used to give definiton were it was needed. (on icons etc)

- ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000`

### Wireframes:

To build my wireframes i used [Balsamiq](https://balsamiq.com/).

All wireframes created for this project can be found [Here](https://github.com/Jmurray1989/).

Each element was structurally planned out at this stage and even during the physical build of the application there was not much deviation from the original planning.

Examples below:-

* Desktop

![Desktop-Home](https://github.com/Jmurray1989/)

* Tablet

![Tablet-Home](https://github.com/Jmurray1989/)

* Mobile

![Mobile-Home](https://github.com/Jmurray1989/)

## Features

* This is a summary of the features i have put in place on my project but also the features i hope to add in the future.

* All pages on the website follow the same principle with a fixed navbar, main image, a header, a footer divider with links to all of our social media platforms and a footer which has many quick links to other parts of the site and it also contains a contact us form with a map of were the store is located.


### Navbar

The navbar is featured on all pages and is used to navigate the site.

 The navbar links are on the right side of the navbar. I have 7 links in total:-
- Home
- Download <strong>(by clicking download an auto scroll function will occur to bring you to the desired location)</strong>
- Design <strong>(by clicking design an auto scroll function will occur to bring you to the desired location)</strong>
- Shop
- Skoot Route
- Test Drive
- Sign Up (which is linked to a modal)

Intuitive navigation fixed to the top of the the page that resizes for mobile devices with the hamburger icon. When pressed it expands to show the other navigable pages. On desktop i have used a hover function that will show the user which navpage they are highlighting and a class of active that will indentify to the user the current page they are on.

### Parallax Images

* On the homescreen i have 4 images that use this feature. Each image is used to emphasize the section you are scrolling through.

### Buttons

###### Sign Up

* On the homescreen and across all pages i use a sign up button which is linked to a modal which allows the user to sign up to The Green-Machine newsletter.

<p align="left">
  <img width="200" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/sign-up.png">
</p>

###### Arrow

* The site also features an arrow button which instead of the user needing to scroll to the top of the webpage by clicking this it returns them there. It is initially activated and will display once the user starts to scroll down the page.
<p align="left">
  <img width="400" height="200" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/arrow-button.png">
</p>

###### Find Out More

* In the shop section of the website i have a find out more button which when pressed slides down to reveal more specifications in relation to the scooter the user is browsing.

<p align="left">
  <img width="200" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/find-out.png">
</p>

###### Lets Skoot!

* When the user clicks on this button of their desired route it will bring them to google maps which will show them the route they can take on their scooter around dublin landmarks and sites.

<p align="left">
  <img width="200" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/skoot-button.png">
</p>

###### Scooter Selector

* In the test drive page of the website the user can select which scooter they would like to test drive.

<p align="left">
  <img width="200" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/selector-button.png">
</p>

### Location

* The Geo location of the user is requested on the test drive page and it returns the user with the information of their nearest store.

### Map

* Across all pages in the footer i have an interactive map which shows the stores location by way of a marker.

### Footer

* The footer has a divider and is featured on all pages and contains clickable icons that will take you to each of our social media platforms.

1. [Facebook](https://www.facebook.com/)
2. [Twitter](https://twitter.com/)
3. [Instagram](https://www.instagram.com/)
4. [Youtube](https://www.youtube.com/)

### Future Plans




## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
