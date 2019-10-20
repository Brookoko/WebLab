'use strict'

const zodiacAnimal = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
const lastDay = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20];
const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];
const color = ['Yellow', 'White', 'Black', 'Green', 'Red'];

const week = obj => {
  const date = new Date(obj.date.value);
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  obj.weekRes.value = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const zodiac = obj => {
  const date = new Date(obj.date.value);
  const day = date.getDate();
  const month = date.getMonth();
  obj.zodRes.value = (day > lastDay[month]) ? zodiacAnimal[month + 1] : zodiacAnimal[month];
}

const chineseZodiac = obj => {
  const date = new Date(obj.date.value);
  const year = date.getUTCFullYear() - 4;
  const c =  color[Math.floor((year % 60) / 12)];
  const anim = animals[year % animals.length];
  obj.chRes.value = c + ' ' + anim;
}

