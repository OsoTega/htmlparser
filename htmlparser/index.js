var prevLength = 0;
function runCode(event){
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var javascriptCode = document.getElementById('javascript-code').value;

    var currentLength = (htmlCode.length+cssCode.length+javascriptCode.length);
    if(currentLength != prevLength)
    {
        var display = document.getElementById('display');
        var style = document.getElementsByTagName('style')[0];

        var script =  document.createElement('script');
        
        style.innerHTML = cssCode;
        script.innerText = javascriptCode;

        display.innerHTML = htmlCode;
        if(document.getElementsByTagName('script').length > 1)
        {
            document.body.replaceChild(script, document.getElementsByTagName('script')[1]);
        }else{
            document.body.appendChild(script);
        }
    }
    prevLength = (htmlCode.length+cssCode.length+javascriptCode.length);
}

/**
 * <button onclick='sayHello()'>Say Hello</button>
 * 
 * function sayHello(){
console.log('Hello');
}


                    <div id="holder">
<button onclick="displayText()">Click Me</button>
<h1></h1>
</div>

     #holder{
background-color: rgb(255,120,200);
width: 200px;
height: 200px;
display: flex;
justify-content: center;
align-items:center;
}

                    function displayText(){
   var h1Text = document.getElementsByTagName('h1')[0];
h1Text.innerHTML = 'Clicked Button';
}

displayText();
console.log('Hello');

 */