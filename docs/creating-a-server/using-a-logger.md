# Using a logger

::: tip
This page is a follow-up and bases its code on [the previous page](/creating-a-server/).
:::

You can use a logger to log the requests and response and other debug information to the console. This can be quite handy when you are trying to find an error or just trying to look around and see what's not working.

## Installing

First of all, you need to get the Minima middlewares package, most of these have been ported from Go-Chi. The middlewares package itself contains more than just the logger but for now you don't need to worry about it.

```bash:no-line-numbers
go get github.com/gominima/middlewares
```

## Logging to console

After you have installed the middlewares package, you can use the [`Minima#UseRaw`](https://gominima.studio/docs/minima/main/struct/Minima?scrollTo=UseRaw) method to use the logger.

In your main file you can add the following sections of code:

```go {5,12}
package main;

import (
    "github.com/gominima/minima"
    "github.com/gominima/middlewares"
    "example.com/m/routes"
)

func main() {
	app := minima.New()
	app.UseRouter(routes.Router())
    app.UseRaw(middlewares.Logger())
	app.Listen(":3000")
}
```

## Logging to a file