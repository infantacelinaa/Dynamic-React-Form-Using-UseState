import {useState} from 'react'
import "./Regfrm.css"
export const Regfrm = () => {
    const[user,setUser] = useState({
        name: "Ram kumar",
        age:25,
        gender: "Male",
        isMarried: true,
        country: "India",
        bio:"Write something about yourself",
    });
function changeHandler(e){
  const name = e.target.name;
  const value = e.target.type==="checkbox"?e.target.checked:e.target.value;
setUser({...user,[name]:value})
//   console.log(name);
}
  return (
    <>
   <table>
     <tbody>
        <tr>
            <td>Name</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
        </tr>
        <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
        </tr>
    </tbody>
   </table>
      <form>
         <input type = "text" placeholder='full Name' value={user.name} onChange={changeHandler} name = "name" />
         <input type="number" placeholder='Age' value={user.age} onChange={changeHandler} name="age"/>
         <div className='gender'>
            <label htmlFor="male">
                <input type="radio" name="gender" onChange={changeHandler} id="male" checked={user.gender == "Male"} value = "Male"/>
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name="gender" onChange={changeHandler} id="female" checked={user.gender == "Female"} value="Female"/>
                Female
            </label>
         </div>
         <label htmlFor='isMarried'>
            <input type="checkbox" id="isMarried" onChange={changeHandler} checked={user.isMarried}/>
            Is Married
         </label>
         <div className='select-div'>
            <label htmlFor='country'>Select Country:</label>
            <select name="country" id="country" value={user.country}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK"></option>
            </select>
         </div>
         <textarea nmae="bio" id="bio" cols="30" rows="5" placeholder="Write about you"
         value={user.bio} onChange={changeHandler}></textarea>
      </form>
      
       </>
  );
};
