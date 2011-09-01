(function($){
	$.fn.typewriter = function( speed, callback ) {
		if ( typeof callback !== 'function' ) callback = function(){};
		var write = function( e, text, time, isInTag,now ) {
		  if (now===undefined) now = 0;
			//var next = $(e).html().length + 1;
			var thisChar = text.substr(now, 1);
			//alert(thisChar);
			var put = false;
			if( thisChar == '<' ){ isInTag = true;  put=true;}
	        if( thisChar == '>' ){ isInTag = false; put=true;};
			if ( now <= text.length ) {
				$(e).html( text.substr( 0, now ) );
				var w = function( ) {
					   write( e, text, time,isInTag,now+1 );
				    };
				if (isInTag) {
				    
				     w();
				}
				else {
				    setTimeout(w , time);
				};
			} else {
				e.callback();
			}
		};
		return this.each(function() {
			this.callback = callback;
			var text = $(this).html();
			var time = speed;
			
			$(this).text('');
			
			write( this, text, time , false )
		});
	}
}(jQuery));