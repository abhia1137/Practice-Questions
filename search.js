
					var fs = require('fs');
					var pro1 = /2013/gi; 
					var res1 = fs.readFileSync('BestResume.doc', 'utf8').match(pro1);
					console.log();
					
					var pro2 = /2013/gi; 
					var res2 = fs.readFileSync('file.txt', 'utf8').match(pro2);
										
					var pro3 = /2013/gi; 
					var res3 = fs.readFileSync('file2.txt', 'utf8').match(pro3);
					
					
					if(res1.length>res2.length && res1.length>res3.length){
						
						console.log('Resume one is relevent: '+ res1.length);
					}
					else if(res2.length> res1.length && res2.length>res3.length){
						console.log('Resume two is relevent: ' +res2.length+  + res);
						
					}
					else{
						console.log('Resume 3 is relevent: ' +res3.length);
						
					}