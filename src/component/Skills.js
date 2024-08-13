import Progress from "./Progress";
import ProgressBar from "./ProgressBar";
function Skills() {

    return (
        <section className="skill-section w-100 overflow-hidden">
            <h1 className="text-center text-light fw-bold">My Skills</h1>
            <div className="row">
                <div className="col-lg-5 col-md-6 ">
                    <ProgressBar percentValue={90} title="Html" />
                    <ProgressBar percentValue={80} title="Css" />
                    <ProgressBar percentValue={60} title="Javascript" />
                    <ProgressBar percentValue={65} title="React js" />
                    <ProgressBar percentValue={70} title="Bootstrap" />
                </div>

                <div className="col-lg-7 col-md-6 ">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
                            <Progress percentValue={50} title="Wordpress" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
                            <Progress percentValue={30} title="Git" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
                            <Progress percentValue={45} title="Github" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
