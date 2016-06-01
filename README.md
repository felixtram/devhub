# DevHubStyle
SCSS styling for the dev hub portal using foundation
---

##First you need to bump up your dependencies swag, so do this:
To use the Foundation based SCSS files you will need to have the following installed globally:
- [NPM (and of course NodeJS) for all basic dependencies](https://nodejs.org/en/)
 `sudo npm install npm -g`
- [Bower - for all your package managment needs](http://bower.io/)
- `npm install -g bower`
- [SASS for the SCSS](https://www.npmjs.com/package/node-sass)
- `npm install -g node-sass`
- [Foundation Command Line Interface](http://foundation.zurb.com/sites/docs/installation.html) This should handle
-`npm install --global foundation-cli`
It wouldn't hurt to install Gulp too`npm install --global gulp-cli` but it will auto install for the project with the Foundation CLI so you really don't need to unless you want to have the Gulp global swag at your disposal.    

##NOW YOU HAVE THE POWERZ!!!! Next, Within the DevHubStyle source folder:
Since the project is built, all you have to do is install your local dependencies so the Foundation unicorn magic can happen
- [Also, here's the GitHub reference to the Foundation CLI-ness](https://github.com/zurb/foundation-cli)
- `cd projectname`
`npm install`
`bower install`
- Now you can start working on the SASS-y goodness after doing this:
- `foundation watch`
- Your SCSS will no compile to whereever you want, we have went ahead and created paths to the MAMP theme CSS directory (for both MAC and WIN) for ease. You can change this in the `gulpfile.js` found in the root directory. YASS!
- If you have an issues you can list commands with `foundation help` or hit up April or Asterisk to drop knowledge upon your head.
