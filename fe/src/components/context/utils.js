function convertNameForApiCall(str) {
    const strName = str.replace('-quotes-and-life', '').replace('/', '').replaceAll('-', ' ');
    return strName.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

module.exports = {convertNameForApiCall};