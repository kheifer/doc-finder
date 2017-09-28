var apiKey = require('./../.env').apiKey;

export let Doctor = {

  doctorFInder: (issue) => {
    $.ajax({
     url: `https://api.betterdoctor.com/2016-03-01/doctors`,
     type: 'GET',
     data: {
          query: issue,
          location: 'or-portland',
          sort: 'full-name-desc',
          skip: 0,
          limit: '20',
          user_key: apiKey,
          format: 'json'
     },
     success: function(response) {
       console.log(response);
  },
     error: function(error) {
      console.log(error);
     }
   });
 },


 
  };
