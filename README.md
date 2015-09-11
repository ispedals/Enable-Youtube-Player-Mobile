# Enable Youtube Player Mobile

[AMO Link](https://addons.mozilla.org/en-US/firefox/addon/enable-youtube-player-mobile/)

Adds a site-specific override for Firefox for Android to spoof the Chrome useragent for m.youtube.com and enables [MediaSource Extensions](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource).
This allows videos to play in the browser instead of playing in the native app. Site-specific override support was only added in Firefox for Android 22
and MediaSource Extensions were added in Firefox for Android 25.

##Building
* Run `jpm xpi`
* In the resulting XPI, open it and edit `install.rdf`
* Replace the `<em:targetApplication>` block with:

```
<!-- Firefox for Android-->
<em:targetApplication>
<Description>
	<em:id>{aa3c5121-dab2-40e2-81ca-7ea25febc110}</em:id>
	<em:minVersion>38.0a1</em:minVersion>
	<em:maxVersion>40.0</em:maxVersion>
  </Description>
</em:targetApplication>
```

changing `<em:maxVersion>` as needed

##Changelog

*1.0.0
Bugfix and enable building with JPM

	`media.mediasource.enabled` was not being properly reset on disable/uninstall
	Switch to semver versioning
	JPM compatability increases the minimum version to Firefox for Android 38


* 0.5
Fix for site change

	Update useragent to Chrome 34 and enable mediasource extensions. This increases the minimum version to Firefox for Android 25. 

* 0.4
Fix install.rdf to state that the addon is only compatible with Firefox for Android 22+

	`cfx xpi --force-mobile` defaults to enabling compatability with both Firefox for Desktop and Firefox for Android.
	Fixing this requires manually editing the generated install.rdf

* 0.3
Rename, relicence, and submit to AMO. Update useragent to Chrome 33 and Android 4.4

* 0.2
Update useragent to Chrome 29

* 0.1
Initial release

##License
Enable Youtube Player Mobile is licensed under the MIT License, Copyright (c) 2014 ispedals

##See Also
* [Faster Video Mobile](https://addons.mozilla.org/en-US/android/addon/faster-video-mobile) ([Github Link](https://github.com/ispedals/Faster-Video-Mobile))

  Use with Enable Youtube Player Mobile to control the speed of videos
