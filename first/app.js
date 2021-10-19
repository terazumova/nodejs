const fs = require('fs');
const moment = require('moment');

const currentLaunch = moment().locale('ru').format('DD/MM/YYYY HH:mm:ss'); 
const lastLaunch = fs.readFileSync('last-launch.txt', 'utf-8');

if (!lastLaunch) {
  console.log('Окей, ты меня запустил. Ты доволен?');

  fs.writeFile('last-launch.txt', currentLaunch, function (err) {
    if (err) throw err;
  });
} else {
  const ms = moment(currentLaunch,"DD/MM/YYYY HH:mm:ss").diff(moment(lastLaunch,"DD/MM/YYYY HH:mm:ss"));
  const d = moment.duration(ms);
  
  const diffText = (d.days() ? d.days() + ' часов ' : '') + (d.hours() ? d.hours() + ' часов ' : '') + (d.minutes() ? d.minutes() + ' минут ' : '') +  (d.seconds() ? d.seconds() + ' секунд' : '');

  console.log(`Ну ты же уже запускал меня ${diffText} тому назад`);
}