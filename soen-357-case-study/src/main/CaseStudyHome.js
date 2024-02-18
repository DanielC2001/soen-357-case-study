import Intro from "./Introduction/Intro";
import Navbar from "./Navbar/Navbar";
import Research from "./Research/Research";

const CaseStudyHome = () => {
    return (
        <>
            <Navbar/>
            <div className="content">
                <Intro/>
                <Research/>
            </div>
        </>
    )
}

export default CaseStudyHome;