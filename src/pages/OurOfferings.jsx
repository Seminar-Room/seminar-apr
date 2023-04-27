import "./Ourofferings.css"
import oneicon from "../assets/one.png"
import twoicon from "../assets/coursec.png"
export default function OurOfferings(){
    return(
        <>
            <div className="ourofferingsbody">

                 
                 <div className="holder">


                 <section>
                 <div className="card">
                 <div className="parts">
                 <div className="partone">
                 
                 <img src={oneicon} alt='iconhere' className="icon1"></img>
                 <div className="name">Industry Inspiration Program (IIP)</div>
                 <button className="btnone">LEARN MORE </button>
                 <div className="content">The objective of this program is to inspire
                    students by giving the importance of studying each subject and the potential opportunities with 
                    respect to: Industry Trends, Research and Innovation, Placement Opportunities, Higher Education 
                    Opportunities, and Entrepreneurship</div>
                 
                 </div>
                 <div className="parttwo">
                     <p className="featurestitle">Features</p>
                     <ul>
                         <li className="list">Industry Experts mapped for each module/course</li>
                         <li className="list">Industry application to the theory studied in the classroom</li>
                         <li className="list">Customized to fit into acamdemic calendar</li>
                         <li className="list">Live and interactive</li>
                         <li className="list">End-to-end learning</li>
                         
                         
                         
                     </ul>
                 </div>
                 </div> 

                 </div>
                 </section>


                 <section>
                 <div className="card">
                 <div className="parts">
                 <div className="partone">
                 
                 <img src={twoicon} alt='iconhere' className="icon1"></img>
                 <div className="name">Certificate Courses</div>
                 <button className="btnone">LEARN MORE </button>
                 <div className="content">Curate unique certificate courses to bridge the industry-skill gap. Our courses are developed with the latest, relevant industry requirements, which helps students to always remain professionally competitive.</div>
                 
                 </div>
                 <div className="parttwo">
                     <p className="featurestitle">Features</p>
                     <ul>
                         <li className="list">Live Projects</li>
                         <li className="list">Internships</li>
                         <li className="list">Placement Training</li>
                         
                         
                         
                     </ul>
                 </div>
                 </div> 

                 </div>
                 </section>



                 
                 
                 </div>

            </div>
        </>
    )
}