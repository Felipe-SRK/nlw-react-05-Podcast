_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},BLsd:function(e,t,n){e.exports={playerContainer:"styles_playerContainer__2kTpC",empty:"styles_empty__XvMyC",emptyPlayer:"styles_emptyPlayer__WHPi6",progress:"styles_progress__ULW9V",slider:"styles_slider__3_Mkb",emptySlider:"styles_emptySlider__3p9Ad",buttons:"styles_buttons__i4fo8",playButton:"styles_playButton__fmvI6"}},JmTP:function(e,t,n){e.exports={headerContainer:"styles_headerContainer__3jyUX"}},TpEK:function(e,t,n){e.exports={wrapper:"app_wrapper__X8llh"}},hUgY:function(e,t,n){"use strict";n.r(t);var a=n("nKUr");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){i(1,arguments);var t=o(e);return!isNaN(t)}var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var c={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var a=String(t),r=n||{},i=a.match(e.matchPattern);if(!i)return null;var o=i[0],s=a.match(e.parsePattern);if(!s)return null;var u=e.valueCallback?e.valueCallback(s[0]):s[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(o.length)}}}function f(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var u,d=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(d)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(d)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(d.length)}}}var g={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:c,formatRelative:function(e,t,n,a){return m[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:h({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:f({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:f({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){i(2,arguments);var n=o(e).getTime(),a=b(t);return new Date(n+a)}function v(e,t){i(2,arguments);var n=b(t);return w(e,-n)}function p(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var y={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return p("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):p(n+1,2)},d:function(e,t){return p(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return p(e.getUTCHours()%12||12,t.length)},H:function(e,t){return p(e.getUTCHours(),t.length)},m:function(e,t){return p(e.getUTCMinutes(),t.length)},s:function(e,t){return p(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return p(Math.floor(a*Math.pow(10,n-3)),t.length)}},x=864e5;function j(e){i(1,arguments);var t=1,n=o(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function M(e){i(1,arguments);var t=o(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=j(a),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=j(s);return t.getTime()>=r.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function T(e){i(1,arguments);var t=M(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=j(n);return a}var P=6048e5;function C(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,s=null==r?0:b(r),u=null==n.weekStartsOn?s:b(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=o(e),c=d.getUTCDay(),m=(c<u?7:0)+c-u;return d.setUTCDate(d.getUTCDate()-m),d.setUTCHours(0,0,0,0),d}function O(e,t){i(1,arguments);var n=o(e,t),a=n.getUTCFullYear(),r=t||{},s=r.locale,u=s&&s.options&&s.options.firstWeekContainsDate,d=null==u?1:b(u),c=null==r.firstWeekContainsDate?d:b(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(a+1,0,c),m.setUTCHours(0,0,0,0);var l=C(m,t),h=new Date(0);h.setUTCFullYear(a,0,c),h.setUTCHours(0,0,0,0);var f=C(h,t);return n.getTime()>=l.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function D(e,t){i(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:b(r),s=null==n.firstWeekContainsDate?o:b(n.firstWeekContainsDate),u=O(e,t),d=new Date(0);d.setUTCFullYear(u,0,s),d.setUTCHours(0,0,0,0);var c=C(d,t);return c}var W=6048e5;var k="midnight",S="noon",U="morning",E="afternoon",N="evening",q="night";function Y(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+p(i,2)}function _(e,t){return e%60===0?(e>0?"-":"+")+p(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+p(Math.floor(r/60),2)+n+p(r%60,2)}var X={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return y.y(e,t)},Y:function(e,t,n,a){var r=O(e,a),i=r>0?r:1-r;return"YY"===t?p(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):p(i,t.length)},R:function(e,t){return p(M(e),t.length)},u:function(e,t){return p(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return p(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return p(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return p(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){i(1,arguments);var n=o(e),a=C(n,t).getTime()-D(n,t).getTime();return Math.round(a/W)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):p(r,t.length)},I:function(e,t,n){var a=function(e){i(1,arguments);var t=o(e),n=j(t).getTime()-T(t).getTime();return Math.round(n/P)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):p(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,n){var a=function(e){i(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/x)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):p(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return p(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return p(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return p(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?S:0===r?k:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?N:r>=12?E:r>=4?U:q,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):p(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return _(r);case"XXXX":case"XX":return H(r);case"XXXXX":case"XXX":default:return H(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return _(r);case"xxxx":case"xx":return H(r);case"xxxxx":case"xxx":default:return H(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");case"OOOO":default:return"GMT"+H(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");case"zzzz":default:return"GMT"+H(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return p(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return p((a._originalDate||e).getTime(),t.length)}};function z(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function L(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var F={p:L,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return z(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",z(r,t)).replace("{{time}}",L(i,t))}};function B(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Q=["D","DD"],A=["YY","YYYY"];function G(e){return-1!==Q.indexOf(e)}function R(e){return-1!==A.indexOf(e)}function J(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,$=/''/g,Z=/[a-zA-Z]/;function ee(e){return e.match(V)[1].replace($,"'")}var te={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var ne={date:d({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ae={lastWeek:function(e,t,n){var a=e.getUTCDay();return"'"+(0===a||6===a?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var re={code:"pt-BR",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof te[e]?te[e]:1===t?te[e].one:te[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"em "+a:"h\xe1 "+a:a},formatLong:ne,formatRelative:function(e,t,n,a){var r=ae[e];return"function"===typeof r?r(t,n,a):r},localize:{ordinalNumber:function(e,t){var n=Number(e),a=String((t||{}).unit);return"week"===a||"isoWeek"===a?n+"\xaa":n+"\xba"},era:l({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:l({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:h({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:f({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:f({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},ie=n("JmTP"),oe=n.n(ie);function se(){var e=function(e,t,n){i(2,arguments);var a=String(t),r=n||{},u=r.locale||g,d=u.options&&u.options.firstWeekContainsDate,c=null==d?1:b(d),m=null==r.firstWeekContainsDate?c:b(r.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=u.options&&u.options.weekStartsOn,h=null==l?0:b(l),f=null==r.weekStartsOn?h:b(r.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var w=o(e);if(!s(w))throw new RangeError("Invalid time value");var p=B(w),y=v(w,p),x={firstWeekContainsDate:m,weekStartsOn:f,locale:u,_originalDate:w};return a.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,F[t])(e,u.formatLong,x):e})).join("").match(I).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ee(n);var i=X[a];if(i)return!r.useAdditionalWeekYearTokens&&R(n)&&J(n,t,e),!r.useAdditionalDayOfYearTokens&&G(n)&&J(n,t,e),i(y,n,u.localize,x);if(a.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(new Date,"EEEEEE , d MMMM",{locale:re});return Object(a.jsxs)("header",{className:oe.a.headerContainer,children:[Object(a.jsx)("img",{src:"/logo.svg",alt:"Logo"}),Object(a.jsx)("p",{children:"O melhor para voc\xea ouvir, sempre"}),Object(a.jsx)("span",{children:e})]})}n("t+Ps");var ue=n("TpEK"),de=n.n(ue),ce=n("BLsd"),me=n.n(ce);function le(){return Object(a.jsxs)("div",{className:me.a.playerContainer,children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"/playing.svg",alt:"tocando"}),Object(a.jsx)("strong",{children:"Tocando Agora"})]}),Object(a.jsx)("div",{className:me.a.emptyPlayer,children:Object(a.jsx)("strong",{children:"Selecione um podcast para ouvir"})}),Object(a.jsxs)("footer",{className:me.a.empty,children:[Object(a.jsxs)("div",{className:me.a.progress,children:[Object(a.jsx)("span",{children:"00:00"}),Object(a.jsx)("div",{className:me.a.slider,children:Object(a.jsx)("div",{className:me.a.emptySlider})}),Object(a.jsx)("span",{children:"00:00"})]}),Object(a.jsxs)("div",{className:me.a.buttons,children:[Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/shuffle.svg",alt:"Embaralhar"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/play-previous.svg",alt:"Tocar anterior"})}),Object(a.jsx)("button",{type:"button",className:me.a.playButton,children:Object(a.jsx)("img",{src:"/play.svg",alt:"Tocar"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/play-next.svg",alt:"Tocar Proximo"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/repeat.svg",alt:"Repetir"})})]})]})]})}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)("div",{className:de.a.wrapper,children:[Object(a.jsxs)("main",{children:[Object(a.jsx)(se,{}),Object(a.jsx)(t,fe({},n))]}),Object(a.jsx)(le,{})]})}},"t+Ps":function(e,t,n){}},[[0,0,1,2]]]);