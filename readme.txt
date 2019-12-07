1. config/dev.js file was added in git ignore file and heroku gave me error "cannot find module './dev'", solution: in .gitignore instead of writing dev.js I wrote /dev.js and it worked. Useful links:  https://devcenter.heroku.com/articles/troubleshooting-node-deploys#ensure-you-aren-t-relying-on-untracked-dependencies

https://help.heroku.com/TO64O3OG/cannot-find-module-in-node-js-at-runtime
UPDATE: not sure if it was a problem. The problem was - in config/keys.js instead of process.env.NODE_ENV i wrote process.NODE_ENV
2. create-react-app environmental variables - https://create-react-app.dev/docs/adding-custom-environment-variables/