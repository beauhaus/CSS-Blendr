gatsby page nav

``    const bModes = ['normal', 'screen',  'multiply', 'lighten', 'darken', 'overlay', 'color', 'color-dodge', 'color-burn', 'difference', 'exclusion', 'luminosity', 'hue', 'saturation'];
``


Webfont script 

```html


 <link rel="stylesheet" href="../css/webfonts.css">

 <script src="../js/vendor/fontfaceobserver.js"></script>
 
    <script type="text/javascript">
  		(function() {
  			document.documentElement.className += " wf-inactive"; 
  	
  			// Optimization for Repeat Views
  			if( sessionStorage.foutFontsLoaded ) {
  				document.documentElement.classList.remove("wf-inactive");
  				document.documentElement.classList.add("wf-active");
  				return;
  			}
  	
  			var fontA = new FontFaceObserver("Amstelvar 1.1 VF", {
  				});
  				
  	
  			Promise.all([fontA.load()]).then(function () {
  				document.documentElement.classList.remove("wf-inactive");
  				document.documentElement.classList.add("wf-active");
  	
  				// Optimization for Repeat Views
  				sessionStorage.foutFontsLoaded = true;
  			});
  		})();
  	</script>


```


NOTE: TODO: use e.preventDefault() on buttons && || imageviewer
to mitigate flash of content.