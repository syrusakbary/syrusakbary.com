window.util = window.url || {};

util.max = function (array) {
    var max = array[0];
    var len = array.length;
    for (var i = 0; i < len; ++i) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
util.average = function (array) {
    var sum = 0;
    var len = array.length;
    for (var i = 0; i < len; ++i) {
        sum += array[i];
    }
    return sum / len;
}


function alpha(a) {
    ctx.fillStyle = 'rgba(0,0,0,' + a + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function blur(b) {
    stackBlurCanvasRGBA('fft', 0, 0, canvas.width, canvas.height, b);
}

function fastblur(b) {
    stackBlurCanvasRGB('fft', 0, 0, canvas.width, canvas.height, b);
}

function rotozoom(angle, zoom) {
    var w = canvas.width,
        h = canvas.height;
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    tmpCtx.drawImage(canvas, 0, 0);
    ctx.save();
    ctx.globalCompositeOperation = "copy";
    ctx.clearRect(0, 0, w, h);
    ctx.translate(w / 2, h / 2);
    ctx.rotate(angle);
    ctx.scale(zoom, zoom);
    ctx.drawImage(tmpCanvas, -w / 2, -h / 2);
    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
}

function rotate(angle) {
    var w = canvas.width,
        h = canvas.height;
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    tmpCtx.drawImage(canvas, 0, 0);
    ctx.save();
    ctx.globalCompositeOperation = "copy";
    ctx.clearRect(0, 0, w, h);
    ctx.translate(w / 2, h / 2);
    ctx.rotate(angle);
    ctx.drawImage(tmpCanvas, -w / 2, -h / 2);
    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
}

function zoom(z) {
    stretch(z, z, 0.5, 0.5);
}

function stretch(x, y, ox, oy) {
    if (typeof ox == "undefined") ox = 0;
    if (typeof oy == "undefined") oy = 0;
    var w = canvas.width,
        h = canvas.height;
    tmpCanvas.width = w;
    tmpCanvas.height = h;
    ox *= w;
    oy *= h;
    tmpCtx.clearRect(0, 0, w, h);
    tmpCtx.drawImage(canvas, 0, 0);
    ctx.globalCompositeOperation = "copy";
    ctx.clearRect(0, 0, screenWidth(), screenHeight());
    ctx.drawImage(tmpCanvas, -(x - 1) * ox, -(y - 1) * oy, screenWidth() * x, screenHeight() * y);
    ctx.globalCompositeOperation = "source-over";
}

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}
