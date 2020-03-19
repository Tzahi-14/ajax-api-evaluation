const success = function (image) {
  $('#result').empty().append(`<img src="${image.message}" />`)
}

const error = function (err) {
  $('#result').empty().append('<p>Breed not found - try again.</p>')
}

$('#search').on('click', function () {
  const input = $('#breed-input').val()
  $.ajax({
    url: `https://dog.ceo/api/breed/${input}/images/random`,
    method: 'GET',
    success,
    error
  })
})