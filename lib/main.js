require("sdk/system/unload").when(function() {
	let prefService = require("sdk/preferences/service");
	prefService.reset("general.useragent.site_specific_overrides");
	prefService.reset("general.useragent.override.youtube.com");
	prefService.set("media.mediasource.enabled");
});

let prefService = require("sdk/preferences/service");
prefService.set('general.useragent.site_specific_overrides', true);
prefService.set("general.useragent.override.youtube.com",
	"Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36"
);
prefService.set("media.mediasource.enabled", true);
