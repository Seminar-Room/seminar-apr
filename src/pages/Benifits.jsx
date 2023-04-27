import "./Benifits.css" 
import $ from 'jquery';

export default function Benifits(){
    return(
        <>
            <div className="benefitsbody">
                
                        
                        <div className="know-more" id="know-more-1" onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>
                        
                        <div className="know-more" id="know-more-2"onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>
                            
                        <div className="know-more" id="know-more-3" onMouseOver={()=>{
                            $("#know-more-2").css("opacity",0)
                        }} onMouseLeave={()=>{
                            $("#know-more-2").css("opacity",1)
                        }}>Know More</div>


                <div className="benefits-title">
                    Benefits    
                </div>
                    

                    <div className="benefit-circle" id="benefit-circle-1">
                        <div id="student-content">
                            <div id="student-title">
                                Benefits for the Students
                            </div>
                            <p>
                            Students get to learn directly from Industry Experts and learn the core gaps that need to be filled in. By learning on a case study basis, they understand critical processes and real-life experiences which have occurred within the industry.
                            </p>
                            <div className="content-feature">
                                <div>
                                    <div id="student-1-img"></div>
                                    Practical Learning from the industry</div>
                                <div>
                                    <div id="student-2-img"></div>
                                    Solve industry problem statements for rewards</div>
                                <div>
                                <div id="student-3-img"></div>
                                    Get directly connected with top industry experts, upskill yourself and make a potential career.</div>
                            </div>
                            </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="student-ellipse"></div>
                        </div>
                    </div>

                    <div className="benefit-circle" id="benefit-circle-2">
                        <div id="company-content">
                        <div id="company-title">
                                Benefits for the Company
                            </div>
                            <p>
                            Companies get an amazing opportunity to directly work with students and help in driving forward the industry with their products and innovations.
                            </p>
                            <div className="content-feature">
                                <div>
                                    <div id="company-1-img"></div>
                                    Access to Next Potential Users</div>
                                <div>
                                    <div id="company-2-img"></div>
                                Evangelising your product</div>
                                <div>
                                    <div id="student-2-img"></div>
                                    Building your Community</div>
                                <div>
                                <div id="student-3-img"></div>
                                More trained professionals with your product</div>
                                <div>
                                <div id="company-5-img"></div>
                                Help in hiring qualified talent</div>
                            </div>
                        </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="company-ellipse"></div>
                        </div>
                    </div>

                    <div className="benefit-circle" id="benefit-circle-3">
                    <div id="college-content">
                    <div id="college-title">
                                Benefits for the College
                            </div>
                            <p>
                            We provide colleges an opportunity to bring in amazing talent from across the world to inspire and educate students with practical learning directly from the industry.
                            </p>
                            <div className="content-feature">
                                <div>
                                    <div id="company-1-img"></div>
                                    Access to Industry Experts & Companies</div>
                                <div>
                                    <div id="company-2-img"></div>
                                    Enhanced Problem Solving Skills</div>
                                <div>
                                <div id="company-1-img"></div>
                                Learning of New Age Tools</div>
                                <div>
                                    <div id="student-2-img"></div>
                                    Internships & Rewards for Students</div>
                                <div>
                                <div id="college-5-img"></div>
                                Advance Reporting & Analytics</div>
                                <div>
                                <div id="college-6-img"></div>
                                Improved Accreditation </div>
                            </div>
                            </div>
                        <div className="inner-circle">
                            <div className="inner-image" id="college-ellipse"></div>
                        </div>
                    </div>

                    
                    
                    <h2>Benefits for the Students</h2>
                    
                    <h2>Benefits for the Company</h2>
                    
                    
                    <h2>Benefits for the College</h2><br/>
                    

                </div>
        </>
    )
}