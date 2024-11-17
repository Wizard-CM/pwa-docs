
# What is a manifest file in a PWA?
- The manifest.json file is a simple JSON file that provides metadata about your web application. 
- It tells the browser how your app should behave when installed on a device (like a mobile or desktop).

# What does a manifest file do?
* Defines app properties:
    - Name, icons, theme color, and how the app should look and behave.
**Enables "Add to Home Screen" (A2HS)**:
    - It allows users to install your PWA on their devices with an install prompt.
* Controls the display mode:
    - You can make your app run in a "standalone" mode (like a native app) without a browser toolbar.
* Customizes the app icon:
    - The manifest specifies the app's icon for different device sizes.




### Key fields in a manifest file:

{
  "name": "My App",             // Full app name
  "short_name": "App",          // Short name shown on the home screen
  "start_url": "/",             // URL to open when the app is launched
  "display": "standalone",      // Display mode: browser, fullscreen, or standalone
  "background_color": "#ffffff",// Background color during app loading
  "theme_color": "#42a5f5",     // Toolbar color
  "icons": [                    // App icons for different resolutions
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose":"any maskable"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose":"any maskable"
    }
  ]
}

