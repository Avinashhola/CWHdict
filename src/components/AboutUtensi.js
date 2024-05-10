// import React, { useState } from 'react'

// const AboutUtensi = () => {

//     // const {color: props.mode === 'light'? 'black':'white'} = {
//     //     backgroundColor: "black",
//     //     color: "white"
//     // }

// let [{color: props.mode === 'light'? 'black':'white'},set{color: props.mode === 'light'? 'black':'white'}]= useState({
//     backgroundColor: "white",
//     color: "black",
//     border:"1px solid black"
// })
// let [btnText,setBtnText] = useState("Enable dark mode")

// const togglingstyle=()=>{
//     if({color: props.mode === 'light'? 'black':'white'}.color === 'black'){
//         set{color: props.mode === 'light'? 'black':'white'}({
//             backgroundColor: "black",
//             color: "white",border:"1px solid white"

//     })
//     setBtnText("Enable Light mode")
//     }
//     else{
//         set{color: props.mode === 'light'? 'black':'white'}({
//             backgroundColor: "white",
//             color: "black",border:"1px solid black"

//     })
//     setBtnText("Enable Dark mode")
     
//     }
// }

//     return (
//         <div className="container py-2 my-5" style={{color: props.mode === 'light'? 'black':'white'}}>
//             <h2>About the utensils</h2>
//             <div style={{color: props.mode === 'light'? 'black':'white'}} className="accordion accordion-flush" id="accordionFlushExample">
//                 <div className="accordion-item" style={{color: props.mode === 'light'? 'black':'white'}}>
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" style={{color: props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                             Accordion Item #1
//                         </button>
//                     </h2>
//                     <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//                     </div>
//                 </div>
//                 <div className="accordion-item" style={{color: props.mode === 'light'? 'black':'white'}} >
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed"  style={{color: props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//                             Accordion Item #2
//                         </button>
//                     </h2>
//                     <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
//                     </div>
//                 </div>
//                 <div className="accordion-item" style={{color: props.mode === 'light'? 'black':'white'}}>
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" style={{color: props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//                             Accordion Item #3
//                         </button>
//                     </h2>
//                     <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='container my-3'>
//                 <button className='btn' style={{color: props.mode === 'light'? 'black':'white'}} onClick={togglingstyle}>{btnText}</button>
//             </div>

//         </div>
//     )
// }

// export default AboutUtensi


import React, { useState } from 'react'

const AboutUtensi = (props) => {

// const myStyle1 ={
//     color: props.mode === 'dark'? 'white':"grey",
//     backgroundColor:props.mode === 'dark'? 'grey':'white',
// }
// <div className="container py-2 my-5" style={myStyle1}>


    return (
        <div className="container py-2 my-5" style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'grey' }}>
            <h2>About the utensils</h2>
            <div style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'grey' }} className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'grey' ,color: props.mode === 'light'? 'black':'white',border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'grey'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'grey' ,color: props.mode === 'light'? 'black':'white',border: props.mode === 'light' ? '1px solid black' : '1px solid white'}} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'grey' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode === 'light'? 'white':'grey' ,color: props.mode === 'light'? 'black':'white',border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'grey' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button className='btn' style={{backgroundColor: props.mode === 'light'? 'white':'grey' ,color: props.mode === 'light'? 'black':'white',border: props.mode === 'light' ? '1px solid black' : '1px solid white'}} >{props.mode === 'light'? 'Enable Dark mode ':'Enable Light mode'} </button>
            </div>

        </div>
    )
}

export default AboutUtensi