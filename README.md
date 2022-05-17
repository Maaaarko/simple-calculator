# Simple Calculator

#### Built with React, Node.js and Express

The calculator supports basic math operations: +, -, ×, /, ().

#### Installation

```sh
git clone https://github.com/Maaaarko/simple-calculator.git
cd simple-calculator
npm run install-all
```

To see the app in action...

```sh
npm start
```

To run the tests ...

```sh
npm run test
```

... or for development purposes ...

```sh
npm run dev
```

### About

The client is a simple web app consisting of numbered buttons and operator buttons. Input is sent to the server for evaluation.
The results are rounded to 6 decimal places. Last 5 results are displayed.
Most of the error messages specify the character where the parsing failed.

Appearance is influenced by iPhone calculator.

### Algorithm explanation

Input is first converted into tokens - token being an operand or an operator. All redundant operators are ommited and the expression is simplified.
It is then converted to postfix notation, aka Reverse Polish notation, using Dijkstra's Shunting yard algorithm.
The postfix expression is than calculated and result is returned to the client.

You can see the server-side docs [here](https://maaaarko.github.io/simple-calculator/)
