(function(){
	"use strict";

	

	desc("Default Build!")
	task("default", function(){
		console.log("\n\nBUILD OK!");
		console.log("Hello, I am the default task");
	});


	desc("Not really!");
	task("Google", function(){
		console.log("Google gooble!");
	});

}());