$(document).ready(function(){
    let list = $('list');
    list.append('Hello World');

    function networkRequest(){
        $.ajax({
            url: 'http://numbersapi.com/$(value)',
            method: 'get',
            success: function(data){
                console.log(data);

            list.append(`<li>$data</li>`);
            }
        })
    }

    networkRequest();
})