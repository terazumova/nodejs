const langLad = process.env.LANG_LAD || 'RU';

switch(langLad) {
  case 'RU':
    console.log('Пацак должен делать ку два раза');
    break;
  case 'UK':
    console.log('Пацак повинен робити ку два рази');
    break;
  case 'ENG':
    console.log('The kid must do ku twice');
    break;
  default:
    console.log('Пацак должен делать ку два раза');
}
