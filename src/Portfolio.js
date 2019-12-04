import React from 'react';
import './Portfolio.css';
import CodePen from "react-codepen-embed";

const chambersDescription = <p class="description"><strong>"Chambers: 24 hours"</strong>  During my time as a fullstack developer for Davidson, I wanted to begin a social media campaign to inspire community developers to do Davidson-themed CSS challenges. Though it never came to fruition, this project was an attempt to explore that idea, with the 24-hour lights on Davidson exam period as inspiration. I wrote a function that would randomly choose a window to power on/off after an (also random) time period. Additionally, hovering over the moon will change the scene from day to night. Opacity helps emulate the effect of a color scheme that changes as the sky darkens. </p>;
const candleDescription = <p class="description"><strong>"Single candle can defy..."</strong>  As part of a CSS challenge, I wanted to play with a quote by Anne Frank, "Look at how a single candle can defy and define the darkness." As a simple illustration, I decided to reveal that wisdom when the candle was on, and conceal it when it was snuffed. All that is left when the candle is extenguished is smoke (and, by extension, a lack of substance and definition).</p>;
const everythingisgoingDescription = <p class="description"><strong>"Everything is Going to B"</strong>   As part of our introductory digital art course, we were instructed to create a collage of more than 20 images using Photoshop. I centered my collage around the neon "Everything is going to be alright", cutting off the last word, to create a loss of direction and sense of disillusionment. "Everything is going to ..." what? The swirling patterns and underlying stream help to boister that emotion, and the screens in either corner illustrate the static thrown onto the scene by technology. Two words that I would use to describe this piece (and our world today): beautiful chaos.</p>;
const terminatorDescription = <p class="description">In our Music Technology & Production course, we were given this video, which none of us had seen. We were told to compose music for it using the sounds we had available in Logic Pro X. I created a piece that closely followed the movements in the trailer, from droplets hitting the ground to the laser that etches a '3'. However, I did add one twist. The music gradually builds throughout the video, and, at the climax, there is a simple sound that seems to drain the tension that was built up so far. Instead of a hard-hitting ending, it closes with a suspensful, and mysterious, vibe.</p>;

const Portfolio = () => {
  return(
    <div class="Portfolio">
    <h1>Portfolio</h1>
      <div class="portfolio-item">
        <div class="codepen"><CodePen hash="RdYpER" height="500" user="asalexanderlee" defaultTab="result" /></div>
        {chambersDescription}
      </div>
      {/*<div class="codepen"><CodePen hash="aMPyMG" height="600" user="asalexanderlee" defaultTab="result" /></div>*/}
      <div class="portfolio-item">
        <div class="codepen"><CodePen hash="pQbPgr" height="500" user="asalexanderlee" defaultTab="result" /></div>
        {candleDescription}
      </div>
      {/*<iframe width="90%" height="500px" src="https://www.youtube.com/embed/IokVZWBNVSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
      <div class="portfolio-item">
        <img src="everythingisgoingtobe.jpg" width="90%"/>
        {everythingisgoingDescription}
      </div>
      {/*<div class="portfolio-item">
        <img src="alice.jpeg" width="90%" />
      </div>*/}
      {/*<img src="bookmark.jpeg" width="90%" />*/}
      {/*<img src="rachel.jpeg" width="90%" />
      <img src="selfportrait.jpeg" width="90%" />*/}
      {/*<iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180749866&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>*/}
      <div class="portfolio-item">
        <iframe width="90%" height="500px" src="https://www.youtube.com/embed/hSLyVQn8wG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {terminatorDescription}
      </div>
      <div class="portfolio-item">
        <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/722473132&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
      <div class="portfolio-item">
        <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/722473474&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
      <div class="portfolio-item">
        <img src="neighborhood.jpeg" width="90%" />
      </div>
    </div>
  )
}

export default Portfolio;
