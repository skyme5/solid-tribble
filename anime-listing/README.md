<p>
  <div align="center">
      <a href="https://github.com/akash-gajjar/react-starter">
        <img
          src="public/images/react.svg"
          alt="Anime Listing"
          width="300"
          height="300"
        />
      </a>
  </div>
</p>

## Requirements

Create a search page to show search results with fields shown in the
wireframe below.

- [x] Show Max 15 results on the single page
- [x] Show a warning message, if there is no result returned for a given search query
- [x] By default, the page shows the top 15 characters if the user did not search anything
- [x] Show the user pagination button to go “Next” or “Back”
- Clicking on the next button shows next 15 records or so
- [x] The application searches the anime characters as user types In sort user does not need to click on the search button or similar to see results

## Development Setup

There are two branches

- `develop` for active development
- `main` official branch used for production releases

First clone this repository

```text
git clone git@github.com:akash-gajjar/react-starter.git
```

or using ssh

```text
git clone git@github.com:akash-gajjar/react-starter.git
```

Checkout `develop` or `main` and then install dependencies

```sh
git checkout develop
yarn install
```

Finally start development server

```sh
yarn start
```

## Contributing

Checkout new branch from your local develop branch, add meaningful branch name with prefix like
`fix/` when fixing a bug or `feat/` when adding a new feature.

```text
git checkout -b fix/meaningful-name
```

After making changes to your local git repository make sure to run linter
scripts

```text
yarn lint:style
yarn lint:script
```

If you have any linting error Fix them now by running

```text
yarn lint:fix
```

and then finally format your code using `prettier`

```text
yarn prettier
```

Now commit your changes and provide title and summary of changes then execute

```text
git push
```

Now you can submit a PR.

## Notes

### Using SVG

Since we are using `@svgr/webpack` we can directly import SVG as react components, but
this will create issues when we need them in styled components, we can achieve as follows

```js
import svg from './assets/file.svg?url'; //<--- SVG as url with url suffix
import Svg from './assets/file.svg'; // <--- SVG as React Component

const App = () => {
  return (
    <div>
      <img src={svg} width="200" height="200" />
      <Svg width="200" height="200" viewBox="0 0 3500 3500" />
    </div>
  );
};
```
