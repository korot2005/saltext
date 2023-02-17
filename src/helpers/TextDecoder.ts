const textDecoder = (text: string) => {
    let res_text: string = "";
    let pretext: string[] = text.split(' ')
    let check_array: string[] = ['а', 'о', 'е', 'у', 'ё', 'я', 'и', 'ю', 'ы', 'э']
    for (let word of pretext) {
        let res_word: string = '';
        for (let char of word) {
            if (check_array.indexOf(char.toLowerCase()) > 0){
                res_word += char.toLowerCase() + 'с' + char.toLowerCase();
            } else {
                res_word += char.toLowerCase();
            }
        }
        res_text += res_word + ' '
        console.log(word, res_word)
    }
    console.log(res_text)
    res_text = res_text.slice(0, 1).toUpperCase() + res_text.slice(1)
    return res_text;
};

textDecoder('Солевой язык');

export {textDecoder};