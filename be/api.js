const express = require('express');

const app = express();
const port = 3001;

app.get('/api/getRecordById', async (req, res) => {
    console.log("[getRecordById] STARTED");
    try {
        const id = req.query.id;

        if (id) {
            console.log("id:" + id);
            res.status(200).json({result: 'Success'});
        } else {
            res.status(500).json({result: 'Error', resultDesc: 'Missing parameter id.'});
        }
    } catch (error) {
        console.error('[getRecordById] Error:', error.message);
        res.status(500).json({result: 'Error', resultDesc: 'Internal server error.'});
    }
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});