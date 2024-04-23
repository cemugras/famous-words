const express = require('express');

const app = express();
const port = 3001;

const {
    getRecordById,
    getRecordByName,
    getRecordsByCategory,
    getAllCategories,
    getAllNames
} = require('./utils/dynamoClient.js');
const {checkData} = require('./utils/validateData.js');

app.get('/api/getRecordById', async (req, res) => {
    console.log("[getRecordById] STARTED");
    try {
        const id = req.query.id;

        checkData(id, 'id');

        const result = await getRecordById(id);

        res.status(200).json(result);
    } catch (error) {
        console.error('[getRecordById] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: error.message});
    }
})

app.get('/api/getRecordByName', async (req, res) => {
    console.log("[getRecordByName] STARTED");
    try {
        const name = req.query.name;

        checkData(name, 'name');

        const result = await getRecordByName(name);

        res.status(200).json(result);
    } catch (error) {
        console.error('[getRecordByName] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: error.message});
    }
})

app.get('/api/getRecordsByCategory', async (req, res) => {
    console.log("[getRecordsByCategory] STARTED");
    try {
        const category = req.query.category;

        checkData(category, 'category');

        const result = await getRecordsByCategory(category);

        res.status(200).json(result);
    } catch (error) {
        console.error('[getRecordsByCategory] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: error.message});
    }
})

app.get('/api/getAllCategories', async (req, res) => {
    console.log("[getAllCategories] STARTED");
    try {
        const result = await getAllCategories();

        res.status(200).json(result);

    } catch (error) {
        console.error('[getAllCategories] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: error.message});
    }
})

app.get('/api/getAllNames', async (req, res) => {
    console.log("[getAllNames] STARTED");
    try {
        const result = await getAllNames();

        res.status(200).json(result);

    } catch (error) {
        console.error('[getAllNames] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: error.message});
    }
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});