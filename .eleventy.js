const pluginRss = require("@11ty/eleventy-plugin-rss");
const dateFormat = require('./11ty/filters/date')

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  // Add a friendly date filter to nunjucks.
  // Defaults to format of LLL d, y unless an alternate is passed as a parameter.
  // {{ date | dateDisplay('OPTIONAL FORMAT STRING') }}
  eleventyConfig.addFilter('dateDisplay', dateFormat)
  eleventyConfig.addFilter('htmlDateString', dateObject => dateFormat(dateObject, 'yyyy-LL-dd'))


  // Unsorted items (in whatever order they were added)
  eleventyConfig.addCollection("all", function(collection) {
    return collection.getAll();
  });

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
  }
}
