
import React, { useState } from 'react';
import "./box.css";



function Box() {
       
        const [text,setText] = useState("");
        const [inputValue,setInputValue] = useState("");
        const  [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [email,setEmail]= useState("");
        const  [age,setAge] = useState("");
        const [male,setMale] = useState("");
        const [female,setFemale] = useState("");
        const [position,setPosition]= useState("");

    
const handleChange1 =(e) => {
 setFirstName(e.target.value);
}

const handleChange2 =(e) => {
    setLastName(e.target.value);
 }
   const handleChange3 =(e) => {
    setEmail(e.target.value);
 }

   const handleChange4 =(e) => {
    setAge(e.target.value);
}

   const handleChange5 =(e) => {
    setMale(e.target.value);
}
   const handleChange7 =(e) => {
    setFemale(e.target.value);
}
   const handleChange6 =(e) => {
    setPosition(e.target.value);
}

  return  (<div>


   <div className="formbold-main-wrapper">


   <div className="formbold-form-wrapper">
     <form  >
        <div className="formbold-input-flex">
          <div>
              <label for="firstname" className="formbold-form-label"> First name </label>
              <input
              onChange={handleChange1}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Jane"
              className="formbold-form-input"
              />
          </div>
          <div>
              <label for="lastname" className="formbold-form-label"> Last name </label>
              <input
              onChange={handleChange2}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Cooper"
              className="formbold-form-input"
              />
          </div>
        </div>

        <div className="formbold-input-flex">
          <div>
              <label for="email" className="formbold-form-label"> Mail </label>
              <input
              onChange={handleChange3}
              type="email"
              name="email"
              id="email"
              placeholder="jhon@mail.com"
              className="formbold-form-input"
              />
          </div>
          <div>
              <label for="phone" className="formbold-form-label"> Age </label>
              <input
              onChange={handleChange4}
              type="text"
              name="age"
              id="age"
              placeholder="(319) 555-0115"
              className="formbold-form-input"
              />
          </div>
          <div>
              <label for="firstname" className="formbold-form-label"> Position </label>
              <input
              onChange={handleChange6} 
              type="text"
              nameName="firstname"
              id="firstname"
              placeholder="Jane"
              className="formbold-form-input"
              />
          </div>




        </div>

        <div className="formbold-input-radio-wrapper">
            <label for="jobtitle" class="formbold-form-label"> Gender </label>

            <div className="formbold-radio-flex">
              <div className="formbold-radio-group">
                   <label className="formbold-radio-label">
                     <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"  onChange={handleChange5} />
                        Male
                       <span className="formbold-radio-checkmark"></span>
                     </label>
              </div>

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"  onChange={ handleChange7} />
                       Female
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>

             

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                  Others
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
        </div>

       

        <button className="formbold-btn"    onClick={() => 
                                               setText (
                                                        [firstName,
                                                         lastName,
                                                            age,
                                                         email,
                                                           male,
                                                          female,
                                                           position]  ) }>

              




            
            Create Box
        </button>
     
    </form>
  </div>


  <div> <h3>User</h3>
             <p>{firstName}</p>
               < p>{lastName}</p>
               <p>{age}</p>
               < p>{email}</p>
               <p>{age}</p>
               < p>{email}</p>

        </div>
  
    
  
</div>
<div>

   <button  onClick={() => 
                   setText ([firstName,
                             lastName,
                              age,
                              email,
                              male,
                              female,
                              position]) }>Click me</button>

    

  
       
</div>

<div>User</div>
  <div>{text}</div>









   </div>

        
    )
}

export default Box;