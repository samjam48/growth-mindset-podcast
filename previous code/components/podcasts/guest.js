
const c = require('csam/lib/component')

module.exports = function(props, children) {
  var guest = props.guest || {}
  console.log('guest in guest page = ')
  console.log(guest)

  return (
    <div class="uk-card uk-card-default" style={ styles.card } >
      <div class="uk-card-media-top" style={ styles.profile }>
        <img style={ styles.avatar } src={ guest.image } alt={ guest.name }/>
        <h3>
          { guest.name }
        </h3>
        <h4>
          <a href={ guest.twitter_url } >{ guest.twitter_handle }</a>
        </h4>
      </div>
        <article class="uk-article" style={ styles.content }>
        <p>
          <b>Skills: </b>
        </p>
        <p>
          <b>About: </b>{ guest.about }
        </p>
        </article>
    </div>
  )
}


const styles = {
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
  },
  card: {
    width: '500px',
    height: '200px',
    display: 'flex',
  },
  profile: {
    flex: 1,
  },
  content: {
    flex: 2,
  }

}
