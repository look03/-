var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var MAX_HEIGTH_COL = 150;
var PLACE_NAME = 270;
var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20,'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mont';
  ctx.fillText('Ура вы победили!',110, 50);
  ctx.fillText('Список результатов:',110, 70);
  var distanceColumn = 150;
  for (var i = 0; i < names.length; i++) { 
        ctx.fillStyle = (names[i] == 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random() + ')'; 
        ctx.fillRect(distanceColumn, 250, 40, -(MAX_HEIGTH_COL * times[i]) / Math.max.apply(null, times));
        ctx.font = '16px PT Mont';
        ctx.fillStyle = "#000";
        ctx.fillText(Math.ceil(times[i]), distanceColumn, PLACE_NAME - 30 - (MAX_HEIGTH_COL *  times[i]) / Math.max.apply(null, times));
        ctx.fillText(names[i], distanceColumn, PLACE_NAME);
        distanceColumn += 100;
    }
}