
const c = require('csam/lib/component')

const Guest = require('./guest')

module.exports = function(props, children) {
  var podcast = props.podcast || {}

  guestTiles = props.guests.map(function(guest) {
    return (
      <div>
        <Guest guest={ guest } />
      </div>
    )
  })

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">
        { podcast.number + ' - ' + podcast.title }
      </h1>

      { guestTiles }

      <p class="uk-article-meta">
        { podcast.date }
      </p>

      <figure class="uk-width-1-1">
        <img class="uk-width-1-1" src={ podcast.image } alt={ podcast.title } />
      </figure>

      { podcast.transcript ? (
        <div>
          <h2>
            Transcript
          </h2>

          { podcast.transcript }
        </div>
      ) : null }

      {/*{ podcast.content }*/}
    </article>
  )
}
