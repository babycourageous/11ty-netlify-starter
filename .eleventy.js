const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

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
