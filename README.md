# nextjs-route-utils

> A lightweight, type-safe route builder utility for Next.js  
> Build dynamic and optional routes with ease and full TypeScript support.

<p>
<a href="https://github.com/wolfdev1337" style="padding-left:5px"><img alt="X platform" src="https://img.shields.io/badge/Github-25292f"></a>
<a href="https://x.com/WolfDev1337"><img alt="Github platform" src="https://img.shields.io/badge/Twitter-1DA1F2"></a>
</p>

---

## Why use `nextjs-route-utils`?

In Next.js projects, especially with dynamic routes, managing route strings manually can lead to typos, inconsistencies, and bugs.  
This package lets you **define your route patterns once** and then **build URLs with typed parameters**, ensuring correctness across your app.

---

## Features

- Define routes with dynamic (`:param`) and optional (`:param?`) segments
- Type-safe parameter enforcement in TypeScript
- Automatic URL encoding of parameter values
- Removes optional params when not provided
- Lightweight and zero dependencies

---

## Installation

```bash
npm install nextjs-route-utils
# or
yarn add nextjs-route-utils
```
