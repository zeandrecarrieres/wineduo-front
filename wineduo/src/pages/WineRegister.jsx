import { useState} from 'react'
import './wineregister.css'

function WineRegister() {
    const [type, setType] = useState('')
    const [region, setRegion] = useState('')
    const [name, setName] = useState('')
    const [harvest, setHarvest] = useState('')
    const [alcohol, setAlcohol] = useState('')
    const [grape1, setGrape1] = useState('')
    const [grape2, setGrape2] = useState('')
    const [grape3, setGrape3] = useState('')
    const [note, setNote] = useState('')
    const [comments, setComments] = useState('')
   
    // console.log(type, region, name, harvest, alcohol, grape1, grape2, grape3, note, comments)

    const submit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3001/wine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            region,
            name,
            harvest,
            alcohol,
            grape1,
            grape2,
            grape3,
            note,
            comments
          }),
        });
        // setCreate(true)
      };

    return (
        <div>
            <div className="wine-register-container">
                <form onSubmit={submit}>
              <div className="left-side">
                <h2><span>I</span>en train de boire...</h2>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <input type="text" name="type" onChange={(e)=>setType(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="region">Region:</label>
                        <input type="text" name="region" onChange={(e)=>setRegion(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Wine Name:</label>
                        <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="harvest">Harvest:</label>
                        <input type="text" name="harvest" onChange={(e)=>setHarvest(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alcohol">Alcohol (%):</label>
                        <input type="text" name="alcohol" onChange={(e)=>setAlcohol(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grape1">Grape 1:</label>
                        <input type="text" name="grape1" />
                        <input type="text" name="perc1" onChange={(e)=>setGrape1(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="grape2">Grape 2:</label>
                        <input type="text" name="grape2" />
                        <input type="text" name="perc2"  onChange={(e)=>setGrape2(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="grape2">Grape 3:</label>
                        <input type="text" name="grape3" />
                        <input type="text" name="perc3" onChange={(e)=>setGrape3(e.target.value)}/>
                    </div>
                   
               
              </div>
              <div className="right-side">
              <div className="form-group">
                        <label htmlFor="note">Note:</label>
                        <input type="text" name="note" onChange={(e)=>setNote(e.target.value)}/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments:</label>
                        <input type="text" name="comments" onChange={(e)=>setComments(e.target.value)} />
                   </div>
              </div>
              <button className="save-btn">Save</button>
              </form>
            </div>  
        </div>
    )
}

export default WineRegister
