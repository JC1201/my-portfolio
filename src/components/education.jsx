import './education.css';

export function Education() {

    return(

    <section className="education">
        
        <h2>Education</h2>

        <div className="timeline">
        
        <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <h3>Bachelor of Computer Science</h3>
            <span>University of XYZ • 2018 – 2022</span>
            <p>Specialized in software engineering, full-stack development, and AI.</p>
        </div>
        </div>

        <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <h3>High School Diploma</h3>
            <span>ABC High School • 2016 – 2018</span>
            <p>Focused on science stream, with strong interest in mathematics and programming.</p>
        </div>
        </div>

        </div>
    </section>

    );
}