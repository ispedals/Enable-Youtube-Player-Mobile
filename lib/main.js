require("sdk/system/unload").when(function() {
	let prefService = require("sdk/preferences/service");
	prefService.reset("general.useragent.site_specific_overrides");
	prefService.reset("general.useragent.override.youtube.com");
});

let prefService = require("sdk/preferences/service");
prefService.set('general.useragent.site_specific_overrides', true);
prefService.set("general.useragent.override.youtube.com",
	"Mozilla/5.0 (Linux; Android 4.4; Nexus 7 Build/KRT16S) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36"
);
