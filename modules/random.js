export function randomAllChar(lentgh) {
    var charList = [];
    var string = ''
    for (var i = 1; i <=lentgh; i++) {
        let randomNum = Math.floor(32 + Math.random() * 95);
        string += String.fromCharCode(randomNum)
    }
    return string;
}

export function randomString(length,option = ['number','lower','upper']) {
    let charList = [], string = '', range = 0;
    for (var index = 0; index <= option.length - 1; index++) {
        let selection = option[index]
        switch (selection) {
            case 'number':
                for (var i = 48; i <= 57; i++) {
                    charList.push(String.fromCharCode(i));
                }
                range += 10; break;
            case 'upper':
                for (var i = 65; i <= 90; i++) {
                    charList.push(String.fromCharCode(i));
                }
                range += 26; break;
            case 'lower':
                for (var i = 97; i <= 122; i++) {
                    charList.push(String.fromCharCode(i));
                }
                range += 26; break;
            default:
                throw Error('Option not found')
                break;
        }
    }
    for (var i = 1; i <= length; i++) {
        let randomNum = Math.floor(Math.random() * range);
        string += charList[randomNum]
    }
    return string;
}