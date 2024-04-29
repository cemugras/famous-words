const {fromEnv} = require("@aws-sdk/credential-providers");
const {DynamoDBClient, QueryCommand, ScanCommand} = require('@aws-sdk/client-dynamodb');
const dynamoDBClient = new DynamoDBClient({
    region: "eu-north-1",
    credentials: fromEnv(),
});
const tableName = 'famous-quotes';

async function getRecordById(id) {
    try {
        const queryItemCommand = new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': {N: id.toString()},
            },
        });
        const response = await dynamoDBClient.send(queryItemCommand);

        if (response.Count === 0) {
            return {result: 'Warning', resultDesc: 'No data found.'};
        }

        const queryItems = response.Items;

        const person = Object.fromEntries(
            Object.entries(queryItems[0]).map(([key, value]) => {
                if ('S' in value) {
                    return [key, value['S']];
                } else if ('N' in value) {
                    return [key, value['N']];
                } else if ('L' in value) {
                    return [key, value['L'].map(item => item['S'])];
                } else {
                    return [key, value];
                }
            })
        );

        return {result: 'Success', person: person};
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getRecordByName(name) {
    try {
        const scanItemsCommand = new ScanCommand({
            TableName: tableName,
            FilterExpression: 'personName = :person',
            ExpressionAttributeValues: {
                ':person': {S: name.toString()},
            },
        });
        const response = await dynamoDBClient.send(scanItemsCommand);

        if (response.Count === 0) {
            return {result: 'Warning', resultDesc: 'No data found.'};
        }

        const scanItems = response.Items;

        const person = Object.fromEntries(
            Object.entries(scanItems[0]).map(([key, value]) => {
                if ('S' in value) {
                    return [key, value['S']];
                } else if ('N' in value) {
                    return [key, value['N']];
                } else if ('L' in value) {
                    return [key, value['L'].map(item => item['S'])];
                } else {
                    return [key, value];
                }
            })
        );

        return {result: 'Success', person: person};
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getRecordsByCategory(category) {
    try {
        const scanItemsCommand = new ScanCommand({
            TableName: tableName,
            FilterExpression: 'category = :categoryName',
            ExpressionAttributeValues: {
                ':categoryName': {S: category.toString()},
            },
        });
        const response = await dynamoDBClient.send(scanItemsCommand);

        if (response.Count === 0) {
            return {result: 'Warning', resultDesc: 'No data found.'};
        }

        const scanItems = response.Items;

        const records = scanItems.map(item => {
            return Object.fromEntries(
                Object.entries(item).map(([key, value]) => {
                    if ('S' in value) {
                        return [key, value['S']];
                    } else if ('N' in value) {
                        return [key, value['N']];
                    } else if ('L' in value) {
                        return [key, value['L'].map(item => item['S'])];
                    } else {
                        return [key, value];
                    }
                })
            );
        });

        return {result: 'Success', people: records};
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllCategories() {
    try {

        const scanCommand = new ScanCommand({
            TableName: tableName,
            ProjectionExpression: 'category',
        });
        const response = await dynamoDBClient.send(scanCommand);

        if (response.Count === 0) {
            return {result: 'Warning', resultDesc: 'No data found.'};
        }

        const distinctCategories = [...new Set(response.Items.map(item => item.category.S).sort())];

        return {result: 'Success', person: distinctCategories};
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllNames() {
    try {

        const scanCommand = new ScanCommand({
            TableName: tableName,
            ProjectionExpression: 'id,personName',
        });
        const response = await dynamoDBClient.send(scanCommand);

        if (response.Count === 0) {
            return {result: 'Warning', resultDesc: 'No data found.'};
        }

        const sortedDistinctPeople = response.Items.map(item => ({
            id: parseInt(item.id.N), // id'yi sayısal değere dönüştürüyoruz
            person: item.personName.S
        })).sort((a, b) => a.id - b.id);

        return {result: 'Success', people: sortedDistinctPeople};
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {getRecordById, getRecordByName, getRecordsByCategory, getAllCategories, getAllNames};