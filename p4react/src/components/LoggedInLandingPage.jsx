import React from 'react';
import CreateES from './CreateES';

function LoggedInLandingPage(props) {
    return (
<div>
<center><button className="createbutton">Create New Service</button></center>

  {/* ## this should actually just be a create button that links to the CreateES page - lets make a modal */}
<CreateES></CreateES>
        <div>
            <div className="LandingContent">
                <div className="grid-container">
                <div className="grid-item"><img className="homepic" src ="https://www.apple.com/v/apple-music/h/images/shared/og_image.png?201808060701"/>
                Music
               </div>
                <div className="grid-item"><img className="homepic" src = "https://shelbycountyartscouncil.com/wp-content/uploads/2017/09/pexels-photo-226243.jpeg"/>
                Photography
                </div>
                <div className="grid-item"><img className="homepic" src ="https://weddinghubeg.com/wp-content/uploads/2017/10/Four-Seasons-Hotel-Cairo-Nile-Plaza-Wedding-Hub-EG-Cairo-Egypt-1.jpg"/>Venues</div>
                <div className="grid-item"><img className="homepic" src ="http://www.body-harness.com/wp-content/uploads/2018/06/How-To-Choose-The-Right-Finger-Food-Catering-For-Your-Next-Event.png"/>
                Catering</div>
                <div className="grid-item"><img className="homepic" src ="http://www.salonsuitesolutions.com/wp-content/uploads/2017/07/Makeup.jpg"/>
                Make-Up</div>
                <div className="grid-item"><img className="homepic" src ="http://ourweddingideas.com/cdn/file/incredible-wedding-flower-arrangements-wedding-decoration-flower-arrangements-wedding-decorations.jpg"/>Florists</div>

                </div>
            </div>
            </div>
</div>
    )
}
export default LoggedInLandingPage;