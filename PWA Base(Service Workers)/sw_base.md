# Basics of service workers
- service workers only runs over HTTPS || localhost.

- service worker acts as a middleware between the browser and the network (servers).
- the service worker can intercept that request before it reaches the server. 
- You can use the service worker to modify or handle the request, respond with cached data.    
- **Service workers are the heart of PWA Applications**                

# use Cases of service workers
- optimized offline experience.
- modify the network request , since it acts as a middleware.


# precaution
- If services worker file is created inside another folder eg : "root/sw.js" , then sw.js can only access the fetch request of root folder,other fetch requests apart from root level cannot be accessed by sw.js.
- Due to this reason , the sw.js files should be created in root level , so that it can access all the network requests.


# Service worker lifecycle(How service worker works)
- In short : Register → Install → Activate → Fetch → Terminate.

* Registration
- The browser registers the service worker script (a JavaScript file) for your site.

* Installation
- The service worker is installed in the background. 
- During this stage, it can cache important resources (e.g., images, scripts) for offline use.

* Activation
- Once installed, the service worker is activated. 
- At this point, it can delete any old service workers.

* Fetch
- The service worker middleware between the browser and the network (servers) : Browser -- Service Worker -- Server
- So if the resourse that is requested to the server is present in cache , then through "fetch" event , we can return the cached resources.

* Termination
- After being idle for a while (i.e., when there are no tasks), the service worker is terminated to save resources. It will be restarted when needed.


