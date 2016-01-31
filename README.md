## Overview
This may be a simple website, but a lot of thought was put into it's design.
There are three main goals I have for this site:

- **Maintainability**: It should be easy to maintain and update project posts. Deployments should be a breeze.
- **Performance**: It should load as fast as possible even on poor internet connections.
- **Accessibility**: It should be provide quick access to important information and be accessible to as many users as possible regardless of device choice. Users with disabilities should also be able to use the site acceptably.

#### Jekyll
Jekyll is the primary framework used for this site.
It's purpose is to generate static HTML files so that posts can be written using markdown.
Posts are easier to maintain when written in markdown since it is less verbose and encourages consistent formatting.

#### Cloudflare CDN
In order to improve performance, a CDN is used to distribute the static assets.
During deployment, Grunt bundles and revisions the JS/CSS assets with a hash.
This allows Cloudflare to cache these assets with a very long expiration date so that they will typically be served from Cloudflare rather than the origin servers at GitHub Pages.
Hopefully one of Cloudflare's edge nodes is close enough to you so that you get super fast loading times.

#### Accessibility
The site hook's on to bootstrap's media queries and displays a layout that is sensible depending on your device size.
Most of the site can be accessed without JavaScript enabled.
Tabbing works sensibly.
The site has not yet been tested on screen readers such as VoiceOver or JAWS.

#### Setting a Development Environment
Get the Source:
`git clone https://github.com/osidenate/websocks.git`

Install ruby dependencies:
`gem install jekyll`

Install the npm dependencies:
`npm install`

Install the bower dependencies:
`bower install`

Start the webserver:
`grunt serve`

The site should be running at **http://localhost:4000**.

#### Deployment
The site can be deployed immediately to GitHub pages: `grunt deploy`
 
