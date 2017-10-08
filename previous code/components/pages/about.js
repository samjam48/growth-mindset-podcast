
const c = require('csam/lib/component')

const Link = require('../uikit/link')
const Parallax = require('../uikit/parallax')

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article" style={styles.center}>
      <h1 class="uk-article-title">Growth Mindset 101</h1>

      <p class="uk-text-lead">“In a growth mindset, people believe that their most basic abilities can be developed through dedication and hard work—brains and talent are just the starting point.</p>
      <p class="uk-text-lead">This view creates a love of learning and a resilience that is essential for great accomplishment”</p>

      <br/>

      <Parallax image="/media/about/enjoying-the-moment.jpg" style={{ height: '400px', width: '100%' }}  >
        <div></div>
      </Parallax>

      <hr/>

      {/*<figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/about/enjoying-the-moment.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/img1.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/b3.jpg" />
        </div>
      </figure>*/}

      <br/>
      
      <h2>The Format</h2>

      <br/>
      
      <p class="uk-text-lead">
        The Growth Mindset podcast talks to seriousy interesting individuals around the world. 
      </p>
      <p class="uk-text-lead">
        We break down the tools and philosophies they find on their journey to build a fulfilling life and what motivates them to attempt extraordinary things.
      </p>
      <p class="uk-text-lead">
        Simply put we grill them on cool stuff they are up to and what they do to keep growing.
      </p>

      <br/>
      
      <Parallax image="/media/about/long-journey.jpg" style={{ height: '400px', width: '100%' }}  >
        <div></div>
      </Parallax>

      <br/>
      
      <h2>The Twist</h2>

      <p class="uk-text-lead">
        There are a number of podcasts that only talk to experts and people who have reached the end goal. They don't typically talk to people who are just starting out on their journey or are only a few steps along.
      </p>
      <p class="uk-text-lead">
        We deliberately seek guests from all stages of the journey to better representation where someone with no experience or skills can start.
      </p>


      <hr/>
     
      <Parallax image="/media/about/sam-summit.jpg" style={{ height: '400px', width: '100%' }}  >
        <div></div>
      </Parallax>

      <h2>The Host - Sam Harris</h2>

      <p class="uk-text-lead">
         Another young guy who doesn't really have a clue what to do with his life but if I'm gonna do I'm gonna do that shit right!
      </p>

      <p class="uk-text-lead">
         A dyslexic entrepreneur who likes to make things up as he goes along. I work hard to make it seem like I'm in permanent semi-retirement and focus on making the most of my time here on Earth.
      </p>

      {/*<figure class="uk-grid uk-grid-small uk-child-width-1-3" uk-grid>
        <div>
          <img src="/media/about/enjoying-the-moment.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/img1.jpg" />
        </div>
        <div>
          <img src="/media/get-involved/b3.jpg" />
        </div>
      </figure>*/}
{/*
      <p>
        For someone who is slow at everything, I have somehow acheived a lot compared to many people who seem to be naturally far more skilled than me. I am commonly asked how I do all these things and can't usually give a coherent answer. Breaking it down I just seem to be good at finding people doing cool things I wish I could do and asking a lot of questions. So why not do this publicly?
      </p>

      <h3>Stuff I'm Proud Of:</h3>
      <ul  style={styles.left}>
        <li>Self funded year of travel at age 18</li>
        <li>Launched first business at 20 during first year of university</li>
        <ul style={{margin: "0px"}}>
          <li>Sold first business at 24</li>
          <li>Didn't fail degree</li>
        </ul>
        <li>Burrito eating champion of Bristol 2014</li>
        <li>Launched a development agency within 6 months of starting to code</li>
        <ul style={{margin: "0px"}}>
          <li>The team delivered our first contract working as a digital nomads from a small Greek island</li>
        </ul>
      </ul>
*/}


   </article>
  )
}


const styles = {
  center: {
    textAlign: 'center'
  },
  left: {
    textAlign: 'left'
  }
}