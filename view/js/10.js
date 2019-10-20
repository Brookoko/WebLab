'use strict';

// eslint-disable-next-line no-unused-vars
function wordsCounter(form) {
  const text = form.words.value;
  form.result.value = text.split(' ').filter(el => el).length;
}

// eslint-disable-next-line no-unused-vars
function wordReplacer(form) {
  const oldWord = form.old_word.value;
  const newWord = form.new_word.value;
  const oldText = form.words.value;
  form.result.value = oldText.replace(new RegExp(oldWord, 'g'), newWord);
}

// eslint-disable-next-line no-unused-vars
function spaceDeleter(form) {
  const str = form.words.value;
  const splitedText = str.split(' ');
  let newText = '';
  for (const item of splitedText) {
    if (item !== '') {
      newText += item + ' ';
    }
  }
  form.result.value = newText;
}

