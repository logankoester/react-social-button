# Social Button

React component for <a href="https://lipis.github.io/bootstrap-social/">bootstrap-social</a>, based on the <a href="https://react-bootstrap.github.io/components.html#buttons">react-bootstrap</a> button.

## Demo

Live demo: [AljoschaMeyer.github.io/react-social-button](http://AljoschaMeyer.github.io/react-social-button/)

To build the example locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-social-button is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-social-button.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-social-button --save
```


## Usage

This is based on [bootstrap-social](https://lipis.github.io/bootstrap-social/) and [react-bootstrap](https://react-bootstrap.github.io/), so it only works if the css files required by those projects are present ([Bootstrap](http://getbootstrap.com/2.3.2/), [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [Bootstrap Social](https://lipis.github.io/bootstrap-social/)).


```js
var SocialButton = require('react-social-button');

<SocialButton
  social='twitter'
  btnProps={{
    disabled: true,
    onClick: function(){alert('Callback called.');}
  }}/>
```

### Properties

- `social`: This is used for the classnames for bootstrap-social. Required.
- `text`: Optional text to be included next to the logo. Only the logo is shown if this is `null` (default).
- `loading`: If this is set to `true`, a spinner animation replaces the logo.
- `btnProps`: Properties object, the properties are passed down to the underlying [Button](https://react-bootstrap.github.io/components.html#buttons).
