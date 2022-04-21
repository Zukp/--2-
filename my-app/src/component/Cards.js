import './Cards.css'



function Cards(props) {
   
    return (
        <div className='cont-done'>
          

               <div className="cont-img" style={{backgroundColor:props.wallpaper}}>
               <img src={props.profilePic}/>
               </div>
        
          <h3>{props.username}{props.id}</h3>



           <div className="cont-p">{props.userInfo}</div>

        
           <div className='done'>
           <a href='https://peaksoft.talentlms.com/unit/view/id:4803'><b>web:</b>https://twitter</a><br />
           <a href='https://peaksoft.talentlms.com/unit/view/id:4803'><b>twitter:</b>https://view/id:4803</a>
           </div>
        </div>
    )
}
export default Cards