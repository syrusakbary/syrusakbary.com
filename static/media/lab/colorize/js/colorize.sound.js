
var FREQUENCY = 1,
    TIMEDOMAIN = 2;

function Sound(drawers) {
    const MIX_TO_MONO = false;
    const NUM_SAMPLES = 2048;
    const FFT_SIZE = 1024;
    var self_ = this;
    var context_ = new(window.AudioContext || window.webkitAudioContext)();
    var source_ = null;
    var analyser_ = null;
    var reqId_ = null;
    this.drawer = null;
    this.drawers = drawers;
    //this.drawers = [new RotateWave()];
    this.drawer_index = null;
    this.playing = false;
    var processAudio_ = function (time) {
            analyser_.fftSize = 1024;
            var freqByteData = new Uint8Array(analyser_.frequencyBinCount); 
            switch (self_.drawer.type) {
            default:
            case TIMEDOMAIN:
                analyser_.getByteTimeDomainData(freqByteData);
                break;
            case FREQUENCY:
                analyser_.getByteFrequencyData(freqByteData);
                break;
            }
            var percent = Math.min((util.max(freqByteData) / 150) * 100, 105);
            if (!self_.playing) {
                percent = 100;
            }
            self_.drawer.draw(ctx, freqByteData);
        };
    this.changeDrawer = function (index) {
        self_.drawer_index = index;
        self_.drawer = self_.drawers[index];
    }
    this.randomDrawer = function () {
        index = Math.floor(Math.random() * self_.drawers.length);
        self_.changeDrawer(index);
    }
    this.initAudio = function (arrayBuffer) {
        if (source_) {
            self_.stop();
            source_ = null;
        }
        source_ = context_.createBufferSource();
        source_.looping = false;
        // Use async decoder if it is available (M14).
        if (context_.decodeAudioData) {
            context_.decodeAudioData(arrayBuffer, function (buffer) {
                source_.buffer = buffer;
            }, function (e) {
                console.log(e);
            });
        } else {
            source_.buffer = context_.createBuffer(arrayBuffer, false );
        }
        self_.randomDrawer();
        self_.play();
    };
    this.query = function (song) {
        self_.load(getURLforSong(song));
    };
    this.load = function (url) {
        if (source_) {
            self_.stop();
            source_ = null;
        }
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        box = $("#box");
        box.addClass('loading');
        request.onload = function (e) {
            try {
                self_.initAudio(request.response);
                self_.randomDrawer();
            } catch (e) {};
            box.removeClass('loading');
        };
        request.onerror = function (e) {
            box.addClass('loading');
        }
        request.send();
    };
    this.play = function () {
        analyser_ = context_.createAnalyser();
        source_.connect(analyser_);
        analyser_.connect(context_.destination);
        source_.noteOn(0);
        this.playing = true;
        (function callback(time) {
            processAudio_(time);
            stats.update();
            reqId_ = window.webkitRequestAnimationFrame(callback);
        })();
    };
    this.stop = function () {
        source_.disconnect(0);
        analyser_.disconnect(0);
        this.playing = false;
        window.webkitCancelRequestAnimationFrame(reqId_);
    };
}
