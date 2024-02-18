import EGImg1 from '../../imgs/evergreen-UI-imgs/eg-img1.webp';
import EGImg2 from '../../imgs/evergreen-UI-imgs/eg-img2.webp';
import NewEGImg1 from '../../imgs/evergreen-UI-imgs/new-design-eg-img1.webp';
import NewEGImg2 from '../../imgs/evergreen-UI-imgs/new-design-eg-img2.webp';
import NewEGImg3 from '../../imgs/evergreen-UI-imgs/new-design-eg-img3.webp';
import FitbitUI1 from '../../imgs/fibit-UI-images/fitbit-ui-img1.webp';
import FitbitUI2 from '../../imgs/fibit-UI-images/fitbit-ui-img2.webp';
import SilverSneakersImg from '../../imgs/silver-sneakers-imgs/silversneakers-img.jpg';

import './Research.css';

const Research = () => {
    return (
        <div id="research" className="research-container content-container">
            <h2>Research</h2>
            <p>Currently on the market there are several apps that are great for older users that have been adopted due to successful UI designs while others not so much. In particular, three apps stand out.</p>
            <div className="evergreen-app-research">
                <h4>Great for elderly users: Evergreen Club</h4>
                <p>The first app is the Evergreen Club. This app was designed to help older users over the age of 50 attend events in the hopes of them making new connections. The app is quite successful however despite their success they initially encountered problems when it came to the UI and UX experience.</p>
                <p>To illustrate this, here are the old designs that the app started with:</p>
                <div className="old-design-imgs-container">
                    <img src={EGImg1} alt="" className="eg-img1"/>
                    <img src={EGImg2} alt="" className="eg-img2"/>
                </div>
                <br/>
                <p>And here are the revamped designs:</p>
                <div className="new-design-imgs-container">
                    <img src={NewEGImg1} alt="" className="new-eg-img1"/>
                    <img src={NewEGImg2} alt="" className="new-eg-img2"/>
                    <img src={NewEGImg3} alt="" className="new-eg-img3"/>
                </div>
                <br/>
                <p>As you can see the difference in designs is night and day. In the newer designs, we notice that the text is much more readable and bigger. We notice that the touch targets are much bigger making it easier for elderly users to touch elements. High contrast colors and an overall simpler design make using the app much easier. Overall, we notice that the app is much more accessible to users. By having all of these modifications, the app caters to some of the most common physical issues encountered by older users like poor eyesight. Lastly, as a result of these changes, the application garnered so much success it became an award winner for the Google Play Best App for Good award in 2021.</p>
            </div>
            <div className="fitbit-app-research">
                <h4>Not so great for elderly users: Fitbit</h4>
                <p>Next, we have Fitbit. Although Fitbit is technically a fitness app whose main audience isn’t specifically older users, these people can still use the app if they are pursuing a more active lifestyle. In fact, according to <a rel="noreferrer" target="_blank" href="https://www.prnewswire.com/news-releases/parks-associates-fitbit-favored-among-older-us-consumers-for-fitness-trackers-smart-watches-and-gps-sports-watches-300973170.html">market research</a> in 2019, among Fitbit users 68% and 60% of users were in the age groups of 55-64 and 65+ respectively.</p>
                <p>In terms of design however, Fitbit is an example of UI design that will deter older users.</p>
                <p>The problem: Too many screens!</p>
                <div className="fitbit-imgs-container">
                    <img src={FitbitUI1} alt="" className="fitbit-img1"/>
                    <img src={FitbitUI2} alt="" className="fitbit-img2"/>
                </div>
                <p>According to this <a target="_blank" rel="noreferrer" href="https://medium.com/@megan_snell/the-fitbit-app-ui-critique-21315de5882c">critique</a>, the biggest problem with Fitbit is that there are too many screens to navigate. The end result is an app that has overly complicated navigation. In order to be able to set an alarm on the user’s wearable device, they would first have to click on their respective device. Next, the user should click once more on another option that would lead them to the alarm setting menu. Finally, the user would again click another option to finally begin setting an alarm. As you can see, having to navigate through so many screens to set a simple alarm seems excessive. It turns out that for older users <a href="https://www.toptal.com/designers/ui-ux/design-older-consumers" target="_blank" rel="noreferrer">this</a> is enough for them to simply want to abandon the app.</p>
                <p>Effectively, if something is too complex then most will become discouraged from using it.</p>
                <p>This being said, bad navigation would fall under the category of computer experience for elderly people. They are likely to not be familiar with interfaces therefore ensuring that an interface is simple and easy to navigate is a sure-fire way to ensure adoption.</p>
            </div>
            <div className="silversneakers-app-research">
                <h4>Great for elderly users: SilverSneakers GO</h4>
                <div className="silversneakers-img-container">
                    <img src={SilverSneakersImg} alt="" className="silversneakers-img"/>
                </div>
                <p>So far we've focused on the UI aspects of apps, however for an app to truly succeed it must also have a great user experience.</p>
                <p>This where SilverSneakers GO succeeds greatly.</p>
                <p>A successful fitness app designed to encourage elderly users to be more active. It has a wide variety of features ranging from planning activities to tracking progress and mood. The success of this app is due in particular to this range of features while maintaining a user interface that is readable, explicit and simple.</p>
                <div className="considerations-features-container">
                    <div className="ux-considerations">
                        <p>Before developing features, their UX team considered the following:</p>
                        <ul>
                            <li>Text Readability like size, spacing</li>
                            <li>Large touch targets</li>
                            <li>Avoidance of gesture-based interactions like swiping</li>
                            <li>Presenting only 1 task at a time</li>
                        </ul>
                    </div>
                    <div className="ux-features">
                        <p>And from those considerations, some key features were developped:</p>
                        <ul>
                            <li>Access to adjustable workout programs based on fitness level</li>
                            <li>Scheduling of favorite activities</li>
                            <li>Reminder notifications to stay on track</li>
                            <li>Weekly/Monthly tracking of progress</li>
                        </ul>
                    </div>
                </div>
                <p>By taking into consideration common problems senior users encounter and including them in usability testing, the team managed to create key features that would most appeal to the target audience</p>
            </div>
        </div>
    );
}

export default Research;