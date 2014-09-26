function dateEquals(date1,date2)
{
	if (date1==null || date2==null)
	{
		return false;	
	}
	return !(date1>date2) && !(date1<date2);
}

var graphReplaceHtmlEntites = (function() {
  var translate_re = /&(nbsp|amp|quot|lt|gt|&#0039);/g;
  var translate = {
    "nbsp": " ", 
    "amp" : "&", 
    "quot": "\"",
    "lt"  : "<", 
    "gt"  : ">",
    "&#0039" : "\'"
  };
  return function(s) {
    return ( s.replace(translate_re, function(match, entity) { 
      return translate[entity]; 
    }) );
  }
})();

