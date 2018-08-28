function input_process()
{
	if (event.keyCode === 13) 
	{
		var terminal_cont= document.getElementById('terminal-cont');
		var hide_line = document.getElementById('input').value;
		$("#input").remove();
		terminal_cont.innerHTML += hide_line;

		var command= hide_line.toLowerCase();
		if (command=='hello') 
		{
			terminal_cont.innerHTML += '<br>heheheh terminal working';

		}
		else if(command.search('setbg')!=-1)
		{
			var bg_color= command.substr(6, 7);
			document.getElementById('maincont').style.backgroundColor=bg_color;
		}
		else if(command)
		{
			
		}
		get_new_line();
	}
}

function get_new_line()
{
	var terminal_cont= document.getElementById('terminal-cont');
	var new_line='<br>System@WeLp ~: guest$ <input type="text" class="terminal_input" onkeyup="input_process()" id="input" spellcheck="false">';
	sleep(1000);
	terminal_cont.innerHTML += new_line;
	document.getElementById('input').focus();
}