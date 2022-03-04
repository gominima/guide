# Contributing

## Local development

Clone the repo into your desired folder, `cd` into it, and install the dependencies.

```bash
git clone https://github.com/gominima/guide.git
cd docs
yarn
```

You can use `npm run dev` to open up a local version of the site at http://localhost:8080. If you need to use a different port, run it as `npm run dev -- --port=1234`.

### Linting

Remember to always lint your edits/additions before making a commit to ensure everything's lined up and consistent with the rest of the guide. We use ESLint and have a package.json script for linting both JS files and JS code blocks inside Markdown files.

```bash
npm run lint
```

## Adding pages

To add a new page to the guide, create a `file-name.md` file inside the folder of your choice. If you want to link to `/dir/some-tutorial.html`, you would create a `some-tutorial.md` file inside a `dir` folder. [VuePress](https://github.com/vuejs/vuepress) will pick up on it and set up the routing appropriately.

With that being said, you will still need to add the link to the sidebar manually. Go to the `/guide/.vuepress/sidebar.js` file and insert a new item with the path to your newly created page.

## General guidelines

Because we want to keep everything as consistent and clean as possible, here are some guidelines we strongly recommend you try to follow when making a contribution.

### Spelling, grammar, and wording

Improper grammar, strange wording, and incorrect spelling are all things that may lead to confusion when a user reads a guide page. It's important to attempt to keep the content clear and consistent. Re-read what you've written and place yourself in the shoes of someone else for a moment to see if you can fully understand everything without any confusion.

Don't worry if you aren't super confident with your grammar/spelling/wording skills; all pull requests get thoroughly reviewed, and comments are left in areas that need to be fixed or could be done better/differently.

#### "You"/"your" instead of "we"/"our"

When explaining parts of a guide, it's recommended to use "you" instead of "we" in most situations. For example:

```diff
- To check our Go version, we can run `go version`.
+ To check your Go version, you can run `go version`.

- Our final code should look like this: ...
+ Your final code should look like this: ...

- Before we can actually do this, we need to update our configuration file.
+ Before you can actually do this, you need to update your configuration file.
```

#### "We" instead of "I"

When referring to yourself, use "we" (as in "the writers of this guide") instead of "I". For example:

```diff
- If you don't already have this package installed, I would highly recommend doing so.
+ If you don't already have this package installed, we would highly recommend doing so.
# Valid alternative:
+ If you don't already have this package installed, it's highly recommended that you do so.

- In this section, I'll be covering how to do that really cool thing everyone's asking about.
+ In this section, we'll be covering how to do that really cool thing everyone's asking about.
```

### Inclusive language

Try to avoid gendered and otherwise non-inclusive language. Examples are:

- Whitelist -> Allowlist
- Blacklist -> Denylist
- Master/Slave -> Leader/follower, primary/replica, primary/secondary, primary/standby
- Gendered pronouns (e.g. he/him/his) -> They, them, their
- Gendered terms (e.g. guys) -> Folks, people
- Sanity check -> Quick check, confidence check, coherence check
- Dummy value -> Placeholder, sample value

### Paragraph structure

Tied in with the section above, try to keep things as neatly formatted as possible. If a paragraph gets long, split it up into multiple paragraphs so that it adds some spacing and is easier on the eyes.

#### Tips, warnings, and danger messages

If you have a tip to share with the reader, you can format them in a specific way so that it looks appealing and noticeable. The same goes for warning and "danger" messages.

```md
In this section, we'll be doing some stuff!

::: tip
You can do this stuff even faster if you do this cool thing listed in this tip!
:::

::: warning
Make sure you're on version 2.0.0 or above before trying this.
:::

::: danger
Be careful; this action is irreversible!
:::
```

![Utility tags preview](https://i.imgur.com/CnzVBmr.png)

### General styling

#### Spacing between entities

Even though this generally does not affect the actual output, you should space out your entities with a single blank line between them; it keeps the source code clean and easier to read. For example:

```md
## Section title

Here's an example of how you'd do that really cool thing:

```go
app := Minima.New()
`​``

And here's a sentence that would explain how that works, maybe.

::: tip
Here's where we'd tell you something even cooler than the really cool thing you just learned.
:::

::: warning
This is where we'd warn you about the possible issues that arise when using this method.
:::
```

#### Headers and sidebar links

Section headers and sidebar links should generally be short and right to the point. In terms of casing, it should be cased as if it were a regular sentence.

```diff
# Assuming the page is titled "Response"
- ## How To Make Inline Fields In An Response
+ ## Inline fields

# Assuming the page is titled "Webhooks"
- ## Setting A Status Code On Your Response
+ ## Setting an status code
```

#### References to code

When making references to pieces of code (e.g. variables, properties, etc.), place those references inside backticks. For example:

```md
After accessing the `.icon` property off of the `data` object, you can send that as a file.

---

If you want to change the status code, you can use the `Response#OK` method.
```

References to class names should be capitalized, but remain outside of backticks. 

#### Code block line highlighting

When you want to highlight a piece of code to display either an addition or a difference, use the `go {1-5,6-10}` syntax. For example (ignoring the `\`s):

```md

Here's our base code:

```go {2,6}
package main;

import "github.com/gominima/minima"

func main() {
	app := minima.New()
	app.Get("/", func(res *minima.Response, req *minima.Request) {
		res.OK().Send("Hi mom!")
	})
	app.Listen(":3000")
}
\```

To add this feature, use this code:

```go {2,6-8}
package main;

import "github.com/gominima/minima"

func main() {
	app := minima.New()
	app.Get("/", func(res *minima.Response, req *minima.Request) {
		res.OK().Send("Hi mom!")
	})
	app.Listen(":3000")
}
\```

```

This is VuePress' [code block line highlighting](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks) feature. It's encouraged to use and preferred over diff code blocks.

Do note the space between `js` and `{}`. This is necessary to not interfere with `eslint-plugin-markdown`, which would ignore the code block.

### Images and links

If you want to include an image in a page, the image you add should be saved to the repo itself instead of using external services. If you want to link to other sections of the guide, be sure to use relative paths instead of full URLs to the live site. For example:

```diff
- Here's what the final result would look like:
-
- ![Final result](https://i.imgur.com/AfFp7pu.png)
-
- If you want to read more about this, you can check out the page on [that other cool stuff](https://guide.gominima.studio/#/some-really-cool-stuff).

+ Here's what the final result would look like:
+
+ ![Final result](./images/AfFp7pu.png)
+
+ If you want to read more about this, you can check out the page on [that other cool stuff](/some-really-cool-stuff).
```

Do note the `./images/*` syntax used. The `./` part refers to the file's corresponding image directory, which holds all the images used for that directory. When it comes to images, this syntax should always be used.

### Minima documentation links

On pages where links to the Minima documentation are used, you can use the \[\`Property\`\]\(link\) component.