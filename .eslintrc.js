module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins":[
        "react",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension":0,
        "no-use-before-define": 0,
        "function-paren-newline": 0,
        "linebreak-style":0,
    },   
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "experimentalDecorators": true,
        "jsx": true
    },
    "sourceType": "module"
    },
};
