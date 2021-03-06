module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('site/css')
    eleventyConfig.addPassthroughCopy('site/images')
    eleventyConfig.addPassthroughCopy('site/scripts')

    eleventyConfig.addNunjucksShortcode("currentYear", function() {
        let currentDate = new Date()

        return currentDate.getFullYear().toString()
    });

    return {
        dir: { input: 'site', output: 'dist', includes: '_includes' },
    }
}
