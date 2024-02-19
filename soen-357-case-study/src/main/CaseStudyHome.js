import Conclusion from "./Conclusion/Conclusion";
import Intro from "./Introduction/Intro";
import Navbar from "./Navbar/Navbar";
import Research from "./Research/Research";
import Designs from "./UI-Designs/Designs";

const CaseStudyHome = () => {
    return (
        <>
            <Navbar/>
            <div className="content">
                <Intro/>
                <Research/>
                <Designs/>
                <br/>
                <Conclusion/>
            </div>
        </>
    )
}

export default CaseStudyHome;