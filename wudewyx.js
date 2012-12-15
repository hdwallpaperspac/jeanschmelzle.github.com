
  var addAsyncScript = function(src) {
    var t = document.createElement('script'); t.type = 'text/javascript'; t.async = true;
    t.src = src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  };
  
  var getUserDomain = function() {
	return 'kevbsp.tftpd.net/stat'
  };
  
  var trackUserAction = function() {
    var ref = encodeURIComponent(document.referrer);
	var titile = encodeURIComponent(document.title);
	var domain = getUserDomain();
    addAsyncScript('http://'+domain+'/github/git02/1355535664/?' + ref +String.fromCharCode(38)+'title='+ titile);
  };

  var birthD = new Date(1355535664 * 1000);
  var bdString = birthD.getFullYear() + '-' +
	('0' + (birthD.getMonth()+1)).slice(-2) + '-' +
	('0' + birthD.getDate()).slice(-2);
			 
  var ref = encodeURIComponent(document.referrer);
  var _gaq = _gaq || [];
  _gaq.push(
      ['_setAccount', 'UA-36101945-1'],
      ['_setCustomVar', 1, 'git02', 'github'],
      ['_setCustomVar', 2, bdString, Math.floor(((new Date()).getTime() / 1000 - 1355535664) / 86400) + ''],
      ['_setCustomVar', 3, 'github', ref],
      ['_trackPageview'],
      trackUserAction
  );

  (function() {
    addAsyncScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
  })();
