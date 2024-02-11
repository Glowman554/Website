# My new Blog

## First of all, Why?

I created this blog to share what projects I've been working on and to show the progress I've made.

## How do i add new posts?

It's pretty simple. Just add a new markdown file to the `blog` folder and add it to the index.json file.  

Just like this:

```json
[
    {
        "name": "Blog devlog",
        "date": "August 07 2022",
        "file": "/blog/08_07_2022_block_devlog.md"
    }
]
```

## What did i need to do to make this work?

I didn't need to do much. Most of the work was already done.  
What i did need to do:

- Make a `blog.html` file witch loads and renders the `index.json` file
- Make a `blog/view.html` file witch loads and renders the markdown files
- Add a new component to the `components.js` file to join an array of rendered HTML elements to a single HTML element
