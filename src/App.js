import logo from './logo.svg';
import './App.css';
import imgIcon from './assets/Octocat.png'
import githubIcon from './assets/GitHub-Mark-Light-120px-plus.png'
import { useState } from 'react';
function App() {
const [search,setSearch] = useState('')
const [userData,setUserData] = useState()
 const handleSubmit = (event) =>
 {
    event.preventDefault()
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse=> setUserData(userResponse))
 }


 const handleChange = (event) =>{

      setSearch(event.target.value)
 }






  return (
    <div className="container" >
        <div className = "container text-center">
                <div>       
                    <img src= {imgIcon} alt="" className ="image" height ="200px"/>    
                    <p className = "py-5" id = "myH1"> Github Profile Searcher</p>
                </div>

                <p className = "description"> Search any github user and see your photo, username and website.<br></br>
                      You only need to digit the user name on field. 
                      <br/>
                      <br/>
                      After this, check below the photo, location and  user name of github user.
                      </p>
                  
                <div className = "form-group">
                    <form onSubmit = {handleSubmit}>
                          <h2 className = "myH2">Github User:</h2>
                           <div className = "input-group mb-3">
                                <input 
                                type = "text"
                                className = "form-control"
                                 placeholder = "Insert a github username"
                                required
                                value = {search}
                                onChange = {handleChange}
                                />
                            <span className = "input-group-btn">
                                  <button 
                                      type = "submit" 
                                      className = "btn btn-success"
                                  >
                                        Search Github User
                                  </button>
                            </span>
                  </div>
                 </form>
            <div className = 'py-5'>
              {!userData &&(
              <img
                src = {githubIcon}
                className="responsive rounded circle"
                alt = ""
                height = "120px"
              />
              )}

             {userData && (
             <div>
                  <img
                      src = {userData.avatar_url}
                      className="responsive rounded circle"
                      alt = ""
                      height = "120px"
                    />  
                  <h1 className = "nameOfUser">
                    <a
                    href = ""
                    target = "_new">{userData.name}</a>
                  </h1>
                  <h3 className = "localeDescription">
                    <a href = ""target = "_new">{userData.location}</a>
                    </h3>
                  <p>
                    <a href = ""target = "_new">{userData.blog}</a>
                  </p>
             </div>
             )}
            </div>
        </div>

        </div>
        

      


    </div>
  );
}

export default App;

