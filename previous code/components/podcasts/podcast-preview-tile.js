
const c = require('csam/lib/component')

const Link = require('../uikit/link')

module.exports = function(props, children) {
  var podcast = props.podcast || {}

  var postLink = '/podcast/' + podcast.alias

  // console.log(postLink);


  return (
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
         <Link href={ postLink }>
          <img class="uk-width-1-1" src={ podcast.image } alt={ podcast.number + ' - ' + podcast.title }/>
        </Link>
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title"><Link href={ postLink }>{ podcast.number + ' - ' + podcast.title }</Link></h3>
        <p class="uk-article-meta">
          { podcast.date }
        </p>
        <p>öadovojdspjvpoj</p>

        <p>
          { podcast.preview }…
        </p>
        <p>
          <Link class="uk-button uk-button-text" href={ postLink }>Read more…</Link>
        </p>
      </div>
    </div>
  )
}
