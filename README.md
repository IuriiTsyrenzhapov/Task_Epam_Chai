`HOME TASK`

1. Make sure Chai library is set up and used in your framework
2. Practice with Assert, Should, Expect interfaces to use them in tests
3. Understand the differences between mentioned interfaces
4. Push the code to remote repository and create Merge Request

`Evaluation criteria (pass rate is 70%)`
Here’s the list of actions which result in reduction of overall mark for a completed task:

1. Chai isn’t set up within Test Automation Framework (-70%)
2. One mentioned interface isn’t used in tests (1 interface = -10%)

Assertion Styles dependencies can be found in the wdio.conf.js

```
 before: function (capabilities, specs) {
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },

```

```

npx wdio run wdio.conf.js

```
