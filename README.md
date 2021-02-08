# live-resume-template
Presentation/resume responsive design page to be published to GitHub Pages (or any other server), bundled up via webpack.
The main template design is derived from [sharu725/online-cv repo](https://github.com/sharu725/online-cv).
It yet comprises a print friendly page that can be used as proper paper resume, with information displayed straightforward for better reading.
### Prerequisites
- You have to have [NodeJS](https://nodejs.org/) installed in order to compile the template
### Files
    .
    ├── src                     # source files
    │   ├── data.js             # your resume data goes here
    │   ├── favicon.ico         # your live template icon goes here
    │   ├── picture.jpg         # your profile photo goes here
    │   ├── index.js            ## webpack dependencies for live template
    │   ├── print.js            ## webpack dependencies for print template
    │   ├── boilerplate.js      ## webpack common dependencies for both templates
    │   ├── boilerplate.scss    ## common style code for both templates
    │   ├── print.scss          ## style code of the print template
    │   └── style.scss          ## style code of the live template
    ├── index.html              ## live template file
    └── print.html              ## print friendly template file
### Configuration
- Fork the repository (fork to yourgithubusername.github.io if you intend to publish on [GitHub Pages](https://pages.github.com/))
- Edit the file `/src/data.js`, changing the example entries with your personal data.
- Replace the file `/src/picture.jpg` for your actual profile picture *(142 x 142 recommended)*.
- Replace the file `/src/favicon.ico` for your preferred ico *(you can use [favicon-generator](https://favicon.io/favicon-generator/))*.
- Open your command prompt in the project root folder and type `npm run build` to compile the template to the `/dist` folder.
- Deploy the content of the `/dist` folder to your server.
### GitHub Pages deployment
- Make sure the repository you are working on is in conform with [GitHub Pages](https://pages.github.com/) pattern.
- Commit and push all the alteration to the repository. Make sure you committed the `/dist` folder as well.
- Create a subtree of your `/dist` folder by opening you git bash and typing `git subtree push --prefix dist origin gh-pages`. It will push only the `/dist` folder content that will be published to a separated area.
- Follow the instructions [here](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) to make GitHub Pages point to gh-pages subtree and load the page files from there.
- Open yourgithubusername.github.io and voilà!
### Troubleshooting
- You can add or remove entries on the `data.js` file, but be aware that if the integrity of the file is compromised, that template will not compile, and an error will be thrown on the command prompt when running npm run build
### Customizing
- The template engine uses [lodash template function](https://lodash.com/docs/4.17.15#template) to interpolate data from `/src/data.js`.
If you'd like to customize how your data is displayed, you can alter the data file structure and rewrite the code on `/index.html` and `/print.html` to get the new data.
- You can modify the styling of the documents by modifying the `.scss` files on the source folder
### Demo
- I've created this resume template builder to serve my own CV. You can check it out at [iangoop.github.io](https://iangoop.github.io/)

