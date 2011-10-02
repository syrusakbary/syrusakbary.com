(function() {

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}




	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		document.body.className = (e.type == "dragover" ? "hover" : "");
	}


	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}

	}		// file select


	// output file information
	Array.prototype.exists = function(search){
  for (var i=0; i<this.length; i++)
    if (this[i] == search) return true;
		
  return false;
} 

	function ParseFile(file) {
    /*
	Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size + 
			"</strong> bytes</p>"
		);*/
	allfiles = [ 'audio/ogg','audio/mp3'];

	
    if (allfiles.exists(file.type)) {
	
	var reader = new FileReader();
	 
      reader.onload = (function(theFile) {
      
    	  //console.log(theFile+" Contenido: "+theFile.srcElement.result);   // informaci?n del archivo
    	  sound.initAudio(theFile.srcElement.result);
    	  
    	  //console.log(theFile);
      });
    //console.log(reader);
     reader.readAsArrayBuffer(file);
		
		
	}
    }

	// initialize
	function Init() {

		var 
			filedrag = document.body;


		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			//filedrag.style.display = "block";
 
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();
