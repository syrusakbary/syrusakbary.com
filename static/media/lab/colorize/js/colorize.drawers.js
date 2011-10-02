var Drawer1 = function () {
        var self_ = this;
        this.z = 0;
        this.draw = function (ctx, freqByteData) {
            const SPACER_WIDTH = 1;
            const BAR_WIDTH = 1;
            const numBars = Math.round(canvas.width / SPACER_WIDTH);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var y = (canvas.height / 2) + 3;
            for (var i = 0; i < numBars; ++i) {
                var magnitude = freqByteData[i];
                var height = magnitude / (canvas.height / 50);
                ctx.fillRect(i * SPACER_WIDTH, y, BAR_WIDTH, -height);
                ctx.fillRect(i * SPACER_WIDTH, y, BAR_WIDTH, height);
            }
            blur(10);
        }
    }
var Tunel = function () {
        var self_ = this;
        this.z = 0;
        this.r = 0;
        const inc = .5;
        this.draw = function (ctx, freqByteData) {
            rotozoom(0.01, 1.1);
            alpha('0.1');
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (i = 0; i < freqByteData.length; i++) {
                var l = freqByteData[i];
                x = Math.sin(i / (freqByteData.length / 2) * Math.PI) * inc * l + Math.sin(self_.z) * inc + canvas.width / 2;
                y = Math.cos(i / (freqByteData.length / 2) * Math.PI) * inc * l + Math.cos(self_.z) * inc + canvas.height / 2;
                x = parseInt(x);
                y = parseInt(y);
                r = 255;
                g = (1 - 2 * i / freqByteData.length) * 255;
                b = i / freqByteData.length * 255;
                setPixel(imageData, x, y, r, g, b, 0xff);
            }
            self_.z += 0.015
            self_.r += 0.015
            ctx.putImageData(imageData, 0, 0);
            blur(4);
        }
    }
var Basic = function () {
        var self_ = this;
        this.draw = function (ctx, freqByteData) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 0; i < freqByteData.length; i++) {
                var l = freqByteData[i];
            } /*blur(4);*/
        }
    }
var Circle = function () {
        var self_ = this;
        this.bl = 0;
        this.draw = function (ctx, freqByteData) {
            const inc = .5;
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            center = [canvas.width / 2, canvas.height / 2];
            rotozoom(0.01, 1.02);
            alpha('0.06');
            if (self_.bl > 9) {
                fastblur(1);
                self_.bl = 0;
                //alpha('0.01');
            }
            self_.bl += 1;
            gradObj = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradObj.addColorStop(0.2, '#A21');
            gradObj.addColorStop(0.8, '#296');
            ctx.strokeStyle = gradObj;
            ctx.beginPath();
            //ctx.moveTo(center[0], center[1]); 
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 0; i < freqByteData.length; i++) {
                var l = freqByteData[i];
                x = Math.sin(i / (freqByteData.length / 2) * Math.PI) * inc * l + center[0];
                y = Math.cos(i / (freqByteData.length / 2) * Math.PI) * inc * l + center[1];
                ctx.lineTo(parseInt(x), parseInt(y));
            }
            ctx.closePath();
            ctx.stroke(); /*blur(4);*/
        }
    }
var Explosion = function () {
        var self_ = this;
        this.type = FREQUENCY;
        this.draw = function (ctx, freqByteData) {
            const inc = .4;
            blur(2);
            alpha(.2);
            //rotate(.2);
            //rotozoom(0.02,.99);
            center = [canvas.width / 2, canvas.height / 2];
            gradObj = ctx.createRadialGradient(center[0], center[1], 0, center[0], center[1], 300);
            gradObj.addColorStop(0.1, '#000');
            gradObj.addColorStop(0.2, '#3D6');
            gradObj.addColorStop(0.2, '#D34');
            ctx.strokeStyle = gradObj;
            ctx.beginPath();
            //ctx.moveTo(center[0], center[1]); 
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 0; i < freqByteData.length; i++) {
                var l = freqByteData[i];
                x = Math.sin(i / (freqByteData.length / 16) * Math.PI) * inc * l + center[0];
                y = Math.cos(i / (freqByteData.length / 16) * Math.PI) * inc * l + center[1];
                ctx.lineTo(center[0], center[1]);
                ctx.lineTo(parseInt(x), parseInt(y));
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
var BasicWave = function () {
        var self_ = this;
        this.rotation = .075;
        this._r = 0;
        this.draw = function (ctx, freqByteData) {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            a = Math.max((util.max(freqByteData) - 128) / 128, 1);
            alpha(.13);
            rotate(self_.rotation);
            blur(1);
            var step = parseInt(freqByteData.length / canvas.width);
            gradObj = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradObj.addColorStop(0.3, '#921');
            gradObj.addColorStop(0.5, '#346');
            gradObj.addColorStop(0.7, '#2D6');
            ctx.strokeStyle = gradObj;
            ctx.beginPath();
            ctx.moveTo(0, freqByteData[0] * canvas.height / 256);
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 1; i < canvas.width; i++) {
                ctx.lineTo(i, freqByteData[i * step] * canvas.height / 256);
            }
            self_.r += .1;
            ctx.stroke();
            rotate(self_.r); /*blur(4);*/
        }
    }
var RotateWave = function () {
        var self_ = this;
        this.rotation = 0;
        this.draw = function (ctx, freqByteData) {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            a = Math.max((util.max(freqByteData) - 128) / 128, 1);
            alpha(.05);
            //rotate(-self_.rotation);
            fastblur(1);
            rotozoom(-self_.rotation + 0.02, 1);
            var step = parseInt(freqByteData.length / canvas.width);
            gradObj = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradObj.addColorStop(0.3, '#A00');
            gradObj.addColorStop(0.7, '#53899C');
            ctx.strokeStyle = gradObj;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 0; i < canvas.width / 2; i++) {
                ctx.lineTo(canvas.width / 2 + (2 * i + 2), (freqByteData[i * step * 2] / 256 / 2 - 1 / 4 + 1 / 2) * canvas.height);
            }
            //self_.r += .1;
            ctx.stroke();
            rotate(self_.rotation);
            self_.rotation -= .03;
            //rotate(self_.r);
            /*blur(4);*/
        }
    }
var BasicWave1 = function () {
        var self_ = this;
        this.rotation = .15;
        this.draw = function (ctx, freqByteData) {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            a = Math.max((util.max(freqByteData) - 128) / 128, 1);
            rotozoom(self_.rotation, .9);
            alpha(.2);
            blur(4);
            var step = parseInt(freqByteData.length / canvas.width);
            gradObj = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradObj.addColorStop(0.3, '#139');
            gradObj.addColorStop(0.6, '#A46');
            ctx.strokeStyle = gradObj;
            ctx.beginPath();
            ctx.moveTo(0, freqByteData[0] * canvas.height / 256);
/*      rotozoom(0.01,1.1);
      alpha('0.1');*/
            for (i = 1; i < canvas.width; i++) {
                ctx.lineTo(i, freqByteData[i * step] * canvas.height / 256);
            }
            ctx.stroke(); /*blur(4);*/
        }
    }
