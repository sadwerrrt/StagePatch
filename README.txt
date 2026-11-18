SADWERT v2.2 - app files for building an Android APK
=====================================================

Files (keep index.html at the top level, not inside a sub-folder):
  index.html      the whole app (works offline, no downloads needed)
  manifest.json   app name, colours and icons
  sw.js           offline support (only used when the app is hosted on https)
  icon-192.png, icon-512.png

OPTION 1 - Zip-based "website to APK" builder (easiest)
  Upload this zip to any web-to-app builder that accepts a zip with
  index.html at the top. Set the app name to "Sadwert" and, if asked,
  allow "microphone / USB / storage" only if you need them.

OPTION 2 - Capacitor + Android Studio (free, full control)
  1. Install Node.js and Android Studio.
  2. In an empty folder run:
       npm init -y
       npm i @capacitor/core @capacitor/cli @capacitor/android
       npx cap init Sadwert com.yourname.sadwert --web-dir www
  3. Make a folder called www and copy all the files from this zip into it.
  4. Run:
       npx cap add android
       npx cap sync
       npx cap open android
  5. In Android Studio choose Build > Build Bundle(s) / APK(s) > Build APK(s).

OPTION 3 - GitHub Pages + PWABuilder
  Put these files in your GitHub repo, turn on GitHub Pages, then paste the
  https address into pwabuilder.com and download the Android package.

GOOD TO KNOW
  - Songs, settings and imported sounds are saved inside the app on the phone.
  - Sounds are generated live, so the app needs no internet after install.
  - The on-screen 61-key piano always works. Connecting a USB MIDI keyboard
    depends on the builder: the Android WebView must allow Web MIDI.
    If the keyboard is not found, try Option 2 or test in Chrome first.
  - "Save song to a file" may not download inside some wrappers. Songs are
    still kept automatically inside the app.
