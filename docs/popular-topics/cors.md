# Cross-Origin Resourse Sharing

::: tip
This page is a follow-up and bases its code on [the previous page](/creating-a-server/using-a-logger.html).
:::

## Introduction

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

## Installation

The CORS package of Minima is a wrapper based on [rs/cors](https://github.com/rs/cors).

To get started, first install the cors package:

```sh:no-line-numbers
go get github.com/gominima/cors
```

## Usage

### Allowing all domains

After you have installed the cors package, you can use the [`Minima#Use`](https://gominima.studio/docs/minima/main/struct/Minima?scrollTo=Use) method.

In your main file you can add the following sections of code:

```go {5,12,15}
package main;

import (
	"github.com/gominima/minima"
	"github.com/gominima/middlewares"
    "github.com/gominima/cors"
	"example.com/m/routes"
)

func main() {
	app := minima.New()
    cors := cors.New()
	app.UseRouter(routes.Router())
	app.UseRaw(middlewares.Logger())
    app.Use(cors.AllowAll())
	app.Listen(":3000")
}
```

Here you first import the cors package, then make a new instance of it and use the `AllowAll` method, cors supports different methods for different scenarios so be sure to [look at the docs.](https://gominima.studio/docs/cors/main)

### Allowing specific domains

You can add the allowed domains in `AllowedOrigins`.

```go {15-20}
package main;

import (
	"github.com/gominima/minima"
	"github.com/gominima/middlewares"
    "github.com/gominima/cors"
	"example.com/m/routes"
)

func main() {
	app := minima.New()
    cors := cors.New()
	app.UseRouter(routes.Router())
	app.UseRaw(middlewares.Logger())
    app.Use(cors.NewCors(cors.Options{
        AllowedOrigins: []string{"http://example.com"},
        AllowCredentials: true,
        // Enable Debugging for testing, consider disabling in production
        Debug: true,
    })())
	app.Listen(":3000")
}
```
