# 11ty Starter

Starter kit repository for a web site using the [Eleventy](https://www.11ty.io/) static site generator that uses [Netlify](https://www.netlify.com/) for deployment and serverless functionality along with [NetlifyCMS](https://www.netlifycms.org/) baked in.

## Local development

1. Clone a clean copy of the repository without its history.

   ```sh
    git clone --depth 1 https://github.com/babycourageous/11ty-starter.git PROJECT_NAME
   ```

2. CD into the site then remove the existing git info and create a new repository.

   ```sh
    cd PROJECT_NAME

    rm -rf .git && git init
   ```

3. Install dependencies.

   ```sh
   yarn
   ```

4. Start the development server. This will serve the site with all its assets using browsersync. The development server is set up to proxy Netlify functions served with netlify-lambda.

   ```sh
   yarn start
   ```

## Structure

- Pages, content, and site assets live in src where they will be compiled by 11ty.
- Any data files placed in src/\_data will be available to all pages inside src
- css, javascript, images, and svg live in their own folders in src/\_assets/ where they will be processed by npm scripts and thoughtfully placed into the \_site folder.
- Built output lives in \_site

## Resources

[Eleventy Base Blog Starter](https://github.com/11ty/eleventy-base-blog)
[Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)
[Netlify Lambda](https://github.com/netlify/netlify-lambda)
