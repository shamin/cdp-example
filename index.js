const CDP = require('chrome-remote-interface');

// Connect to the remote Chrome instance
CDP({port: 9222}, (client) => {

  // Extract domains
  // const {Network, Page, Runtime} = client;

  // // Enable the domains we're interested in
  // Promise.all([Network.enable(), Page.enable(), Runtime.enable()]).then(() => {

  //   // Navigate to a URL
  //   Page.navigate({url: 'http://localhost:5000'});

  //   // Wait for page load event
  //   Page.loadEventFired(() => {

  //     // Evaluate a JavaScript expression
  //     Runtime.evaluate({expression: 'console.log("Hello, world!");'});

  //     // Close the connection
  //     client.close();

  //   });

  // }).catch((err) => {
  //   console.error(err);
  //   client.close();
  // });

  // Extract domains
  const { Debugger, Runtime } = client;

  // Enable the Debugger and Runtime domains
  Promise.all([Debugger.enable(), Runtime.enable()]).then(() => {

    // Add a breakpoint
    // Debugger.setBreakpoint({ location: { lineNumber: 10, scriptId: '<scriptId>' } });

    // Watch for the Debugger to pause
    Debugger.paused((params) => {

      // Run a function
      // Runtime.callFunctionOn({
      //   functionDeclaration: 'function() { console.log("Debugger paused!"); }'
      // });

      console.log(params)
    Runtime.evaluate({expression: 'console.log("Hello, world!");'});

      // Resume execution
      // Debugger.resume();


    });

    // Navigate to a URL
    client.send('Page.navigate', { url: 'http://localhost:5000' });

  }).catch((err) => {
    console.error(err);
    client.close();
  });
}).on('error', (err) => {
  console.error('Cannot connect to remote endpoint:', err);
});
