# ember-hexo-blog

Ember is sometimes used for fairly static sites. At the same domain as the
application, you may want to host a blog. For blogs with multiple users or
non-technical writers you may want to consider something like
[Ghost](http://ghost.org/).

However if you want something that is more akin to a Middleman blog where you
check in files, you may want to consider [Hexo](https://hexo.io/). Hexo is
a blogging engine written in Node.js, and it uses Markdown files on disk
to store content.

This addon allows you to put a Hexo blog in the `blog/` folder of an Ember
application.

## Using this addon

Install this addon via the usual steps:

```
yarn add ember-hexo-blog
```

Now create a new Hexo blog:

```
cd my-project/
yarn global add hexo-cli
hexo init blog
```

You likely want to open the file `blog/_config.yml` and add the directory
`/blog/` to the `url` and `root` settings:

```yaml
url: http://yoursite.com/blog
root: /blog/
```

And you likely want to add the file `_multiconfig.yml` to the `.gitignore` file:

```
echo '_multiconfig.yml' >> blog/.gitignore
```

Now you can run `ember serve` and visit your blog at
[http://localhost:4200/blog/index.html](http://localhost:4200/blog/index.html).

## Developing this addon

### Installation

* `git clone <repository-url>` this repository
* `cd ember-hexo-blog`
* `yarn install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test`
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
