const fs = require('fs');
const { DateTime } = require("luxon");

const currentLaunch = Date.now();
const lastLaunch = fs.readFileSync('last-launch.txt', 'utf-8');

if (!lastLaunch) {
  console.log('Окей, ты меня запустил. Ты доволен?');

  fs.writeFile('last-launch.txt', currentLaunch, function (err) {
    if (err) throw err;
  });
} else {
  const currentLaunchParsed = DateTime.fromJSDate((new Date(currentLaunch)));
  const lastLaunchParsed = DateTime.fromJSDate((new Date(Number(lastLaunch))));

  const diffInDays = currentLaunchParsed.diff(lastLaunchParsed, ['days', 'hours', 'minutes', 'seconds']);
  const diffText = (diffInDays.values.days ? diffInDays.values.days + ' часов ' : '') + (diffInDays.values.hours ? diffInDays.values.hours + ' часов ' : '') + (diffInDays.values.minutes ? diffInDays.values.minutes + ' минут ' : '') +  (diffInDays.values.seconds ? diffInDays.values.seconds + ' секунд' : '');

  console.log(`Ну ты же уже запускал меня ${diffText} тому назад`);
}