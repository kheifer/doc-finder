import {Doctor} from './../js/doctor.js';

let returnData = (response)=>{
let data = response.data;
let count = response.meta.count;
if(count === 0){
$('#results').text("No doctors to display");
}else {
let i = 0; //starting at 0 index
for(let i in data){
  let image = data[i].profile.image_url;
  let firstName = data[i].profile.first_name;
  let lastName = data[i].profile.last_name;
  let title = data[i].profile.title;
  let practiceData = data[i].practices;
  let street; let city; let state; let zip; let website; let accepting;
  for(let j in practiceData){
    street = practiceData[j].visit_address.street;
    city = practiceData[j].visit_address.city;
    state = practiceData[j].visit_address.state;
    zip = practiceData[j].visit_address.zip;
    website = practiceData[j].website;
    if (website === undefined){
      website = "no website to display";
    }
    accepting = practiceData[j].accepts_new_patients;
    if(accepting === true){
      accepting = "Accepting patients";
    } else {
      accepting = "Currently not accepting patients";
    }
  }
      console.log("inside");
      $('#results').append(`<div class="well">

                              <div class="row">
                                <div class="col-md-2 col-center">
                                  <img src="${image}" alt="no photo available">
                                </div>
                                <div class="col-md-5 col-center">
                                  <h4>${firstName} ${lastName}, ${title}</h4>
                                  <br><p>${street} <br> ${city}, ${state},  <br> ${zip}</p>
                                </div>
                                <div class="col-md-5 col-center">
                                  <p><br><br><br>Accepts new patients: ${accepting}<br>${website}</p>
                                </div>
                              </div>`);
      i++;
    }
  }
};
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let userInput = $("#user-input").val();
    Doctor.doctorFinder(userInput, returnData);
    $("#user-input").val("");
  });
});
