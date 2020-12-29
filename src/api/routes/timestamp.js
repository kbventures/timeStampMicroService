const timestamp = async (req,res,next) => {
  
  try{

  
    var timeParam = req.params.date;
  if (timeParam) {
    var date = new Date(timeParam);
    var testParam = date;
    console.log(`Test 1 ${testParam}`);
    
    //If Invalid date. It could mean it's in milliseconds.
    if(testParam == "Invalid Date"){

      // Needs to test if it has valid millisecond time stamp 
      let reg = /^\d+$/;
      let numbersOnlytest = reg.test(timeParam);
   
      
      if(numbersOnlytest) {
        
          var parseIntDate = parseInt(timeParam);
          let tbd = new Date(parseIntDate).toUTCString() 
       
          return res.json({unix : parseIntDate, utc : tbd });
        }
      return res.json({error : "Invalid Date" });
    }



    // NOT Invalid Date
    var currentTime = date.getTime();
    var currentUTC = date.toUTCString();
    return res.json({unix : currentTime, utc : currentUTC });
  }
  
    //empty string scenario WORKS
    // console.log('Empty String');
    var date = new Date();
    var currentTime = date.getTime();
    var currentUTC = date.toUTCString();
    res.json({unix : currentTime, utc : currentUTC });

  } catch (error) {
    return next(error);
  }
}

module.exports = timestamp;



/*
const timestamp = async (req,res,next) => {


  // var unix = res.body.unix;
  // var utc = res.body.utc;
  // var validUnix = (new Date(unix)).getTime() > 0;
  // var validUtc = (new Date(utc)).getTime() > 0; 
  
    try{

      var timeParam = req.params.date;
      var validUnix = (new Date(timeParam)).getTime() > 0;
      var validUtc = (new Date(timeParam)).getTime() > 0; 

      if (typeof(timeParam) === "undefined"){
        var date = new Date();
        var currentTime = date.getTime();
        var currentUTC = date.toUTCString();
        return res.json({unix : currentTime, utc : currentUTC });
      }

      if(validUnix){
        var parseIntDate = parseInt(timeParam);
        let tbd = new Date(parseIntDate).toUTCString() 
        return res.json({unix : parseIntDate, utc : tbd });
      }

      if(validUtc){
        var unixTime = new Date(timeParm).getTime() / 1000
        return res.json({unix : unixTime, utc : timeParam });
      }

      return res.json({error : "Invalid Date" });

    } catch (error) {
      return next(error);
    }
  
  }
module.exports = timestamp;

*/




/*
const timestamp = async (req,res,next) => {
  
  try{

  
    var timeParam = req.params.date;
  if (timeParam) {
    var date = new Date(timeParam);
    var testParam = date;
    console.log(`Test 1 ${testParam}`);
    
    //If Invalid date. It could mean it's in milliseconds.
    if(testParam == "Invalid Date"){

      // Needs to test if it has valid millisecond time stamp 
      let reg = /^\d+$/;
      let numbersOnlytest = reg.test(timeParam);
   
      
      if(numbersOnlytest) {
        
          var parseIntDate = parseInt(timeParam);
          let tbd = new Date(parseIntDate).toUTCString() 
       
          return res.json({unix : parseIntDate, utc : tbd });
        }
      return res.json({error : "Invalid Date" });
    }



    // NOT Invalid Date
    var currentTime = date.getTime();
    var currentUTC = date.toUTCString();
    return res.json({unix : currentTime, utc : currentUTC });
  }
  
    //empty string scenario WORKS
    // console.log('Empty String');
    var date = new Date();
    var currentTime = date.getTime();
    var currentUTC = date.toUTCString();
    res.json({unix : currentTime, utc : currentUTC });

  } catch (error) {
    return next(error);
  }
}

module.exports = timestamp;

*/