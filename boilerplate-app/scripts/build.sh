#transformacao de js
babel --presets react,es2015 js/source -d js/build

#empacontamento de js
browserify js/build/app.js -o bundle.js

#empacontamento de css
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css

#pronto
date; echo
