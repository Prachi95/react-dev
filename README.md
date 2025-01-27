NPM : used to manage node packages

package.json : configuration for npm

Bundler: Code needs to be bundled, cleaned, minified, Bundler does that
e.g. Webpack, Parcel, Vite, Roll up

Types of dependencies:
Dev - used only while development jest, webpack
Normal - used in production

Version in package.json
Major.minor.patch

~ => Tilde can update only patch versions automatically on npm I, ~1.2.3 can match 1.2._ but not 1.3._
^ => Caret can update patch and minor versions on npm install, ^1.2.3 can match 1.2.\* and <2.0.0

Package.lock.json => Kepps track of versions of all dependencies in package.json
Npx => executing the packages

Parcel

- Created dev build
- Created local server
- HMR
- hot module replacement
- File watching algorithm
- written in C++
- Caching
- faster builds
- Image optimization
- Minification of files (bundling)
- Compress the files
- Consistent hashing ??
- Code splitting
- Differential bundling
- support older browsers
- Better error handling
