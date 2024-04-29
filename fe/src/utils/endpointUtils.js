function urlEncryptor(name) {
    name = name.toLowerCase();
    name = name.replaceAll(' ', '-');
    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return name.toString() + '-quotes-and-life';
}

function urlDecryptor(url) {
    url = url.toString().replaceAll('-quotes-and-life', '');
    return url.toString().replaceAll('-', ' ');
}

module.exports = {urlEncryptor, urlDecryptor}