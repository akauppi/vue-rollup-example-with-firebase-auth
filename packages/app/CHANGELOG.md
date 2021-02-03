# Changelog

<!-- Editor's note
Release dates are marked; 'latest' shows WIP window.
-->

## Latest

- **FEATURE:** replaced FirebaseUI with `aside-keys` web component
- Internal: dependency updates
- Internal: brought back home from its separate repo 🏠

## 8-Jan-2021

- Upgraded to Vite 2.0 (beta)
- Avoids starting twice (looks that port `3000`/`3001` is available)
- In `dev:local`, lessen confusion by always requiring `user=`.

## 11-Dec-2020

- Using fake `dev` user id and logging with it automatically, in `dev:local`
  - speeds up development (no sign-in dialog)
  - allows completely offline development (no reference to any cloud project)
- Import `firebaseui` properly, in ES6 (works with latest Vite; not sure about Rollup but taking the chance)
- `npm run dev:online` works again
- Using `RColl`/`RDoc` for Firestore listening (great!)
- Using `import` for Firebase and FirebaseUI
  - NOTE: <font color=red>This DOES NOT FULLY WORK YET!</font> Track in [FirebaseUI: "updateCurrentUser failed" dialog after importing as ES module](https://github.com/akauppi/GroundLevel-es-firebase-app/issues/1)
- Revised `README` to match latest developments (eg. running tests)
  - Split in two, since it has grown and don't know what to cut away.
- Creating dev-mode users on server side (good); with `firebase-admin` 9.4.0 it works.

## 23-Oct-20

- Using Auth emulation

## 16-Oct-20

- Revised internal code on Firestore snapshot handling
- Can now use `/@/` aliases

## 12-Oct-20

- Authentication in Cypress tests now works.

## 7-Oct-20

- Revised docs, to match the multi-repo approach.
- Able to use `npm test` independently.

## 28-Sep-20

- Span off from the main repo.