function checkData(data, dataName) {
    if (!data) throw Error('Missing parameter ' + dataName + '.');
}

module.exports = {checkData};