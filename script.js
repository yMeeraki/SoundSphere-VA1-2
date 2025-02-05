// Form Inputs
const formInput = document.getElementById('form-input')

// Event Listener for Submit Input
formInput.addEventListener('submit', getData)

// Function for to Get Data and Display
function getData(event){
    event.preventDefault() // Added Function to prevent submit type default

    // console.log('form submitted')
    
    const fullName = document.getElementById('name-input').value // Full Name
    const eMail = document.getElementById('email-input').value // Email
    const ageGroupInput = document.getElementById('age-group-input').value // Age Group

    // console.log(fullName+ " "+ eMail+ " "+ ageGroupInput)
    
    const musicGenresInput = document.querySelectorAll('input[name="genre"]:checked') // Array of Selected Genres
    let selectedGenres = [];

    for(let i=0; i<musicGenresInput.length;i++){
        selectedGenres.push(musicGenresInput[i].value) // Pushing selected genres in an empty array to display later
    }

    // console.log(selectedGenres)

    const reason = document.getElementById('reason-input').value // Reason to love music
    
    // console.log(reason)

    const perference = document.querySelector('input[name="preferences"]:checked').value; // Listening Preferences
    
    // console.log(perference)

    // Displaying
    const displayForm = document.getElementById('display-form')

   
    displayForm.innerHTML = `
    <p>
  
<strong>
  Full Name:
</strong> ${fullName}
<br>
<br>
<strong>
  E-mail: 
</strong>${eMail}
<br>
<br>
<strong>
  Age Group: 
</strong>${ageGroupInput}
</p>

<h2>
  Favorite Music Genre:
</h2>
<p>
${selectedGenres.length > 0 ? selectedGenres.join(', ') : "No genre selected"}
</p>

<h2>
Why you love music?
</h2>
<p>${reason}</p>

<h2>
  Listening Preferences:
</h2>
<p>
${perference}
</p>
    `

}