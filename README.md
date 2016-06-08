# egghead-react-redux-image-gallery--exp
Just doing [this tutorial](http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga/)


## Notes (issues on the way)

### main.js
```bash
SyntaxError: /home/hannes/data/www/egghead-react-redux-image-gallery--exp/src/main.js: Unexpected token (7:2) while parsing file: /home/hannes/data/www/egghead-react-redux-image-gallery--exp/src/main.js

  5 | 
  6 | ReactDOM.render(
> 7 |   <h1>Hello React!</h1>,
    |   ^
  8 |   document.getElementById('root')
  9 | );
```
#### Solution
Was my fault. I moved the project to a different folder, but it did not move the hidden `.babelrc` file.


### Gallery.js - adding the flickr API
Response from API is:
```
{stat: "fail", code: 112, message: "Method "unknown" not found"}
```
#### Solution
Removed the `+` from the APU URL. I guess that's a typo or an issue with the code highlight plugin on the website.  
So now it's:  
```
https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5
```

### Default application state - reducer.js
There's more added to the file than what's marked.


### Default application state - Gallery.js
```
function mapStateToProps(state) {
  return {
    images: state.images
    selectedImage: state.selectedImage
  }
}
```
A missing `,` after `images: state.images` breaks stuff for me.


### The first saga
```
build.js:2 Cannot find module './sagas' from '/home/hannes/data/www/egghead-react-redux-image-gallery--exp/src'
```
We're importing `sagas` but the file is called `saga`.

#### Solution
Rename the file to `sagas.js` and try again.


### Triggering saga workflows with actions
Typo in `main.js`. Should be:  
```js
...

-import {loadImages} from './sagas';
+import {watchForLoadImages} from './sagas';

...
```

