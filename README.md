# CDP Example

1. Run serve
This will serve the index.html at `http://localhost:5000` defined in `public/index.html` which has some javascript code with a debugger trigger
```
npm run serve
```

2. Run chromium in debugger mode
```
chromium --remote-debugging-port=9222 --auto-open-devtools-for-tabs
```

3. Run the script which opens the url in the connected chromium and wait for debugger to activate

```
npm start
```
