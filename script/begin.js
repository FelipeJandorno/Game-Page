canvas_header = document.getElementById("header");
context_header = canvas_header.getContext("2d");

let header_window_width = window.innerWidth;
let header_window_height = window.innerHeight;

canvas_header.width = header_window_width;
canvas_header.height = header_window_height;
canvas_header.style.background = "#daf8";