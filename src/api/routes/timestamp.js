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
         
            return res.json({uni1 : parseIntDate, ut1 : tbd });
          }
        return res.json({error : "Invalid Date" });
      }
  
  
  
      // NOT Invalid Date
      var currentTime = date.getTime();
      var currentUTC = date.toUTCString();
      return res.json({uni1 : currentTime, ut1 : currentUTC });
    }
    
      //empty string scenario WORKS
      // console.log('Empty String');
      var date = new Date();
      var currentTime = date.getTime();
      var currentUTC = date.toUTCString();
      res.json({uni1 : currentTime, ut1 : currentUTC });

    } catch (error) {
      return next(error);
    }
  }

module.exports = timestamp;