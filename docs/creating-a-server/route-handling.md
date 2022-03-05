# Route handling

::: tip
This page is a follow-up and bases its code on [the previous page](/creating-a-server/).
:::

## Routes directory

First, you need to create a directory for storing all your routes, while you can continue with the way you did in the previous sections by manually defining the `GET` routes, it's a much better to split it in different files for easier management.

Create a directory named `routes` in your root folder (where your main.go is):

```bash:no-line-numbers
mkdir routes
```

## Making a router file

Before making the first route, you will need a router. Make a new file called `router.go`:

```bash:no-line-numbers
touch routes/router.go
```

Add the following code in the file:

```go
package routes

import "github.com/gominima/minima"

func Router() *minima.Router {
	router := minima.NewRouter()

	return router
}
```

Here, you first make a sub-package called `routes` (this is different from the main package), Next you import the minima library and make the Router function which uses the [`minima#NewRouter()`](https://gominima.studio/docs/minima/main/func/NewRouter) method and return this router.

Now you are ready to make your first route and register it in the router. You can return any sort of data from this section depending on your use case but here you will be sending a simple random number.

## Route files

Make a new file called `random_get.go`:

```bash:no-line-numbers
touch routes/random_get.go
```

Add the following code in the file:

```go
package routes

import (
    "github.com/gominima/minima"
    "math/rand"
	"strconv"
)

func RandomGet(res *minima.Response, req *minima.Request) {

}
```

Just like the `router.go` file, this file is under the sub-package `routes`, imports the minima library along with the `math/rand` library for getting a random number and the `strconv` library to convert the number into string, it also has a `RandomGet` function with the [`Response`](https://guide.gominima.studio/docs/minima/main/struct/Response) and [`Request`](https://guide.gominima.studio/docs/minima/main/struct/Request) parameters.

Now you can set the status code of the Response to `200` by using the `OK` method and use the `Send` method to send the random number:

```go {4}
//...

func RandomGet(res *minima.Response, req *minima.Request) {
    res.OK().Send(strconv.Itoa(rand.Intn(100)))
}
```

Next you can add the register the route in your `routes/router.go` file:

```go {5}
//...

func Router() *minima.Router {
	router := minima.NewRouter()
    router.Get("/random", RandomGet)
	return router
}
```

Finally, you can add the routes import and register the router in your main file:

```go {5,10}
package main;

import (
    "github.com/gominima/minima"
    "example.com/m/routes"
)

func main() {
	app := minima.New()
	app.UseRouter(routes.Router())
	app.Listen(":3000")
}
```

::: tip

If you have a GitHub account you can use it here instead of `example.com/m`.

```go:no-line-numbers
"github.com/USERNAME/REPOSITORY/routes"
```

:::

After that you can finally test your server by running `go run main.go` and going to `localhost:3000/random` in your browser.
