document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    fetch('http://localhost:8000/api/v1')
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        json.forEach(function(result){
          var tableBody = document.querySelector('#data tbody')
          var tr = document.createElement('tr')

          var td_id = document.createElement('td')
          var td_film = document.createElement('td')
          var td_stars = document.createElement('td')
          var td_rating = document.createElement('td')
          var td_votes = document.createElement('td')
          var td_created = document.createElement('td')
          var td_updated = document.createElement('td')

          var text_id = document.createTextNode(result.id)
          var text_film = document.createTextNode(result.film)
          var text_stars = document.createTextNode(result.stars)
          var text_rating = document.createTextNode(result.rating)
          var text_votes = document.createTextNode(result.votes)
          var text_created = document.createTextNode(result.created_at)
          var text_updated = document.createTextNode(result.updated_at)

          td_id.appendChild(text_id)
          td_id.classList.add('column1')

          td_film.appendChild(text_film)
          td_film.classList.add('column2')

          td_stars.appendChild(text_stars)
          td_stars.classList.add('column3')

          td_rating.appendChild(text_rating)
          td_rating.classList.add('column4')

          td_votes.appendChild(text_votes)
          td_votes.classList.add('column5')

          td_created.appendChild(text_created)
          td_created.classList.add('column6')

          td_updated.appendChild(text_updated)
          td_updated.classList.add('column7')

          tr.appendChild(td_id)
          tableBody.appendChild(tr)
          tr.appendChild(td_film)
          tableBody.appendChild(tr)
          tr.appendChild(td_stars)
          tableBody.appendChild(tr)
          tr.appendChild(td_rating)
          tableBody.appendChild(tr)
          tr.appendChild(td_votes)
          tableBody.appendChild(tr)
          tr.appendChild(td_created)
          tableBody.appendChild(tr)
          tr.appendChild(td_updated)
          tableBody.appendChild(tr)
        })
      })
  }
}
