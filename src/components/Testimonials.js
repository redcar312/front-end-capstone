import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import '../styles/Testimonials.css'
import john from '../images/john.PNG'
import bill from '../images/Bill.PNG'
import sarah from '../images/sarah.PNG'
import rollo from '../images/Rollo.PNG'

export default function testimonials(){
    const testimonials = [
        {
           amount: 3,
           name: "John",
           description: "It was ok",
           picture: john
            
            
        },
        {
            amount: 5,
            name:"Bill",
            description: "The best food i've ever had!",
            picture: bill
        },
        { amount: 4,
          name: "Sarah",
          description: "The Greek salad was fantastic!",
          picture: sarah

        },

        {
            amount:5,
            name: "Ronald",
            description: "The food was great!",
            picture: rollo

        }
    ]
    let  test = testimonials.map((testimonial) => {{
            
            
            return(<div className='testimonialCard'> 
                
                
                
                
                <div className='imgBlock'>
                    <picture>
                        <img src={testimonial.picture} ></img>
                    </picture>
                    <h2>{testimonial.name}</h2>
                </div>
                <div className='ratingBlock'>
                {[...Array(testimonial.amount)].map(() => {
                    return (
                        <FontAwesomeIcon icon={faStar} style={{color: "#f5e10a",}} size={"lg"}></FontAwesomeIcon>
                    )
                })}
                </div>
                
                <div className='testimonialDesc'>
                    <q>{testimonial.description}</q>
                </div>
            </div>)
        }})
    
    return(
        <div>
            <section className='testimonials'>
                <div className="sectionHeader">
                    <h1>Testimonials</h1>
                </div>
                <div className='testimonialCards'>
                       {test} 
                </div>
            </section>
        </div>
    )
}