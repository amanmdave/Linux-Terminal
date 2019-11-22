/*function getPWD(output){
	var pwd = output.match(/<!.*?>/);
	if(!pwd)
		return ['', output];
	pwd = pwd[0];
	output = output.replace(pwd, '');
	pwd = pwd.replace('<!', '');
	pwd = pwd.replace('?>', '');
	return [pwd, output];
}

function getOutputFormated(output){
	if(output[0].includes('hrish:')){
		return output[0];
	}
	for(var i=0;i<output.length;i++){
		if(output[i].length>0){
			if(output[i].includes('<DIR>'))
				output[i] = '<div class="dir">' + output[i].replace('<DIR>', '') + '</div>';
			else
				output[i] = '<div class="file">' + output[i] + '</div>'
		}
	}
	return output.join('');	}
*/	
var wd = [''];

function shellexec(){
	var out = document.getElementById('out');
	var wdt = document.getElementById('wd');
	var command = document.getElementById('command').value;
	var temp = command;
	var argc=1;
	for(var i=0;i<command.length;i++){
	if(command[i]==' ')
		argc+=1;
	}
	//console.log(command + ' ' + argc);
	if(command.length<=0)
		return;
	input = './' + command;
	console.log(input);
	temp = temp.split(' ');
	temp = temp[0];
	if(temp=='ls')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/ls",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='creat')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/creat",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='fork')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/fork",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='kill')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/kill",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	
	else if(temp=='open')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/open",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='read')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/read",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='write')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/write",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>" + "<br>";
            
        },
        async: false
    });
	}
	else if(temp=='man')
	{
		$.ajax({
        type: "POST",
        url: "/system_calls/man",
        data: {input : input},
        success: function(result){
            console.log(result);
            out.innerHTML += '<div class="wd" style="color:red">' + wdt.innerHTML + "</div>" + " $ "+'<div style="color:red">'+input+'</div>'+"<br>";
			out.innerHTML += '<div style="color:red">'+result + '</div>' + "<br>" + "<br>";
            
        },
        async: false
    });
	}
	}
	function keypress(event) {
		if (event.keyCode == 13) {
			shellexec();
		}
	}
