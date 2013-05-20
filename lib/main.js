require("sdk/system/unload").when(function() {
	let prefService = require("sdk/preferences/service");
	prefService.reset("general.useragent.site_specific_overrides");
	prefService.reset("general.useragent.override.youtube.com");
});

let prefService = require("sdk/preferences/service");
prefService.set('general.useragent.site_specific_overrides', true);
prefService.set("general.useragent.override.youtube.com",
	"Mozilla/5.0 (Linux; Android 4.2.2; Nexus 7 Build/JDQ39) AppleWebkit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.58 Safari/537.31"
);
