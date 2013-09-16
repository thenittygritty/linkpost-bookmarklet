# TNG Linkpost Bookmarklet

> TNG linkpost bookmarklet and kirbyplugin.

![Screenshot](https://raw.github.com/thenittygritty/linkpost-bookmarklet/master/screenshot.png)

This bookmarklet and kirbyplugin was built to create linkposts on [thenittygritty.co](http://thenittygritty.co) but you can easily adapt it to use it on your own Kirby blog.

## Setup

### 1. Custom Link Post Type
First you need to set up a custom post type for linkposts as described in [this article](http://getkirby.com/blog/custom-post-types).

### 2. Install The Kirbyplugin
Copy the `linkpost.php` provided in this repo in `site/plugins` to `site/plugins/linkpost.php` in your Kirby installation.
 
### 3. Configure The Kirbyplugin
Set the correct path to the directory holding the blog content [in the Kirbyplugin on line 19](https://github.com/thenittygritty/linkpost-bookmarklet/blob/master/site/plugins/linkpost.php#L19), i.e. `content/blog`.

