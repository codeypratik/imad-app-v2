var button = document.getElementById('counter');

button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status===200){
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
    };

request.open('GET','http://codeypratik.imad.hasura-app.io/counter', true);
request.send(null);
};

   //submit name
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    var submit=document.getElementById('submit_btn');
    
    submit.onclick = function(){
        //make a request to the server and send the name
        //capture a list of names and render it as list
        
        var names=['name1','name2','name3'];
        var list='';
        for(var i=0;i<names.length;i++){
            list+='<li>'+names[i]+'</li>';
        }
        var ul=document.getElementById('nameslist');
        ul.innerHTML=list;
    };
   