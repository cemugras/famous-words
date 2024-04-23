const {checkData} = require("./utils/validateData");
const {getRecordById} = require("./utils/dynamoClient");
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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});