

 function getResults(results){ 
 
 
  
  //add each result to card
  $.each(results,function(i,item){
    const name = item.name.first+', '+item.name.last;
    const email = item.email;
    const cityState = item.location.city +', '+ item.location.state;
    const city = item.location.city
    const pictureLrg = item.picture.large;
    const phone = item.phone;
    const fullAddress = item.location.street.number +' '+ item.location.city +', '+ item.location.state;



    //convert date to correct format
    const date = "2010-10-30T00:00:00+05:30".slice(0, 10).split('-');   
    const dob = date[1] +'/'+ date[2] +'/'+ date[0];
               

    const cardGallery = $(".gallery");

   
      
    Cardhtml     =   `<div id = "card-${[i]}" class="card"><div class="card-img-container">
                      <img class="card-img" src="${pictureLrg}" alt="profile picture"></div>       
                      <div class="card-info-container">
                      <h3 id="name" class="card-name cap">${name}</h3>
                      <p class="card-text">${email}</p><p class="card-text cap">${cityState}</p>
                      </div>
                      </div>
                      </div> `  
 
      // add card to gallery
      $(cardGallery).append(Cardhtml);



      
     const modalContainerhtml =  `<div id = "cardContainer-${[i]}" class="modal-container">
                                  <div class="modal">
                                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                  <div class="modal-info-container">
                                  <img class="modal-img" src="${pictureLrg}" alt="profile picture">
                                  <h3 id="name" class="modal-name cap">${name}</h3>
                                  <p class="modal-text">${email}</p>
                                  <p class="modal-text cap">${city}</p>
                                  <hr>
                                  <p class="modal-text">${phone}</p>
                                  <p class="modal-text cap">${fullAddress}</p>
                                  <p class="modal-text">Birthday: ${dob}</p>
                                  </div>
                                  </div>`
     
     
     
    
 
 $("body").append(modalContainerhtml);  
  
  $("#cardContainer-"+[i]).hide();
 
 



}//end of for each
 )
 //click event for card to open module
  $(".card").on("click", function(){
   
   const clickedCard =($(this).attr("id").replace(/card-/, ''));
   const module =  $(".modal-container").attr("id").replace(/cardContainer-/, '');

  $("#cardContainer-"+ clickedCard).show();

});

// click event to close module 

$(".modal-close-btn").on("click", function(){
   
 $(".modal-container").hide();

});

}
  


//fetch statement
    fetch('https://randomuser.me/api/?nat=us&results=12')
    .then(res => res.json())
    .then(out => out.results)
    .then((results) =>  getResults(results));
//end of fetch
      


// APPEND SEARCH FUNCTIONALITY
/*

function btnSearch(){
const btnSearchhtml = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;

// append btn html to search container
$(".search-container").append(btnSearchhtml);
$('form').show();   

}   ;



btnSearch();

*/






 

//EXCEEDS
//}).catch(err => console.error(err));
/*
Search
Add a way to filter the directory by name. To do this, you’ll need to adjust your API request to retrieve a user nationality that will only return data in the English alphabet.
Example markup for this feature is included in the HTML comments.
Note: Your search feature should filters results that are already on the page. So don't request new info from the API for your search.

Modal toggle
Add a way to toggle back and forth between employees when the modal window is open.
There should be no errors once the end or beginning of the list is reached.
Example markup for this feature is included in the HTML comments.
Structure, style and CSS
Add or change at least one of the following:
color
background color
font
box or text shadows
Document your style changes in your readme file and the project submission notes.
Do not alter the layout or position of the important elements on the page.
*/
