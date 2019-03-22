//Get and display 12 random users
/*With information provided from The Random User Generator API, send a request to the API, 
and use the response data to display 12 users, along with some basic information for each:*/
// fetch function
var results = [];
var results =

  //grabbing data correctly
    fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then((out) => console.log(out.results))
        
//}).catch(err => console.error(err));
console.log(results);
$.each(results.name, function (index, value) {
  console.log(name.value);
  });




 
//Image
//First and Last Name
//Email
//City or location
//Refer to the mockups and the comments in the index.html file 
//for an example of what info 
//should be displayed on the page and how it should be styled.


/*Create a modal window
When any part of an employee item in the directory is clicked, a modal window 
should pop up with the following details displayed:*/

//Image
//Name
//Email
//City or location
//Cell Number
//Detailed Address, including street name and number, state or country, and post code.
//Birthday
//Make sure there’s a way to close the modal window


