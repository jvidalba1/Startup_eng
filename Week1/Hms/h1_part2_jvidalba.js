#!/usr/bin/env node
var fs = require('fs');
var outfile = "h1_part2_jvidalba.txt";
var out = function(){
	arr = []
	for (var counter = 0; arr.length != 100; counter++)
	{
	    for (var i = 2; i <= counter-1; i++) {
	        if (counter%i === 0) break; 
	    }
	    if(i === counter){
			arr.push(counter);
	    }
	}
	return arr;
}
var salida = out();
fs.writeFileSync(outfile, salida);