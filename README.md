Instuctions on running the application

I have included the built assets in the dist folder, as well as all the node modules, you should be able to just unzip and use the npm script to start the server:

npm run start

To run the tests do `npm run test`

To build the app to `npm run build`

To build the app and run the server its: `npm run start:withbuild`

To start the development server with live hot reloading its `npm run dev`

The app is built with react and redux, everything is a pure component, there is no state in any of the components, the state fully determines the UI.
The state is also just a javascript object. This makes it very easy to debug, undo stuff, or persist state between sessions, you just seriealize.deserialize the state and use it to hydrate the ui, which is now effectively a put function.

I wrote this thing in a TDD way, for the sake of expediency i pulled in a couple of libraries and took a couple of shortcuts that i wouldnt have liked to in an ideal world, but I ended up getting really sick tuesday so Ive had less time that i would have like to put this together.

Any questions please email me to: al.quirk@gmail.com
Thanks!
