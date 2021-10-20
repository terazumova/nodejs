try {
  const fs = require('fs');
  const { getAverageColor } = require('fast-average-color-node');

  const picPath = process.env.PIC;
 
  if (!picPath) {
    throw new Error('Путь не задан.');
  }

  fs.readFile(picPath, function(err, data) {
    try {
      if (err) {
        throw new Error('Путь к картинке неверный.');
      }

      getAverageColor(picPath).then(color => {
        console.log(color);
      });

    } catch (e) {
      console.log(e.message);
    }
  })

} catch (e) {
  console.log(e.message);
}