import "./Intro.css";
import IntroductionImg from "../../imgs/intro-img.png";

const Intro = () => {
    return (
        <div class="intro-component">
            <div class='intro-container'>
                <div class='img-container'>
                    <img src={IntroductionImg} alt=""/>
                </div>
                <div class='title-names-container'>
                    <h1>Senior Users and Apps: A Case Study</h1>
                    <p>Roger Daniel Matute Carcamo - 40208000</p>
                    <p>Simon Foo - 40208987</p>
                </div>
            </div>
            <div id="problem" class="content-container">
                <h2>So, what's the problem?</h2>
                <p>Elderly people are becoming much more familiar with technology in current times yet acceptance and adoption of technologies that could make them more self-reliant and socially engaged has been limited.</p>
                <p>Why is this?</p>
                <p>It seems like there are primarily 2 factors that affect UI and UX design for older users. Older users seem to have issues across 2 categories that affect their ability to accept and adopt technologies. These categories are physical and computer experience issues. Just like the target audience, these issues are quite diverse.</p>
                <p>Not all users may have visual issues and computer experience issues when it comes to apps. Some older users may actually be more tech savvy than most younger users, however they may not be familiar with certain interfaces. The previous two descriptions are two examples of potentially real elderly users of some application. This being said, with proper identification of any problem, solutions can be developed to tackle it head on and this is exactly what we will do with this case-study.</p>
            </div>
            <div id="solution" className="content-container">
                <h2>The Solution</h2>
                <p>The solution we propose is FitMeet. With our platform, elderly users will be able to not only find ways to become more fit but also be able to meet people who share similar fitness interests. One of the key features of the app is that users don't need to have an interest in both fitness and wanting to meet people. The app can be used for either purposes or both. On the fitness side, users will have access to workout routines, meal plans and recipes, and a calorie tracker. On the social side, users will be able to set up profiles with their fitness and social interests so that they can meet with nearby people for meet-ups, events and even set up their own events. Additionally, our app will be designed taking into account UI and UX considerations that will make navigating the app a breeze, easy to understand, not overwhelming and visually appealing.</p>
            </div>
        </div>
    );
}

export default Intro;