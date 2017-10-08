
const c = require('csam/lib/component')

const PodcastPreviewTile = require('./podcast-preview-tile')

module.exports = function(props, children) {
  var props = props || {}
  props.podcasts = props.podcasts || []

  podcastTiles = props.podcasts.map(function(podcast) {
    return (
      <div>
        <PodcastPreviewTile podcast={ podcast } />
      </div>
    )
  })

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Podcasts</h1>

      <div class="uk-grid uk-margin-medium-bottom uk-child-width-1-2@m" uk-grid>
        { podcastTiles.reverse() }
      </div>
    </article>
  )
}
