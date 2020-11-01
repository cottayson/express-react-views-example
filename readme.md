# Example of usage [express-react-views](https://github.com/reactjs/express-react-views)

## Requirements:
* [`@babel-register`](https://babeljs.io/docs/en/babel-register/)
* [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env/)
* [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react/)
* You need to add this to `package.json` file:
  ```json
  "babel": {
  "presets": [
      "@babel/preset-react",
      [
          "@babel/preset-env",
          {
              "targets": {
                  "node": "current"
              }
          }
      ]
    ]
  },
  ```
