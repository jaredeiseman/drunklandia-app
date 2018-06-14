# Drunklandia
This repository houses the progressive web app for Drunklandia, an app for community sourced information regarding happy hours around town.

To run it locally, please follow the instructions for setting up an Ionic development environment from <a href="http://ionicframework.com">Ionic's website</a>.

Next, clone the repository and add a file named 'api-keys.ts' to the src/ directory, exporting your Google Maps API key.

You will also need to run "npm install".

You will also need to install, and have running the Django Rest Framework backend for this project, you can find it <a href="https://github.com/jaredeiseman/drunklandia-api">here</a>.

Once the previous steps are complete, you can run the app in a browser via "ionic serve" from your terminal, or "ionic cordova run" and choose iOS for your emulation target for a virtual phone environment.
