
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article uk-text-center">
      <figure>
        <img src="media/logo.jpg" />
      </figure>

      <p class="uk-text-lead">
        Commit to being awesome
      </p>
    </article>
  )
}
