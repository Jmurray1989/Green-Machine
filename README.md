# Green-Machine

<hr>

### Code Institute / Interactive Frontend Development Milestone Project

Tasked to create a website combining knowledge from the Javascript Fundamentals & the Interactive Frontend Development modules on the Code Institute course.

## Introducing you to
<p align="center">
  <img width="350" height="350" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/e-scooterlogo1.png">
</p>

#### The Idea:

The latest craze around town is electric scooters. Everywhere you now look in any major city across the world you will see electric scooters as they are a great alternative to other modes of transport. 

1. Portability. Rivalled only by folding bikes, electric scooters are perhaps the most portable mode of powered personal transport.
2. Noise pollution. Travelling around a city and silence never go hand-in-hand
3. Eco-friendly.
4. Safety.

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

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/mock-up-devices.jpg">

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

This process took a long time during the wireframe stage. In the end i decided on this color scheme as it is very eco friendly in appearance and gives the webpage plenty of

Two primary conflicting colors were chosen when creating this project:

- ![#35b729](https://placehold.it/15/35b729/000000?text=+) `#35b729` 
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` 

Both colours are featured across the site. On the homepage they are used to create a subtle gradient effect and also a glow in the sign-up modal. In areas were the contrast of a green background and black fonts were used we gave icons a hover effect of #ffffff(White). Also in areas were #ffffff was used mainly as the background we gave the hover effect of the darker color #000000(Black) to show the user that these elements are interact-able and something can happen when clicked on.

A third color was used to give definiton were it was needed. (on icons etc)

- ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000`

### Wireframes:

To build my wireframes i used [Balsamiq](https://balsamiq.com/).

All wireframes created for this project can be found [Here](https://github.com/Jmurray1989/Green-Machine/tree/master/assets/wireframes).

Each element was structurally planned out at this stage and even during the physical build of the application there was not much deviation from the original planning. Each page was rendered as a wireframe in all viewport sizes to show the difference between them and to show how the elements would react to differing viewport sizes. 

Examples below:-

* Desktop

<img height="300" width="300" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/wireframes/large-view/Desktop-Home.png">

* Mobile

<img height="300" width="300" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/wireframes/mobile/Mobile-Home.png">

## Features

<hr>

* This is a summary of the features i have put in place on my project but also the features i hope to add in the future.

* All pages on the website follow the same principle with a fixed navbar, main image, a header, a footer divider with links to all of our social media platforms and a footer which has many quick links to other parts of the site and it also contains a contact us form with a map of were the store is located.

<strong>The project has several key features:</strong>

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

### Auto Scroll

* On click of each nav link an auto scroll initiates and brings the user to the required destination across all pages.

### Buttons

###### Sign Up

* On the homescreen and across all pages i use a sign up button which is linked to a modal which allows the user to sign up to The Green-Machine newsletter.

<p align="center">
  <img width="175" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/sign-up.png">
</p>

###### Find Out More

* In the shop section of the website i have a find out more button which when pressed slides down to reveal more specifications in relation to the scooter the user is browsing.

<p align="center">
  <img width="175" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/find-out.png">
</p>

###### Lets Skoot!

* When the user clicks on this button of their desired route it will bring them to google maps which will show them the route they can take on their scooter around dublin landmarks and sites.

<p align="center">
  <img width="175" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/skoot-button.png">
</p>

###### Scooter Selector

* In the test drive page of the website the user can select which scooter they would like to test drive.

<p align="center">
  <img width="175" height="50" src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/selector-button.png">
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

### Removed Features

Two features I decided to remove from the finished project that i implemented early on where the arrow up floating button and the footer link scroll up feature that on click brought you back to the top of the page and to the users desired location due to the fact there was to much bouncing around the webpage and it didnt offer a great user experience.

### Future Plans

- Using the "Add to Cart" buttons I would like to add the feature of adding scooters to a shopping cart and checkout so that purchases can be made.

- To take the skoot route idea and implement it so that people will be able to create their own routes and add them to a new section of the site or on the mobile app.

- Create a database for the newsletter sign ups the site receives, to keep people up to date with all thats new with Green-Machine.

- In the sign up newsletter modal, I would like to have the social icons fully functioning so that the user could sign up to the newsletter by signing up through their social media platforms.

- To add customer reviews of our scooters.


## Technologies Used:

<hr>

The Technologies I used to build this project are as follows,

[HTML5](https://en.wikipedia.org/wiki/HTML5)

* Buiding the foundation of my project.

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

* For custom styling of my project.

[Javascript](https://www.javascript.com/)

* To implement features and user input for the website.

[JQuery](https://jquery.com/)

* The project uses JQuery to simplify DOM manipulation.

[Bootstrap 4](https://getbootstrap.com/)

* The framework i used to achieve the album card layout, my navbar, gallery section & contact form.

[Font Awesome 5](https://fontawesome.com/)

* Used for all icons within the footer and buttons.

[Google Fonts](https://fonts.google.com/)

* Used for the typography of the project.

[Google Maps API](https://cloud.google.com/maps-platform/)

* Used to display my map & add a marker

[EmailJS](https://www.emailjs.com/)

* Used to send an auto-reply mail on user sign up to newsletter

[GitHub](https://github.com/)

* Used to store & manage my code.

[GitPod](https://www.gitpod.io/)

* My IDE of choice to develop my project.
    
### Tools Used:

[Tinypng](https://tinypng.com/) 

* Used to compress images without affecting image quality and to achieve faster image load times.

[Balsamiq](https://balsamiq.com/)

* Used for the creation of my pre-build wireframes showing the main elements and differences in size of same through small to large screen sizes.

[Favicon Generator](https://www.favicon-generator.org/)

* Used to create favicon from custom Logo I created for the project.

[Adobe Color Wheel](https://color.adobe.com/create)

* Helped achieve color scheme.

[W3C Mark-up Validation](https://validator.w3.org/) and [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) 

* where used to check the validity of the project's code. 

[JSHint](https://jshint.com/)

* Using JSHint to validate the project's Javascript

[Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html)

* Used to crop, re-size, editing and creation of images.


## Testing

<hr>

The website has been tested across multiple browsers and on mobile devices to ensure compatibility and responsiveness of the site. Continuous testing for this application was carried out throughout the entire lifetime of the build. This was achieved through Chrome Devtools and it was used constantly to test on as many devices as possible from Android to Apple phones & tablet dimensions, and also larger device sizes. The website was tested constantly throughout the build at home using devices i had on hand such as a Samsung Galaxy S10 & S8, a Xiaomi Redmi Pro 8 and for the tablet size i used an Amazon Fire HD 8.

### Desktop

- Chrome
- Mozilla Firefox
- Microsoft Edge
- IE
- Opera

### Mobile Devices

- Xiaomi Redmi Pro 8
- Galaxy S10, S8
- iPad + iPad Pro (using Chrome devtools)
- Amazon Fire Hd 8

I used JSHint to validate the project's Javascript file which i configured to accept jQuery & ES6 New JS features, It returned with 14 warnings of which I fixed. Mainly it was missing semicolons and having some in the incorrect places.

I used [W3C Mark-up Validation](https://validator.w3.org/) and [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) to validate my html and css code. On running my HTML code throught the validator it returned a few errors which are all now fixed. 

### Known Issues

I came across four issues. The four issues appeared within the IE and Microsoft Edge browsers.

#### 1. The hero image text overlay has an issue where the underline is not the color - ![#35b729](https://placehold.it/15/35b729/000000?text=+) `#35b729` it sets to the default white.

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/issue2.jpg">

#### 2. In the shop section, On click of the 'Find Out More' button the specifications appear in a toggle method. Only in IE & EDGE does a slight jump back of the text occur.

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/issue3.jpg">
<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/issue1.jpg"> 

#### 3. In the Shop Section there is no underline shown under specifications.

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/issue5.jpg">

#### 4. In the Test-Drive section my scooter selector dropdown is on the left of the screen.

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/issue 4.jpg">

I have found none of these issues with any of the other browsers i tested.

As Safari is no longer developed for Windows I used a site known as [LambdaTest](https://www.lambdatest.com/) to run my code in a live view for mac and safari software. It returned a few errors however as this is not official software i cannot be sure the results given are accurate. When I tested my project through chrome and other browsers on this site it showed me errors which i do not have on these browsers when ran locally.

#### Issues i found were on mobile devices and the background images not displaying correctly please see examples below:

<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/lambdatest1.jpg">
<img src="https://github.com/Jmurray1989/Green-Machine/blob/master/assets/readme-images/lamdatest2.jpg">


### User Story Testing

1. As a user I want to easily navigate the site across all pages.

- This is possible due to the navbar and also the quick links featured within the footer at the bottom of the page. The site also features an auto scroll on certain links within parts of the page so the user does not have to scroll.

2. As a user I want to see what different scooter models are available.

- All this information is available in our shop section of the website.

3. As a user I want to be able to check the specifications of each model so i can compare and decide on what one i would like to purchase or take for a test drive.

- There is a 'Find Out More' button in our shop section which will reveal a specification list when clicked on.

4. As a user i want to be able to contact the shop to answer any queries i may have.

- This can be done by contacting by contacting the store by phone, email or post. All information of the store is given in the footer.

5. As a user I want to sign-up to a newsletter so i can be kept up to date with the latest models or special offers.

- Located in the navbar is a 'Sign-Up' button which will allow the user to subscribe to our newsletter and they will receive a notification email on receipt of their request.

## Deployment

<hr>

My project was developed using GitHub IDE, committed to git and pushed to GitHub. The following steps where taken to deploy my project.

1. Logged into GitHub.
2. Selected repository from the GitHub dashboard.
3. Selected Settings at the top of the chosen repository.
4. Scrolled down to GitHub Pages section.
5. Under Source I clicked the drop-down menu and selected master branch.

Website is now deployed and is available here:

* https://jmurray1989.github.io/Green-Machine/index.html

My repository can be found here:

* https://github.com/Jmurray1989/Green-Machine

To clone the website:

1. Select the Repository from the Github Dashboard.
2. Click on the "Clone or download" dropdown button which is located beside the Gitpod button to the right.
3. Click on the "clipboard icon" to the right to copy the web URL.
4. Open your preferred Integrated Development Environment (IDE) and navigate to the terminal window.
5. Change the directory to where you want to clone the repository too.
6. Paste the Git URL copied from above and click "Ok". .

## Credits

<hr>

### Content

- The modal & the footer divider used was sourced from this [Site](https://mdbootstrap.com/).

- The Skoot Route Idea was based on the design from this site [Here](https://skoot.ie/pages/dublin-skoot-routes). 

- Some of the site design aspects where taken from this [Site](https://www.seat.ie/company/urban-mobility/exs-kickscooter.html). I also used some of the text for my scooter design section.

- The auto scroll feature across my navlinks on my webpages is credited to [LearnDesign](https://www.youtube.com/channel/UCWCcoBXOXpNMg0p8Qrn2l0g) and their tutorial on Youtube.

- My dropdown selector in the Test-Drive section and its JS code is based from [Stackoverflow](https://stackoverflow.com/questions/39176416/change-image-and-text-with-dropdown) and was adapted to work on my site.

- [W3Schools](https://www.w3schools.com/html/html5_geolocation.asp) Was also used to assist myself in the setting up of the search location feature within the Test-Drive page.

- The use of the Google Maps API and EmailJS and how to deploy them were assisted by the course content from the Code Institute Course.

### Code

For assistance i have used the following sites:-

* [Stack Overflow](https://stackoverflow.com/)
* [CSS Tricks](https://css-tricks.com/)
* [W3Schools](https://www.w3schools.com/)

### Media

- The photos used in this site were obtained from google images searches. As it is for educational purpose and not for profit i was made aware that it may not be neccessary to ask for permission.

### Acknowledgements

- I would like to thank those in Slack, the Tutor Support and my Mentor Gerard McBride for assisting with me with any queries i had during this project. You and all the advice have really helped me during the course of this build.

Disclaimer: This project and its content were created for educational purposes only as part of the Code Institute Course for Milestone 2 Grading.
