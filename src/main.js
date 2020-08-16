//Your code here

$("#search").on("click", function () {
    let input = $("#breed-input").val()
    $.ajax({
        method: "GET",
        url: `https://dog.ceo/api/breed/${input}/images/random`,
        success: function (data) {
            debugger
            let img = `<img src="${data.message}">`
            console.log(`https://dog.ceo/api/breed/${input}/images/random`)
            $("#result").append(img)
        },
        error: function (xhr, text, error) {
            let err =`<p id="error"> Breed not found - try again</p>`
            $("#result").append(err)
            console.log(text)
        }
    })
    $("#result").append(input)
})

// Start by adding an event listener to the button. When a user clicks on the button the following should occur:

// Extract the value of the input
// Make a GET request to the dog API for a random image of the breed the user entered
// You can enter 'poodle' in the input to check if the request works correctly
// Extract the image of the dog from the response and append it to the div with the id result


// That's it! By the end of this section, you should be able to enter a breed into the input and click the button, which then displays an image of a dog.


// What happens if the user enters an invalid breed? An error right? You must account for such a scenario.



// Modify your code from the previous exercise to account for the API request resulting in an error.



// If the breed is invalid, please append a p element to the div with id of result. The p element should have the text Breed not found - try again inside.