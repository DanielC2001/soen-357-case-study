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
import InformationArchitecture from '../../imgs/information-architectures/Information-Architecture.png';
import Typography from '../../imgs/typography/typography.png';
import ColorPalette from '../../imgs/color-palettes/color-palette.png';
import LoginPage from '../../imgs/final-design/Final-Login.png';
import RegisterPage from '../../imgs/final-design/Final-Register.png';
import RegisterPagePt2 from '../../imgs/final-design/Final-Register-pt2.png';
import HomePage from '../../imgs/final-design/Final-Home-Page.png';
import HealthPage from '../../imgs/final-design/Final-Health.png';
import ActivitesPage from '../../imgs/final-design/Final-Activities.png';
import GolfEventPage from '../../imgs/final-design/Final-Golf.png';
import CreateEventPage from '../../imgs/final-design/Final-Create.png';
import FriendsPage from '../../imgs/final-design/Final-Friends.png';
import TextChatPage from '../../imgs/final-design/Final-Message.png';

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
            <div className='information-arch-container'>
              <h3>Information Architecture</h3>
              <div className='information-arch-img-container'>
                <img src={InformationArchitecture} alt='' className='info-arch-img'/>
              </div>
            </div>
            <div className='typography-container'>
              <h3>Typography</h3>
              <div className='typography-container'>
                <img src={Typography} alt='' className='typography-img'/>
              </div>
              <p>Calibri is a modern sans-serif typeface designed by Lucas de Groot. Introduced in 2004, Calibri quickly gained popularity due to its clean and approachable appearance. Its rounded letterforms and generous spacing contribute to excellent legibility both on screen and in print. Calibri has become a default font choice for many applications, thanks to its contemporary aesthetic and versatility across various text sizes. It conveys a sense of professionalism and readability, making it suitable for a wide range of purposes from documents and presentations to web design and branding.</p>
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
            <div className='color-palette-container'>
              <h3>Color Palette</h3>
              <div className='color-palette-container'>
                <img src={ColorPalette} alt='' className='color-palette-img' width={700}/>
              </div>
            </div>
            <div className='wireframes-container'>
                <h3>Final Design</h3>

                <Carousel
                    responsive={responsiveWF}
                    arrows
                    showDots
                >
                    <img src={LoginPage} alt='' className='small-imgs'/>
                    <img src={RegisterPage} alt='' className='small-imgs'/>
                    <img src={RegisterPagePt2} alt='' className='small-imgs'/>
                    <img src={HomePage} alt='' className='small-imgs'/>
                    <img src={HealthPage} alt='' className='small-imgs'/>
                    <img src={ActivitesPage} alt='' className='small-imgs'/>
                    <img src={GolfEventPage} alt='' className='small-imgs'/>
                    <img src={CreateEventPage} alt='' className='small-imgs'/>
                    <img src={FriendsPage} alt='' className='small-imgs'/>
                    <img src={TextChatPage} alt='' className='small-imgs'/>
                </Carousel>
            </div>
        </div>
    );
}

export default Designs;