# TNG Linkpost Bookmarklet

> TNG linkpost bookmarklet and kirbyplugin.

![Screenshot](https://raw.github.com/thenittygritty/linkpost-bookmarklet/master/screenshot.png)

This bookmarklet and kirbyplugin was built to create linkposts on [thenittygritty.co](http://thenittygritty.co) but you can easily adapt it to use it on your own Kirby blog.

## Setup
For now there is no authentication provided. The kirbyplugin only works if your site has a [`.dev` or `.local` domain](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/site/plugins/linkpost.php#L10-14) so you can use the bookmarklet only in combination with your locally hosted Kirby installation.

### 1. Custom Link Post Type
First you need to set up a custom post type for linkposts as described in [this article](http://getkirby.com/blog/custom-post-types).

### 2. Install The Kirbyplugin
Copy the `linkpost.php` provided in this repo in `site/plugins` to `site/plugins/linkpost.php` in your Kirby installation.
 
### 3. Configure The Kirbyplugin
Set the correct path to the directory holding the blog content [in the Kirbyplugin on line 19](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/site/plugins/linkpost.php#L19), i.e. `content/blog`.

### 4. The Linkpost Script
Copy the linkpost.min.js script into `assets/js/bookmarklet` in your local Kirby installation.

### 5. Configure Your Bookmarklet
Set the author shortname [on line 19](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/assets/js/bookmarklet/bookmarklet.js#L19). 

Set your local domain name [on line 21](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/assets/js/bookmarklet/bookmarklet.js#L21).

Set the path to your linkpost.js script [on line 23](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/assets/js/bookmarklet/bookmarklet.js#L21).

### 6. Minify Your Bookmarklet
Run `npm install` and then `grunt` to get a fresh minified version of your configured bookmarklet.

### 7. Install The Bookmarklet
Create a bookmark and copy the minified bookmarklet into the URL input field. Don't forget to prefix it with `javascript:`.

### 8. Done
Happy linkposting!







