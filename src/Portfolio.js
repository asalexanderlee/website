import React from 'react';
import './Portfolio.css';
import CodePen from "react-codepen-embed";

const Portfolio = () => {
  return(
    <div class="Portfolio">
    <div> Portfolio</div>
      <div class="codepen"><CodePen hash="RdYpER" height="500" user="asalexanderlee" defaultTab="result" /></div>
      <div class="codepen"><CodePen hash="aMPyMG" height="600" user="asalexanderlee" defaultTab="result" /></div>
      <div class="codepen"><CodePen hash="pQbPgr" height="500" user="asalexanderlee" defaultTab="result" /></div>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/IokVZWBNVSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img src="everythingisgoingtobe.jpg" width="90%"/>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/hSLyVQn8wG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img src="alice.jpeg" width="90%" />
      <img src="bookmark.jpeg" width="90%" />
      <img src="neighborhood.jpeg" width="90%" />
      <img src="rachel.jpeg" width="90%" />
      <img src="selfportrait.jpeg" width="90%" />
      <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180749866&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/722473132&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <iframe width="90%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/722473474&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  )
}

export default Portfolio;
