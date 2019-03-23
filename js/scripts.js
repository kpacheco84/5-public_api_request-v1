//Get and display 12 random users
/*With information provided from The Random User Generator API, send a request to the API, 
and use the response data to display 12 users, along with some basic information for each:*/
// fetch function
/* items first name
console.log(item.name.first)    
     var nameHTML = $('#name').html();
     console.log(nameHTML)
     //$(nameHTML).empty().html(item.name.first);
*/


/*for reference of the card html
     <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
                       
        </div>

*/

 function getResults(results){ 
  //hide initial card
  $("#name").text('')

  //add each rsult to card
  $.each(results,function(i,item){
    const name = item.name.first+','+item.name.last;
    const cardGallery = $(".gallery");
    console.log(name) 
// image place holder that goes insed card '<img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></img>'
   /* var Cardhtml ='<div class="card"> + 
              '<div class="card-img-container"><img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></img></div>'+
                  '<div class="card-info-container">' +           
                  '<h3 id="name" class="card-name cap">name</h3>'+
                  '<p class="card-text">email</p>'+
                  
                  '<p class="card-text cap">city, state</p>'+
                    '</div>'   ;
                    */
                    
      const    Cardhtml     =     '<div class="card"><div class="card-img-container"><img class="card-img" src="https://placehold.it/90x90" alt="profile picture"></div>       <div class="card-info-container"><h3 id="name" class="card-name cap">first last</h3><p class="card-text">email</p><p class="card-text cap">city, state</p></div></div></div> '  
      
    
      
      $(cardGallery).append(Cardhtml);
      
      const cardName = $("#name");

console.log(Cardhtml);
      cardName.text(name)

   }
     
  )
}
  ;



    fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    
    .then(out => out.results)
    .then( $("#name").text(''))
    .then((results) =>  getResults(results));

      
   

        
//}).catch(err => console.error(err));


 
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


