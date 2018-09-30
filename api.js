(function(){
    'use strict';

    var list = '';
    window.onload = function () {
        list=document.getElementById('list');
        function make100calls(){
            for(var i=0; i<100; i++){
                console.log(i);
                makeRequest(i);

            }
        }
        make100calls(); 
        setInterval(function() {
            list.innerHTML = '';
            make100calls();
        }, 10000)
      
    }




    function makeRequest(number){
        let url = `http://numbersapi.com/${number}`;
        let request = new XMLHttpRequest();
        request.onReadystatechange = function() {
            if(this.readyState ==4 && this.status == 200){
                createNode(this.responseText);
            }
        }
    request.open('GET', url, true);
    request.send();
    }


    function createNode(data){
        var node = document.createElement('li');
        var text = document.createTextNode(data);
        node.openChild(text);
        list.appendChild(node);
    }
})()