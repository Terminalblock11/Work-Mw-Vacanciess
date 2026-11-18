# WorkMw App

One app, two builds, both made by GitHub (no Android Studio needed):

- **Android APK**: `.github/workflows/android.yml`
- **Windows installer (.exe)**: `.github/workflows/desktop.yml`

## First time
1. Create a new GitHub repository (Private is fine).
2. Upload everything in this folder (keep the `.github` folder).
3. Open the repository's **Actions** tab. Both builds start by themselves (about 5-10 minutes).
4. Open a finished run and download **WorkMw-APK** or **WorkMw-Windows** from "Artifacts".

## Install
- **Phone:** unzip, copy `WorkMw.apk` to the phone, open it, allow "install unknown apps".
- **Windows:** unzip, run `WorkMw-Setup-1.0.0.exe`. Windows may show a SmartScreen warning for unsigned apps: More info > Run anyway.

## Updating the app
Replace `www/index.html` with the new version and commit. Both builds re-run.

## Public download links
Create a release tag (for example `v1.0.1`). The APK and installer are attached to that release page.

## Notes
- The APK is debug-signed: fine for installing on your own devices. Play Store needs a signed release build.
- Fetching adverts from other sites works inside both apps without the proxy.
- The Gmail attachment feature needs a custom native plugin that is not included; the app falls back to the share sheet automatically.
