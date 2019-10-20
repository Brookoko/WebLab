function wordsCounter(form){
    let text = form.words.value;
    form.result.value = text.split(' ').filter(el => el).length;
}

function wordReplacer(form){
    let old_word = form.old_word.value;
    let new_word = form.new_word.value;
    let old_text = form.words.value;
    form.result.value = old_text.replace(new RegExp(old_word,'g'),new_word);
}

function spaceDeleter(form){
    let str = form.words.value;
    let splited_text = str.split(' ');
    let new_text = '';
    for(let item of splited_text){
        if(item != ''){
            new_text += item + " ";
        }
    }
    form.result.value = new_text;
}

