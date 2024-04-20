const express = require('express');

const app = express();
const port = 3001;

const {fromEnv} = require("@aws-sdk/credential-providers");
const {DynamoDBClient, QueryCommand, ScanCommand} = require('@aws-sdk/client-dynamodb');
const dynamoDBClient = new DynamoDBClient({
    region: "eu-north-1",
    credentials: fromEnv(),
});
const tableName = 'famous-quotes';

app.get('/api/getRecordById', async (req, res) => {
    console.log("[getRecordById] STARTED");
    try {
        const id = req.query.id;

        if (id) {

            const queryItemCommand = new QueryCommand({
                TableName: tableName,
                KeyConditionExpression: 'id = :id',
                ExpressionAttributeValues: {
                    ':id': {N: id.toString()},
                },
            });
            const response = await dynamoDBClient.send(queryItemCommand);
            const queryItems = response.Items;

            const person = {
                id: queryItems[0].id.N,
                category: queryItems[0].category.S,
                name: queryItems[0].person.S,
                photoUrl: queryItems[0].photo.S,
                quotes: queryItems[0].quotes.L.map(quote => quote.S)
            }

            res.status(200).json({result: 'Success', person: person});
        } else {
            res.status(500).json({result: 'Error', resultDesc: 'Missing parameter id.'});
        }
    } catch (error) {
        console.error('[getRecordById] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: 'Internal server error.'});
    }
})

app.get('/api/getRecordsByCategory', async (req, res) => {
    console.log("[getRecordsByCategory] STARTED");
    try {
        const category = req.query.category;

        if (category) {

            const scanItemsCommand = new ScanCommand({
                TableName: tableName,
                FilterExpression: 'category = :categoryName',
                ExpressionAttributeValues: {
                    ':categoryName': {S: category.toString()},
                },
            });
            const response = await dynamoDBClient.send(scanItemsCommand);
            const scanItems = response.Items;

            res.status(200).json({result: 'Success', people: scanItems});
        } else {
            res.status(500).json({result: 'Error', resultDesc: 'Missing parameter category.'});
        }
    } catch (error) {
        console.error('[getRecordsByCategory] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: 'Internal server error.'});
    }
})

app.get('/api/getRecordsByName', async (req, res) => {
    console.log("[getRecordsByName] STARTED");
    try {
        const name = req.query.name;

        if (name) {
            console.log("name:" + name);

            const scanItemsCommand = new ScanCommand({
                TableName: tableName,
                FilterExpression: 'person = :personName',
                ExpressionAttributeValues: {
                    ':personName': {S: name.toString()},
                },
            });
            const response = await dynamoDBClient.send(scanItemsCommand);
            const scanItems = response.Items;

            console.log("queryItems", scanItems);

            const person = {
                id: scanItems[0].id.N,
                category: scanItems[0].category.S,
                name: scanItems[0].person.S,
                photoUrl: scanItems[0].photo.S,
                quotes: scanItems[0].quotes.L.map(quote => quote.S)
            }

            res.status(200).json({result: 'Success', person: person});
        } else {
            res.status(500).json({result: 'Error', resultDesc: 'Missing parameter category.'});
        }
    } catch (error) {
        console.error('[getRecordsByName] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: 'Internal server error.'});
    }
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});