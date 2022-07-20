/*
  Kevin Haryo Kuncoro
  kevin.haryo@gamotions.com
  kevinhyokun91@gmail.com
*/

var head = document.getElementsByTagName('head')[0]; 
var body = document.getElementsByTagName('body')[0];

var is_done_create_and_append_arenamain = false;

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.arenamain_touchpoint { cursor: pointer; }';
head.appendChild(style);

var ins = document.getElementsByClassName("arenamainId");
var curr_ins_index = 0;

// height in percent
var navbar_height = 5;
var iframe_height = 100 - navbar_height;

var arenamain_iframe;

function create_and_append_arenamain(){
  var arenamain_anchor = document.createElement('div');
  arenamain_anchor.id = "arenamain_anchor";
  arenamain_anchor.style.display = "block";
  arenamain_anchor.style.width = "512px";
  arenamain_anchor.style.height = "512px";
  arenamain_anchor.style.backgroundColor = "gray";
  arenamain_anchor.style.position = "absolute";
  arenamain_anchor.style.top = "50%";
  arenamain_anchor.style.left = "50%";
  arenamain_anchor.style.transform = "translate(-50%, -50%)";

  var arenamain_anchor_custom_navbar = document.createElement('div');
  arenamain_anchor_custom_navbar.id = "arenamain_anchor_custom_navbar";
  arenamain_anchor_custom_navbar.style.display = "flex";
  arenamain_anchor_custom_navbar.style.width = "100%";
  arenamain_anchor_custom_navbar.style.height = navbar_height.toString() + "%";
  arenamain_anchor_custom_navbar.style.backgroundColor = "black";
  arenamain_anchor_custom_navbar.style.justifyContent = "space-between";

  var custom_navbar_button_width = "auto";
  var custom_navbar_button_height = "80%";
  var custom_navbar_button_padding = "2px";
  var custom_navbar_button_cursor = "pointer";

  var arenamain_anchor_custom_navbar_back = document.createElement('img');
  arenamain_anchor_custom_navbar_back.style.height = custom_navbar_button_height;
  arenamain_anchor_custom_navbar_back.style.width = custom_navbar_button_width;
  arenamain_anchor_custom_navbar_back.style.padding = custom_navbar_button_padding;
  arenamain_anchor_custom_navbar_back.style.cursor = custom_navbar_button_cursor;
  arenamain_anchor_custom_navbar_back.src = "https://arenamain.id/portal/img/ss_left_btn.png";
  arenamain_anchor_custom_navbar_back.onclick = function(){nav_back();};

  var arenamain_anchor_custom_navbar_close = document.createElement('img');
  arenamain_anchor_custom_navbar_close.style.height = custom_navbar_button_height;
  arenamain_anchor_custom_navbar_close.style.width = custom_navbar_button_width;
  arenamain_anchor_custom_navbar_close.style.padding = custom_navbar_button_padding;
  arenamain_anchor_custom_navbar_close.style.cursor = custom_navbar_button_cursor;
  arenamain_anchor_custom_navbar_close.src = "https://arenamain.id/portal/img/ss_red_close_btn.png";
  arenamain_anchor_custom_navbar_close.onclick = function(){document.exitFullscreen();};

  arenamain_anchor_custom_navbar.appendChild(arenamain_anchor_custom_navbar_back);
  arenamain_anchor_custom_navbar.appendChild(arenamain_anchor_custom_navbar_close);

  arenamain_iframe = document.createElement("iframe");
  arenamain_iframe.id = "arenamain_iframe";
  var iframe_src = ins[curr_ins_index].dataset.iframe_src + "?key=" + ins[curr_ins_index].dataset.clientkey;
  arenamain_iframe.src = iframe_src;
  arenamain_iframe.style.width = "100%";
  arenamain_iframe.style.height = iframe_height.toString() + "%";
  arenamain_iframe.frameBorder = "0";
  arenamain_iframe.allow = " ";

  arenamain_anchor.appendChild(arenamain_anchor_custom_navbar);
  arenamain_anchor.appendChild(arenamain_iframe);

  body.appendChild(arenamain_anchor);
}


function show_arenamain_anchor(index = 0){

  if(!is_done_create_and_append_arenamain){
    create_and_append_arenamain();
    is_done_create_and_append_arenamain = true;
  }
  else{
    if(arenamain_anchor.style.display === "none"){
      arenamain_anchor.style.display = "block";
    }
  }

  if(index != curr_ins_index){
    var iframe_src = ins[index].dataset.iframe_src + "?key=" + ins[index].dataset.clientkey;
    arenamain_iframe.src = iframe_src;
  }

  curr_ins_index = index;

  arenamain_anchor.requestFullscreen();
}

function hide_arenamain_anchor(){
    if(!document.fullscreenElement) {
	arenamain_anchor.style.display = "none";
    }
}

function nav_back(){
    history.back();
}

document.documentElement.addEventListener('fullscreenchange', hide_arenamain_anchor);
