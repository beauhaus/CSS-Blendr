import React, { useEffect, useState } from 'react'
// import useGalleryImages from './use-gallery-images'

const moddedArrayLoader = (imgArr, topImg = '', botImg ='') => {
  // gets rand 2 nums in array
  

  // topImg = topImg || {};
  // botImg = botImg || {};
  
  // imgArr.map((imgObj, idx) => {
  //   // console.log(imgObj.top)
  //   if (imgObj.name === topImg) {
  //     imgObj.top = true;
  //     topImg = imgObj;
  //     // console.log(`top: ${topImg.name}`)
  //   }
  //   if (imgObj.name === botImg) {
  //     imgObj.bot = true;
  //     botImg = imgObj;
  //     // console.log(`bot: ${botImg.name}`)
  //   }
    return [imgArr, topImg, botImg]
  // })
}


var imageSelectUpdater = (displayArray, orientation, newImage) => {
  if (orientation === "top") {
    displayArray.map(imgObj =>
      (imgObj.name === newImage ? imgObj.top = true : imgObj.top = false)
    );
  } else if (orientation === "bot") {
    displayArray.map(imgObj =>
      (imgObj.name === newImage ? imgObj.bot = true : imgObj.bot = false)
    );
  }
}

const imageSelector = (arr = '', newImage = '') => {
  //check for img with same orientation
  var found;
  if (arr) {
    [found] = arr.filter(img => img.name === newImage)
  } else {
    found = null;
  }
  return found;
}

const topBotUpdater = (arr = '', newImage = '') => {
  var found;
  if (arr) {
    [found] = arr.filter(img => img.name === newImage)
  } else {
    found = null;
  }
  return found;
}

export { imageSelector, moddedArrayLoader };

/*
const outside = (name, arr) =>{
  // console.log("outside!")
  // console.log("outside: name: ", name, "arr:", arr)

 var item = arr.filter((item, idx) => arr[3])
  // return "YES!"


}
*/