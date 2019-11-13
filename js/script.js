function edited() {
    document.getElementsByTagName('p')[0].contentEditable = "true";
    document.getElementsByTagName('small')[0].contentEditable = "true";
    var i;
    for (i = 0; i < 6; i++) {
        document.getElementsByTagName('h1')[i].contentEditable = "true";
    }

    var count;
    for (count = 0; count < 5; count++) {
        document.getElementsByTagName('ul')[count].contentEditable = "true";
    }


}

function editednot() {
    document.getElementsByTagName('p')[0].contentEditable = "false";
    document.getElementsByTagName('small')[0].contentEditable = 'false';
    var i;
    for (i = 0; i < 6; i++) {
        document.getElementsByTagName('h1')[i].contentEditable = "false";
    }

    var count;
    for (count = 0; count < 5; count++) {
        document.getElementsByTagName('ul')[count].contentEditable = "false";
    }
}