1. config/dev.js file was added in git ignore file and heroku gave me error "cannot find module './dev'", solution: in .gitignore instead of writing dev.js I wrote /dev.js and it worked. Useful links:  https://devcenter.heroku.com/articles/troubleshooting-node-deploys#ensure-you-aren-t-relying-on-untracked-dependencies

https://help.heroku.com/TO64O3OG/cannot-find-module-in-node-js-at-runtime

2. 