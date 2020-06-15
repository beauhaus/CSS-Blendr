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

TODO: add wildcard button (rand images & random blendmode) ?

NOTE: TODO: use e.preventDefault() on buttons && || imageviewer
to mitigate flash of content.
TODO: true crimes stills from intro for explanations of exclusion or...

TODO: add jackson pollack

TODO: wildcard images and blend mode?


// export {useSelectImg1}  //???


// click viewer, then highlight top flip image in orange...

// click thumbnail, thumbnail is highlighted, 
    //  then top img slides out with new selected image, 
    //  then bottom img is highlited in orange


// temp state 



________________________________________________
var displayArray = [
  { img: "/hat", name: "hat", top: true, bot: false },
  { img: "/bus", name: "bus", top: false, bot: false },
  {
    img: "/car",
    name: "car",
    top: false,
    bot: true
  },
  {
    img: "/sky",
    name: "sky",
    top: false,
    bot: false
  },
  { img: "/can", name: "can", top: false, bot: false }
];
<!-- console.log("orig: ",displayArray) -->

var imageSelectUpdater = (displayArray, orientation, newImage) => {
  if (orientation === "top") {
    displayArray.map(imgObj => 
      (imgObj.name === newImage? imgObj.top = true: imgObj.top = false) 
    );
  } else if (orientation === "bot") {
    displayArray.map(imgObj => 
      (imgObj.name === newImage? imgObj.bot = true: imgObj.bot = false) 
    );
  }
}
// console.log("#1 can to top")
// imageSelectUpdater(displayArray, "top", "can");
// console.log("#2 sky to bot")
// imageSelectUpdater(displayArray, "bot", "sky");


var imageFlipper=(displayArray) => {
    displayArray.map(imgObj =>{      
      if(!imgObj.bot && imgObj.top) {
        console.log(imgObj.name, " top to bottom")
        imgObj.top=false;
        imgObj.bot=true;
      } else if(!imgObj.top && imgObj.bot) {
        console.log("flipping ", imgObj.name,"to top ")
        imgObj.bot=false;
        imgObj.top=true;
      }
      
    })
//   console.log("flipped:", displayArray)
  return displayArray;
}
imageFlipper(displayArray)




## React Hook useEffect has a missing dependency:
To disable the rule you would write it like

```javascript
useEffect(() => {
   // other code
   ...

   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []) 

```