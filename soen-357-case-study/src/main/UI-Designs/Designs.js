import Carousel from 'react-multi-carousel';
import Persona1 from '../../imgs/personas/Persona-1-MarkOhearn.png';
import Persona2 from '../../imgs/personas/Persona-2-Evelyn.png';
import Persona3 from '../../imgs/personas/Persona-3-Jake.png';
import LoginPageWF from '../../imgs/wireframes/Login-Page.png';
import RegisterPageWF from '../../imgs/wireframes/Register-Page.png';
import RegisterPagePt2WF from '../../imgs/wireframes/Register-Page-pt2.png';
import HomePageWF from '../../imgs/wireframes/Home-Page.png';
import HealthPageWF from '../../imgs/wireframes/Health-Page.png';
import ActivitesPageWF from '../../imgs/wireframes/Activities.png';
import GolfEventPageWF from '../../imgs/wireframes/Golf-Event.png';
import CreateEventPageWF from '../../imgs/wireframes/Create-Event.png';
import FriendsPageWF from '../../imgs/wireframes/Friends.png';
import TextChatPageWF from '../../imgs/wireframes/Text-Chat.png';
import UserFlowChart from '../../imgs/flow-charts/UserFlow-Chart.png';

import "react-multi-carousel/lib/styles.css";

import './Designs.css';

const Designs = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const responsiveWF = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div className="designs-container content-container">
            <h2 id="designs">Designs, Personas, Wireframes...</h2>

            <p>Based on the research done, we ended up developing three personas that represent users of our app FitMeet.</p>
            <div className="personas-container">
                <Carousel
                    responsive={responsive}
                    arrows
                    showDots
                    infinite 
                    autoPlay 
                    autoPlaySpeed={10000} 
                    pauseOnHover
                >
                    <img src={Persona1} alt='' className='small-imgs'/>
                    <img src={Persona2} alt='' className='small-imgs'/>
                    <img src={Persona3} alt='' className='small-imgs'/>
                </Carousel>
            </div>
            <p>Each persona represents a unique potential user that has their own frustrations and goals to achieve. By creating these personas we were able to identify what features and specific design points to keep in mind when designing an app for senior users.</p>
            <br/>
            <div className='flowchart-container'>
              <h3>User Flow Chart</h3>
              <div className='flowchart-img-container'>
                <img src={UserFlowChart} alt='' className='flow-chart-img'/>
              </div>
              <p>After developing personas, we noticed that in our personas and both in the conducted research that it was important to ensure that naviagtion of the app was simple. If navigating is too complex, then no matter the amount of features we have in the app, elderly users will not use it. Therefore, we began brainstorming on how we could design the app with simple navigation while combining the physical health and social health features we want in the app.</p>
            </div>
            <br/>
            <div className='wireframes-container'>
                <h3>Wireframes</h3>
                <p>Based on the personas and user flowchart, we decided to make wireframes to begin getting an idea of how we wanted the app to look like. Of course, the focus was more on getting a foundation upon which we would be able to build upon therefore the aesthetics are not representative of the final product.</p>

                <Carousel
                    responsive={responsiveWF}
                    arrows
                    showDots
                >
                    <img src={LoginPageWF} alt='' className='small-imgs'/>
                    <img src={RegisterPageWF} alt='' className='small-imgs'/>
                    <img src={RegisterPagePt2WF} alt='' className='small-imgs'/>
                    <img src={HomePageWF} alt='' className='small-imgs'/>
                    <img src={HealthPageWF} alt='' className='small-imgs'/>
                    <img src={ActivitesPageWF} alt='' className='small-imgs'/>
                    <img src={GolfEventPageWF} alt='' className='small-imgs'/>
                    <img src={CreateEventPageWF} alt='' className='small-imgs'/>
                    <img src={FriendsPageWF} alt='' className='small-imgs'/>
                    <img src={TextChatPageWF} alt='' className='small-imgs'/>
                </Carousel>
            </div>
        </div>
    );
}

export default Designs;