# Setting up the formatter

As a developer, it's a good idea to make your development process as streamlined as possible. Formatters check syntax and help you produce consistent code that follows specific style rules that you can define yourself or inherit from existing configurations. Although it's not required, using a formatter will help you immensely.

## Installing a code editor

First, you will need a proper code editor. Using programs such as Notepad and Notepad++ is discouraged, as they're inefficient for projects like these. If you aren't using one of the editors listed below, it's advised to switch.

* [Visual Studio Code](https://code.visualstudio.com/) is a prevalent choice; it is known for being fast and powerful. It supports various languages, has a terminal, built-in IntelliSense support, and autocomplete for Go with extensions. This is the recommended choice.
* [Atom](https://atom.io/) is user-friendly, concise, and easy to navigate.
* [Sublime Text](https://www.sublimetext.com/) is another popular editor that's easy to use and write code with.

## Using the formatter

You can use the following command to format all Go files in your directory at once.

```sh:no-line-numbers
go fmt
```

You can use the `go help fmt` command to learn more about the formatter configuration options.

::: tip

If you want to format only a single file or a selection of files you can pass the file names with the command.

```sh:no-line-numbers
go fmt main.go submain.go
```
:::

Now that you have all the setup done, you can move on to start writing some code.
