---
home: true
title: Home
heroImage: https://raw.githubusercontent.com/gominima/minima/main/assets/logo.png
actions:
  - text: Get Started
    link: /introduction/getting-started.html
    type: primary
  - text: Installation
    link: /preparations/
    type: secondary
features:
  - title: Simple Setup
    details: Minima is designed to be a beginner friendly framework to develop all your projects with ease without compromising performance.
  - title: Minimal Routing
    details: With Minima, you can set up multiple routes simultaneously, quick and easy and use them in your main instance without any trouble.
  - title: Performant
    details: Minima runs with 0 dependencies and a low overhead so you can squeeze as much performance as you want.
  - title: Extendability
    details: You can extend the framework any way you want and have the feeling of home 
  - title: Middlewares
    details: Flexible middleware API, allowing plugins to provide lots of plug-and-play features.
  - title: Compatibility
    details: Backwards compatible with net/http code.
footer: MIT Licensed | Copyright © 2020-present Gominima Team
---

### As Easy as 1, 2, 3

```sh{2,5-16,19}
# install in your project
go get github.com/gominima/minima

# create a simple file
echo 'package main

import "github.com/gominima/minima"

func main() {
  app := minima.New()

  app.Get("/"), func(res *minima.Response, req *minima.Request) {
    res.OK().Send("Hello World")
  })
  app.Listen(":3000")
}' > main.go

# start the server
go run main.go
```
