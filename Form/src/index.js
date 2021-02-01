

import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{

    constructor(){
        super();

        this.state={
            passOutYear: '2021',
            about: 'Write something about yourself!'
            };

    }
    

    inputHandler= (event)=>{

        let nam=event.target.id;
        let val=event.target.value;

        // if(nam === "passOutYear"){
        //     if(!Number(val) && val.toString().length !==4 ){
        //         alert("Invalid Year! ");

        //     }
        // }// Not necessary 

        this.setState({[nam]:val});

    }


    submitHandler= (event) =>{

        alert("Form Submitted by \n"+this.state.ID);


    }
    

    


    render() {


        return (

            <form onSubmit={this.submitHandler}>
                <h1>Intern Details</h1>
                <hr/> 
                <p>Name: </p>
                <input id='name'  type="text" onChange={this.inputHandler}></input>
                 <p></p>

                <p>ID: </p>
                <input id='ID' type="text" onChange={this.inputHandler}></input>
                

                <p>College: </p>
                <input id='College' type="text" onChange={this.inputHandler}></input>
                <p></p>

                <label htmlFor="passOutYear">PassOut year: </label>
                <select id="passOutYear" onChange={this.inputHandler} value={this.state.passOutYear}>
                    <option value="2021">2021</option>
                    <option value="Volvo">2022</option>
                    <option value="Fiat">2023</option>
                </select>
                <p>Info:</p>
                <textarea id="about" onChange={this.inputHandler} value={this.state.about} />
                <p></p>
                <input style={{backgroundColor:'blue', color:'white'}} value="submit" type='submit'/>

            </form>
        )

    }



}




ReactDOM.render(

    <App/>,
    document.querySelector('#root')


);

