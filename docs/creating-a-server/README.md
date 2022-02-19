# Initial Files

## Creating the main file

If you have been following up with all the sections so far your directory should look like this.

```sh:no-line-numbers
server/
├── go.mod
└── go.sum
```

Now you can start with making our main file, you can name it whatever you want it but here you are naming it `main.go`.

```sh:no-line-numbers
touch main.go
```

You can open the file in the text editor of your choice, if you haven't got one, you can take a look at the [popular text editors](/preparations/setting-up-a-formatter.html#installing-a-code-editor).

Here's the base code to get you started:

```go
package main;

import "github.com/gominima/minima"

func main() {
	app := minima.New()
	app.Get("/", func(res *minima.Response, req *minima.Request) {
		res.OK().Send("Hi mom!")
	})
	app.Listen(":3000")
}
```

Don't worry if you don't understand something, you will explain all of the code in a moment. For now you can save the file.

## Explanation

So you might be wondering what does the code do, Let's take each line and see what it does:

- In the first line you declare the package and it's name, you generally won't have to worry much about this line.
- Then you `import` the Minima library which you installed earlier.
- Next you declare the main function using the `func` keyword
- In the following line you make a new instance of minima using the [minima#New()](https://gominima.studio/docs/main/func/New) method and store it in the `app` variable.
- Then you register a new `GET` route which fires on requests to `/` and assign it a function, which has two params, the request and the response.
- Then you set the status code of the response to `200` using the [Response#OK()](https://gominima.studio/docs/main/struct/Response?scrollTo=OK) and set the body to 'Hi mom!'.
- Finally you listen to the port `3000` on `localhost`.

## Running the server

Now that you have a basic setup ready, you can start the server by running `go run main.go` in the terminal and test by going to `localhost:3000` in your browser.

::: tip

You can also quickly test if your setup works by running the following command in the terminal.
```sh:no-line-numbers
curl localhost:3000
```

:::