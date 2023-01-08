var isRoot = (location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)) ? false : true;

if (localStorage['lang'] == null) {
	var lang = window.navigator.userLanguage || window.navigator.language;
	lang = lang.substring(0,2);
	localStorage['lang'] = lang;
}

//i18n options
window.i18noptions = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage['lang'],
	fallbackLng: 'en',
	resGetPath: ((isRoot) ? "" : "../")+'files/locales/__lng__/__ns__.json',
	useDataAttrOptions: true,
	lngWhitelist: [ 'cz', 'en' , 'pl', 'ru', 'tr', 'ch' ]
};

var languageOptions = [
	{text: "Čeština",value: "cz",selected: (localStorage['lang'] == "cz" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/cz.png"},
	{text: "English",value: "en",selected: (localStorage['lang'] == "en" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/en.png"},
	{text: "Русский",value: "ru",selected: (localStorage['lang'] == "ru" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/ru.png"},
	{text: "Türkçe",value: "tr",selected: (localStorage['lang'] == "tr" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/tr.png"},
	{text: "Poland (WIP)",value: "pl",selected: (localStorage['lang'] == "pl" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/pl.png"},
	{text: "Chinese Traditional (WIP)",value: "ch",selected: (localStorage['lang'] == "ch" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/ch.png"}
];

window.changeLang = function(lang) {
	if(localStorage['lang'] != lang) {
		localStorage['lang'] = lang;
		window.location.reload();
	}
};

$(function() {
	$('#lang-switcher').ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(obj){
			changeLang(obj.selectedData.value);
		}
	});
});

jQuery.cachedScript = function( url, options ) {
	options = $.extend( options || {}, {
		dataType: "script",
		cache: true,
		url: url
	});
	return jQuery.ajax( options );
};
