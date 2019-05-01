var data = [
	{img:1, h1:'Creative', h2:'DUET'},
	{img:2, h1:'Friendly', h2:'DEVIL'},
	{img:3, h1:'Tranquilent', h2:'COMPATRIOT'},
	{img:4, h1:'Insecure', h2:'HUSSLER'},
	{img:5, h1:'Loving', h2:'REBEL'},
	{img:6, h1:'Passionate', h2:'SEEKER'},
	{img:7, h1:'Crazy', h2:'FRIEND'}
]

var g =function(id){
	if(id.substr(0,1)=='.'){
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

function addSliders(){
	var tpl_main = g('template_main').innerHTML
										.replace(/^\s*/,'')
										.replace(/\s*$/,'');
	var tpl_ctrl = g('template_ctrl').innerHTML
										.replace(/^\s*/,'')
										.replace(/\s*$/,'');

	var out_main = [];
	var out_ctrl = [];

	for(i in data){
		var _html_main = tpl_main
						.replace(/{{index}}/g,data[i].img)
						.replace(/{{h2}}/g,data[i].h1)
						.replace(/{{h3}}/g,data[i].h2);	
		var _html_ctrl = tpl_ctrl
						.replace(/{{index}}/g,data[i].img);
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}

	g('template_main').innerHTML = out_main.join('');
	g('template_ctrl').innerHTML = out_ctrl.join('');
}

function switchSlider(n){
	var main = g('main_'+n);
	var ctrl = g('ctrl_'+n);
	var clear_main = g('.main-i');
	var clear_ctrl = g('.ctrl-i');
	for(i=0; i<clear_ctrl.length; i++){
		clear_main[i].className = clear_main[i].className
			.replace(' main-i-active','');
		clear_ctrl[i].className = clear_ctrl[i].className
			.replace(' ctrl-i-active','');
	}
	main.className += ' main-i-active';
	ctrl.className += ' ctrl-i-active';
}

window.onload= function(){
	addSliders();
	switchSlider(1);
}