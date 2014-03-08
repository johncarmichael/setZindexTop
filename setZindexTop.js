
jQuery.fn.extend({
	
	//use example:  $('div.someClass').setZIndexTop()  this will set the selector to be the highest z-index on the page.
	setZindexTop: function(){
		var highest = -999;
		$("*").each(function() {
			var current = parseInt($(this).css("z-index"), 10);
			if(current && highest < current) highest = current;
		});
		$(this).css('z-index', (highest + 1));
	}
	
});
