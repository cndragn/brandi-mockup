# Brandi - PSD to HTML/React

Demo: http://brandi-react.surge.sh/

PSD Mockup: [Brandi One Page PSD Template](https://i2.wp.com/kreativeshowcase.com/wp-content/uploads/2014/03/01_Bandi_LandingPage_PSD_Template1_by_Kreativeshowcase.jpg)

CI/CD Build: https://travis-ci.org/cndragn/brandi-mockup

## Description

Developing a PSD into a fully featured React website

## Technologies Used

ReactJS, Bootstrap, Sass, Travis-CI, Jest, Enzyme\
CI/CD w Integrated testing & automatic deployment

## Run locally

* Clone brandi repo and cd into it
    * terminal: `npm start`
* To process Sass
    * in seperate terminal: `npm run sass`

## Sass processor set up

* terminal: `gem install sass`
* In `package.json`'s scripts, add this line: `"sass" : "sass --watch src/styles/scss:src/styles/css"`
* Create your custom bootstrap theme file `src/styles/scss/custom.scss`
* Open a new tab in terminal: `npm run sass`
* In src/index.js replace `import 'bootstrap/dist/css/bootstrap.css';` with `import './styles/css/custom.css';`
* At bottom of custom.scss file add `@import "../../../node_modules/bootstrap/scss/bootstrap";`

### Manual deployment

*Deploy to Surge*

* Update api in IdeaForm.js and IdeasContainer.js from localhost:3001
* terminal: `npm run build`
* terminal: `surge`
* Log in or create account at prompt
* Add `build` at end of project path
* Change project url if desired, ending with surge.sh

*Update project on Surge*

* terminal: `npm run build`
* terminal: `surge`
* Log in at prompt
* Add `build` at end of project path
* Change project url to project being updated

### Attributions
Design: [kreativeshowecase.com Brandi One Page PSD Template](http://kreativeshowcase.com/2014/03/freebie-brandi-creative-one-page-multi-purpose-psd-template/)\
Header background: [pixabay 1990470](https://pixabay.com/en/filter-square-instagram-texture-1990470/)
Team Photos: [pixabay](https://pixabay.com) & [pexals](http://pexals.com)