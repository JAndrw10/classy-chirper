import React from 'react';  // importorted usestate hook from react


class App extends React.Component{
    constructor(props){
        super (props);
        this.state ={
         newUsername: '',
         newMsg: '',
         chirps: []

        }
    }
}

this.setState({
    chirps: [
    
    {
            username: 'Moe',
            message: 'Keep Laughing. As long as you are laughing you still have hope'
            
    },
    {
        username: 'Larry',
            message: 'If you have crazy friends, you have everything'
    },
    {
        username: 'Curly',
            message: 'A simple job for a simople person'
    }

    ]
})

handleSubmit(e) {
    e.preventDefault();
    this.setState({
        username: "",
        message: "",
        chirps: [...this.state.chirps, { username: this.state.username, message: this.state.message }]
    })
}


    // const [newUsername, setNewUsername] = useState('');
    // const [newMsg, setNewMsg] = useState('');
    // const [chirps, setChirps] = useState([
    //     {
    //         username: 'Moe',
    //         message: 'Keep Laughing. As long as you are laughing you still have hope'
    //     },

    //     {
    //         username: 'Larry',
    //         message: 'If you have crazt friends you have everything'
    //     },

    //     {
    //         username: 'Curly',
    //         message: 'A simple job for simple people'
    //     }
    // ]);


  
    // let myChirps = chirps.map((chirp, id) => {
    //     return (
    //         <React.Fragment key={id}>
    //             <div className="card m-4">
    //                 <div className="card-body">
    //                     <h5 className="card-title">{chirp.username}</h5>
    //                     <p className="card-text">{chirp.message}</p>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     );
    // });

    // let submitChirp = () => {
    //     let newChirp = {
    //         username: newUsername,
    //         message: newMsg
    //     }

    //     setChirps([...chirps, newChirp])
    //     emptyInputs()
    // }

    // let emptyInputs = () => {
    //     setNewUsername('')
    //     setNewMsg('')
    // }

    return (
        render() {
            <main classname
            
            // <div className="row m-4">
            //  <h1> Chirper!</h1>
            //  <div className="col-2">
            //  <input type="text" id="un-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            // </div>

            // <div className="col-2">
            //   <input type="text" id="msg-input" placeholder="Whats up?" onChange={(e) => setNewMsg(e.target.value)}> </input>
            // </div>

            //   <div className="col-2">
            //    <button className="btn btn-primary" onClick={submitChirp}> Submit Chirp</button>
            //     </div>
            // </div>
            // {myChirps}
        }
    )
}







export default App;


// changed line 4 to : class App extends React.Component{

