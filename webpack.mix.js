const mix = require('laravel-mix');

mix.react('resources/js/app.js', 'public/js')
    .extract(['react', 'axios'])
    .sass('resources/sass/app.scss', 'public/css');
