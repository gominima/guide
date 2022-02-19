# Installing Go and Minima

## Installing Go

To use Minima, you'll need to install [Go](https://go.dev/doc/install). Minima v1 requires Go 1.17 or higher.

::: tip
To check if you already have Node installed on your machine \(e.g., if you're using a VPS\), run `go version` in your terminal. If it outputs `go1.17` or higher, then you're good to go! Otherwise, continue reading.
:::

On Windows, it's as simple as installing any other program. Download the latest version from [the Go website](https://go.dev/learn/), open the downloaded file, and follow the steps from the installer.

On macOS, either:

- Download the latest version from [the Go website](https://go.dev/learn/), open the package installer, and follow the instructions
- Use a package manager like [Homebrew](https://brew.sh/) with the command `brew install go`

On Linux, you can consult [this page](https://go.dev/doc/install) to determine how you should install Go.

## Preparing the essentials

To use Minima, you'll need to install it via Go. Before you install anything, you should set up a new project folder.

Navigate to a suitable place on your machine and create a new folder named `server` (or whatever you want). Next you'll need to open your terminal.

### Opening the terminal

::: tip
If you use [Visual Studio Code](https://code.visualstudio.com/), you can press <code>Ctrl + `</code> (backtick) to open its integrated terminal.
:::

On Windows, either:

- `Shift + Right-click` inside your project directory and choose the "Open command window here" option
- Press `Win + R` and run `cmd.exe`, and then `cd` into your project directory

On macOS, either:
- Open Launchpad or Spotlight and search for "Terminal"
- In your "Applications" folder, under "Utilities", open the Terminal app

On Linux, you can quickly open the terminal with `Ctrl + Alt + T`.

With the terminal open, run the `go version` command to make sure you've successfully installed Go. If it outputs `go1.17` or higher, great!

### Initiating a project folder

```sh:no-line-numbers
go mod init example.com/m
```

This is the next command you'll be running. This command creates a `go.mod` file for you, which will keep track of the dependencies your project uses, as well as other info.

::: tip

If you have a GitHub account you can use it here instead of `example.com/m`.

```sh:no-line-numbers
go mod init github.com/USERNAME/REPOSITORY
```
:::

Once you're done with that, you're ready to install Minima!

## Installing Minima

Now that you've installed Go and know how to open your console and run commands, you can finally install Minima! Run the following command in your terminal:

```sh:no-line-numbers
go get github.com/gominima/minima
```

And that's it! With all the necessities installed, you're almost ready to start making your server.

## Using a formatter

While you are coding, it's possible to run into numerous syntax errors or code in an inconsistent style. You should [use a formatter](/preparations/setting-up-a-formatter.md) to ease these troubles. While code editors generally can point out syntax errors, formatters coerce your code into a specific style as defined by the configuration. While this is not required, it is advised.