const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
    const files = [
        './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/es2015-polyfills.js',
        './dist/angular-web-component/scripts.js',
        './dist/angular-web-component/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/news-widget.js');
}

build();

