When a user is offline , this is how the cache files are provided

# Without Service Workers
- You are offline.
- The browser fires a network request , but it does not reach the server,so it throws a error.

# With Service Workers
- You are offline.
- The browser fires a network request.
- The service worker intercepts the request before it reaches the server.
- The service worker can then provide a cached response or a fallback (like an offline page) from its cache or predefined content, without the request reaching the server.