const express = require("express");
const https = require("https");
const router = express.Router();

router.get("/route", (req, res) => {

	https.get('https://jsonplaceholder.typicode.com/todos/1', (resp) => {
  
		let data = '';

		resp.on('data', (chunk) => {
    		data += chunk;
		});

		resp.on('end', () => {
			res.send(data);
	}	);

	}).on("error", (err) => {
		console.log("Error: " + err.message);
	});

});

module.exports = router;