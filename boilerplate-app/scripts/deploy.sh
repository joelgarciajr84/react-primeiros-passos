#limpa a ultima versao
rm -rf __deployme
mkdir __deployme

#construcao
sh scripts/build.sh

#minificacao de JS
uglifyjs  bundle.js -o __deployme/bundle.js

#minificacao de css
cssshrink bundle.css > __deployme/bundle.css

#copia de html e imagens

cp index.html __deployme/index.html
cp -r images/ __deployme/images

#pronto
date; echo;
