import { WebView } from "https://deno.land/x/webview/mod.ts";

const html = `
<html>
<head>
<style>
  html, body{
    height: 300px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  textarea{
    background: #333;
    flex: 1;
    color: white;
    width: 300px;
  }
  button{
    width: 100px;
  }
</style>
</head>
<body>
<textarea id="editor"></textarea>
<div>
  <button onclick="save()">Save</button>
  <span id="msg">loaded</span>
</div>
<script>
var el = document.getElementById("msg")
var textarea = document.getElementById("editor")

function load(){
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          var now = new Date();
          el.innerText = "loaded: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
          editor.value = this.responseText;
      }
  }
  xmlHttpRequest.open('GET','http://127.0.0.1:8899/editor_load',true);
  xmlHttpRequest.send();
}

function save(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://127.0.0.1:8899/editor', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() { 
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var now = new Date();
        el.innerText = "saved: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      }
  }
  xhr.send(textarea.value);
}
load();
</script>
</body>
</html>`

const webview1 = new WebView({
  title: "Deno TextEditor",
  url: "data:text/html," + encodeURIComponent(html),
  width: 300,
  height: 300
});

while (webview1.step()) {
}
