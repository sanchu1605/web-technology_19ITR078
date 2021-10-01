var http=require('http');
var fs = require('fs');
http.createServer(function(req,res)
{
fs.readFile('page1.html', function(err, data1) 
{ 
  fs.readFile('page2.htm', function(err, data2)
  { 
   fs.readFile('page3.html', function(err, data3)
   { 
   fs.readFile('page4.htm', function(err, data4)
   {  
   fs.readFile('page5.htm', function(err, data5)
   { 
	if(req.url=="/carea")
	{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data1);
	return res.end();
	}
	else if(req.url=="/sarea")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data2);
	return res.end();
	}
	else if(req.url=="/rarea")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data3);
	return res.end();
	} 
	else if(req.url=="/tarea")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data4);
	return res.end();
	}
	else if(req.url=="/thankyou")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data5);
	return res.end();
	} 
	else 
	{ 
		res.end("THE URL IS WRONG");
	} 
   });
   });
  });
  });
});
}).listen(8080)