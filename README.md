![image](https://user-images.githubusercontent.com/3132889/76686987-4134db80-6663-11ea-85b0-896712b67733.png)

# Run

At the moment, deno_webview seems to block the http server handler, so you need to run the two scripts in separate processes.

execute two commands:

- deno run --allow-net --allow-write --allow-read server.ts
- deno run --unstable --allow-env --allow-write --allow-read --allow-net --allow-plugin .\index.ts

# Edge Webview info

If you are using Windows, you may require this:

https://github.com/Boscop/web-view#known-issues-and-limitations

You may also like Edge DevTools to debug Edge Webview :)

https://pspdfkit.com/blog/2018/edge-devtools-uwp/
