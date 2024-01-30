import profilepic from './assets/react-profile.jpg';

function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture" />
            <h2 className='card-title'>software engineer</h2>
            <p>I code solutions to solve complex problems</p>
        </div>
    );
}

export default Card;