const timestamp = (req,res) => {
    var timeParam = req.params.date_string;
  
    //Testing if NOT EMPTY  
    if (timeParam) {
  
      var date = new Date(timeParam);
      var testParam = date.toString();
      console.log(testParam);
      
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
      console.log("Empty string test. Geat success.");
      var date = new Date();
      var currentTime = date.getTime();
      var currentUTC = date.toUTCString();
      res.json({unix : currentTime, utc : currentUTC });
  }

module.exports = timestamp;