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
  //hide initial card ?
 
  
  //add each rsult to card
  $.each(results,function(i,item){
    const name = item.name.first+','+item.name.last;
    const email = item.email;
    const cityState = item.location.city +','+ item.location.state;
    const city = item.location.city
    const pictureLrg = item.picture.large;
    const phone = item.phone;
    const fullAddress = item.location;
  
    
    const dob = item.dob;

    const cardGallery = $(".gallery");

    
      
    Cardhtml     =    `<div class="card"><div id = "card-${[i]}" class="card-img-container">
                      <img class="card-img" src="${pictureLrg}" alt="profile picture"></div>       
                      <div class="card-info-container">
                      <h3 id="name" class="card-name cap">${name}</h3>
                      <p class="card-text">${email}'</p><p class="card-text cap">${cityState}</p>
                      </div>
                      </div>
                      </div> `  
    
    //$(cardGallery).append($("<div>",{'class':'card'}))
      //example chaining in jquery 
      //$("body").html($("<select>").append($("<option>", { 'value': 'bla bla bla' })).append
    
      // add card to gallery
      $(cardGallery).append(Cardhtml);
      
     const modalContainerhtml = `<div id = "cardContainer-${[i]}" class="modal-container">
                                <div class="modal"></div>
                                </div><button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong>
                                </button><div class="modal-info-container">
                                <img class="modal-img" src="${pictureLrg}" alt="profile picture">
                                <h3 id="name" class="modal-name cap">${name}</h3>
                                <p class="modal-text">${email}</p>
                                <p class="modal-text cap">${city}</p><hr>
                                <p class="modal-text">${phone}</p>
                                <p class="modal-text">${fullAddress}</p>
                                <p class="modal-text">Brithday:${dob}</p>
                                </div>
                                </div>`
    
    // dont know if i need this
 //$(cardGallery).append(modalContainerhtml);  
  
   $(".cardContainer-"+[i]).addClass('hidden')
 
   console.log(modalContainerhtml)






//console.log(Cardhtml)

}//end of for each


     
  )
  // event listener for card
$(".card-img-container").on("click", function(){
  console.log('card has been clicked')
 // $("#modal-container").addClass("active");
  });


}
  ;


//fetch statement
    fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    
    .then(out => out.results)
    .then( $("#name").text(''))//WHERE SHOULD I REALLY PLACE THIS
    .then((results) =>  getResults(results));
//end of fetch
      
// event listener for card
    $("#card-img-container").on("click", function(){
      console.log('card has been clicked')
     // $("#modal-container").addClass("active");
      });


        
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
/*
Modal markup:

You can use the commented out markup below as a template
for your modal, but you must use JS to create and append 
it to `body`.

IMPORTANT: Altering the arrangememnt of the markup and the 
attributes used may break the styles or functionality.

<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>


    example pop up functionality
    $(".open").on("click", function(){
$(".popup, .popup-content").addClass("active");
});
When this happens, the “active” class is appended to the pop-up classes, thus changing the pop-up’s visibility to “visible.” In other words, the pop-up will appear.

This second statement removes the “active” class when the “Close” button is clicked.

$(".close, .popup").on("click", function(){
$(".popup, .popup-content").removeClass("active");
});
*/

