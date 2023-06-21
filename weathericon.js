import hazeIcon from "./public/haze.png";
import cloudIcon from "./public/cloud.png";
import rainIcon from "./public/rainy.png";
import stormIcon from "./public/storm.png";
import sunIcon from "./public/sun.png";

const weatherIcon = function(weather){
    if(weather == 'Haze'){
     return `<img style='width:100px' src="${hazeIcon}"></img>`
    }else if(weather == 'Clouds'){
      return `<img style='width:100px' src="${cloudIcon}"></img>`
    }else if(weather == 'Rain'){
      return `<img style='width:100px' src="${rainIcon}"></img>`
    }else if(weather == 'Storm'){
      return `<img style='width:100px' src="${stormIcon}"></img>`
    }else{
      return `<img style='width:100px' src="${sunIcon}"></img>`
    }
  }

  export {weatherIcon}