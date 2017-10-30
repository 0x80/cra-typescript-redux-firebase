CRA Typescript Redux Firebase
=============================

This project was bootstrapped with [Create React App Typescript](https://github.com/wmonk/create-react-app-typescript), which uses [Create React App / CRA](https://github.com/facebookincubator/create-react-app) as its base. For documentation on the boilerplate refer to the official CRA docs.

Features
--------

- [React App Rewired](https://github.com/timarney/react-app-rewired): To overrule CRA configuration without having to eject.
- [Ant Design UI Framework](https://ant.design/docs/react/introduce)
- [Prettier](https://github.com/prettier/prettier): For code formatting

Code Guidelines & Standards
-----------------------------

- [All kebab-case filenames](http://www.thecodingcouple.com/theres-name-kebab-case/): It is the preferred file naming scheme in the Node.js community. This prevents having multiple formats mixed together, keeps
file listings nicely readable, and potentially avoids cross-platform incompatibilities. Also see [node best practices](https://devcenter.heroku.com/articles/node-best-practices#stick-with-lowercase).
- JSON files should be sorted by key. There's [plugins](https://github.com/richie5um/vscode-sort-json) for that of course.
- TSLint is responsible for syntax and code linting. Prettier is responsible for all formatting rules. A pre-commit hook will format all staged files automatically so you can not commit unformatted code.
- Configuration is done via environment variables. For more info see [12factor](https://12factor.net/config) and the [CRA docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)
- Redux parts are structured using the [re-ducks](https://github.com/alexnm/re-ducks) pattern and naturally uses [FSA-compliant](https://github.com/acdlite/flux-standard-action) actions. The [redux-actions](https://github.com/reduxactions/redux-actions) library is used to reduce boilerplate.

### Git Commit Message Format

Taken from [Writing good commit messages](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)

- Summary line starts with capital letter.
- Always leave the second line blank.
- Write the summary line and description of what you have done in the imperative mode, that is as if you were commanding someone. Start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed".
- Don't end the summary line with a period - it's a title and titles don't end with a period.
- If it seems difficult to summarize what your commit does, it may be because it includes several logical changes or bug fixes, and are better split up into several commits using `git add -p`.

Usage
-----

### Development

For the initial setup you will have to set some environment configuration. See the section on [Configuration](#Configuration).

`yarn install && yarn start`

### Scripts

Commands you can run with `yarn [script]`

- `build`: Build app for production.
- `deploy`: Deploy the last built version to Firebase hosting.
- `format`: Run Prettier over all files.
- `serve`: Statically serves the built files using [`firebase-tools`](requires global install of firebase tools). Install them using `yarn global add firebase-tools`. Serving the files this way is required for the Firebase user login to work.
- `start`: Starts development server with hot-reloading etc.
- `test`: Run tests.

### Testing

`yarn test`

Configuration
-------------

Configuration is passed in via environment variables. The defaults are available in `.env`. Simply copy the file to `.env.local`, for example with `$ cp .env .env.local`, and fill in each of the variables. You can read more [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

