(function () {
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        document.body.className = (e.type == "dragover" ? "hover" : "");
    }

    function FileSelectHandler(e) {
        FileDragHover(e);
        var files = e.target.files || e.dataTransfer.files;
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }

    }
    Array.prototype.exists = function (search) {
        for (var i = 0; i < this.length; i++)
        if (this[i] == search) return true;

        return false;
    }

    function ParseFile(file) {
        allfiles = ['audio/ogg', 'audio/mp3'];
        if (allfiles.exists(file.type)) {
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                sound.initAudio(theFile.srcElement.result);
            });
            reader.readAsArrayBuffer(file);
        }
    }

    function Init() {
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            document.body.addEventListener("dragover", FileDragHover, false);
            document.body.addEventListener("dragleave", FileDragHover, false);
            document.body.addEventListener("drop", FileSelectHandler, false);
        }

    }

    if (window.File && window.FileList && window.FileReader) {
        Init();
    }
})();