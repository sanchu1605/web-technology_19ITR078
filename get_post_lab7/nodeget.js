http=require('http');
url=require('url');
querystring = require('querystring');
function onRequest(request,response)
{
    var path =url.parse(request.url).pathname;
    console.log('request for '+path+' recived');
    var query = url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)['name'];
    var roll=querystring.parse(query)['roll'];
    var dept=querystring.parse(query)['dept'];
    var gender=querystring.parse(query)['gender'];
    var email=querystring.parse(query)['email'];
    var mob=querystring.parse(query)['mob'];
   var yr=querystring.parse(query)['yr'];
    response.write('Hello '+name+'...\n\n,Your Roll number is'+roll+'\n\nYour Department is '+dept+'\n\nYour Gender '+gender+'\n\nYour Email id is '+email);
    response.write('\n\nYour Mobile number is '+mob+'\n\nYour Year Of Study is '+yr);
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log('server has started');