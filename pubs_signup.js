console.log('Started function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-2'});

exports.handler = function(event, content, callback){
	
	let login = {
		 TableName: 'pubs',
		 Key: {'userid': 'Dave'}
		};
		
	let params = {
		TableName: 'pubs',
		Item: {
		    userid: "John",
			pub_name: "John Jones",
			date: Date.now(),
			hours: 27,
			allpubs: 16,
			videos: 0,
			returnvisits: 3,
			studies: 0
		}
	};
	
	docClient.put(params, function(err, data){
		if(err){
			callback(err, null);	
		}else{
			callback(null, data);
		}
	});
	
	/*
	docClient.get(login, function(err, data){
		if(err){
			console.log("Error", err);
			callback(err, null);	
		}else{
			console.log("Success", data.Item);
			callback(null, data.Item);
		}
	});	
	*/
}