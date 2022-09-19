import React, { useState } from "react";

function AddUser({ save, update }) {
  const [isEdit, setIsEdit] = useState(false)
 
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    about: "",
    favColor: "",
    gender: "",
    email: "",
    dob: "",
    luckNumber: 0,
    courseSatisfaction: 0,
    phone: "",
    education: "",
    hobbies: [],
  });
  if(isEdit){
    setNewUser(update)
  }
  const [hobbies, setHobbies] = useState([]);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setNewUser({
      ...newUser,
      [name]: type === "checkbox" ? checked : value,
      hobbies: hobbies,
    });
   
  }

  function HobbiesChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies((prev) => prev.filter((e) => e !== value));
    }
  }
  function cleanForm() {
    setTimeout(() => {
      setNewUser({
        firstname: "",
        lastname: "",
        about: "",
        favColor: "",
        gender: "",
        email: "",
        dob: "",
        luckNumber: 0,
        courseSatisfaction: 0,
        phone: "",
        education: "",
        hobbies: [],
      });
      setHobbies([]);
    }, 2000);
  }

  return (
    <>
      <div className="wrapper" id="add-form">
        <form onSubmit={(e) => save(newUser, e)} id="wizard">
          <h4>Add new user</h4>
          <section>
            <div className="inner">
              <div className="form-row form-group">
                <div className="form-holder">
                  <input
                    type="text"
                    required
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                    value={newUser.firstname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-holder">
                  <input
                    type="text"
                    required
                    name="lastname"
                    className="form-control"
                    placeholder="Last Name"
                    value={newUser.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-holder">
                  <label className="mb-3 mr-2 gender" htmlFor="vol">
                    Eduction: {"  "}
                  </label>
                  <select
                    name="education"
                    value={newUser.education}
                    form="education"
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      ...Choose Here...
                    </option>
                    <option value="High School">High school</option>
                    <option value="Collage">Collage</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-holder">
                  <label className="mb-3 mr-2 gender" htmlFor="vol">
                    Course Satisfaction between 1 -10 {"  "}
                  </label>
                  <br />
                  <input
                    type="range"
                    id="ageInputId"
                    name="courseSatisfaction"
                    min="0"
                    step="1"
                    max="10"
                    value={newUser.courseSatisfaction}
                    onChange={handleChange}
                  />
                  <output name="ageOutputName" id="ageOutputId">
                    {" "}
                    {newUser.courseSatisfaction}
                  </output>
                </div>
              </div>

              <div className="form-row">
                <div className="form-holder">
                  <input
                    type="date"
                    name="dob"
                    max="2000-12-31"
                    min="1980-12-31"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={newUser.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-holder">
                  <label className="mb-3 mr-2 gender" htmlFor="gender">
                    Gender : {"  "}
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="male"
                    autoComplete="off"
                    value="Male"
                    checked={newUser.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="male"
                  >
                    Male
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="female"
                    autoComplete="off"
                    value="Female"
                    checked={newUser.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="female"
                  >
                    Female
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="other"
                    autoComplete="off"
                    value="Other"
                    checked={newUser.gender === "Other"}
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="other"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-holder">
                  <textarea
                    name="about"
                    id="msg"
                    className="form-control"
                    placeholder="Write about yourself"
                    cols="50"
                    rows="4"
                    value={newUser.about}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-row">
                <div className="form-holder">
                <label className="mb-3 mr-2 gender" htmlFor="gender">
                   Luck Number : {"  "}
                  </label>
                  <input
                    type="Number"
                    name="luckNumber"
                    
                    placeholder="Lucky Number"
                    value={newUser.luckNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-holder">
                <label className="mb-3 mr-2 gender" htmlFor="gender">
                    Favorite Color : {"  "}
                  </label>
                  <input
                    type="color"
                    name="favColor"
                    
                    placeholder="Favorite Color"
                    value={newUser.favColor}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-holder">
                  <label className="mb-3 mr-2 gender" htmlFor="gender">
                    Hobbies : {"  "}
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="Basketball"
                      id="flexCheckDefault"
                      onChange={HobbiesChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Basketball
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="motorcycle"
                      id="flexCheckChecked"
                      onChange={HobbiesChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      motorcycle
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="pool billiards"
                      id="flexCheckDefault"
                      onChange={HobbiesChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      pool billiards
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="Movies"
                      id="flexCheckChecked"
                      onChange={HobbiesChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Movies
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-holder">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={newUser.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-holder">
                  <input
                    type="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    className="form-control"
                    placeholder="123-456-7890"
                    value={newUser.phone}
                    onChange={handleChange}
                  />
                </div>
              </div> 
             
              <button className="btn-custom" type="submit" onClick={cleanForm}>Save</button>
              
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default AddUser;
