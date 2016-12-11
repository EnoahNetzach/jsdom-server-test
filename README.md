# Steps to reproduce:

- `npm install`
- `npm test -- jest-jsdom 12` <- runs
- `npm test -- jest-jsdom 13` <- hangs indefinitely
- `npm test -- jest 1` <- hangs indefinitely

Just for comparison, running it with `mocha` doesn't have this problem:

- `npm test -- mocha 100`
