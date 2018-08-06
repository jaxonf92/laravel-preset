let mix = require('laravel-mix')
require('laravel-mix-purgecss')
require('laravel-mix-tailwind')

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')
    .options({
        postCss: [
            require('postcss-import')(),
            require('postcss-nesting')(),
        ]
    })
    .tailwind()
    .purgeCss()
    .version()

