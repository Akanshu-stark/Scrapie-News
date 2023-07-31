import React from 'react'

const About=()=>{
    return (
       <div className="container ">
            <h1 className='text-center' style={{margin:"30px"}}>About Scrapie News</h1>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Category Feature
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This feature in the app is used to view the <strong>news category wise i.e. entertainment, business, sports, health, science,etc.</strong> 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About Next Page feature
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This feature help user to show <strong>different real-time news</strong> in the next page every time a user hit next button.  
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    About News API
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    This helps user to get <strong>real-time news</strong> on the app by using the <strong>News API(Application Programmable Interface).</strong>         </div>
                </div>
            </div>
            </div>
       </div>
    )
  }

export default About
