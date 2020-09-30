/* A date string is valid if can be successfully parsed 
by new Date(date_string).

Note that the unix timestamp needs to be an integer (not a string) 
specifying milliseconds.

In our test we will use date strings compliant with ISO-8601
 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(),
 i.e. the service uses the current timestamp.

If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure
{"error" : "Invalid Date" }.

*/ 



// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/timestamp/:date_string?", (req,res)=>{
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
});


/* 3 situations: 2 where the timeParam is not empty 
- 1 where its valid the other invalid \
and a third situation where it is empty */ 


/* The API endpoint is GET [project_url]/api/timestamp/:date_string?
A date string is valid if can be successfully parsed by new Date(date_string).
Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
If the date string is invalid the api returns a JSON having the structure
{"error" : "Invalid Date" }. */
