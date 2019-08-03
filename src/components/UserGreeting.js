import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
       return this.state.isLoggedIn && <div>Welcome Abhishek</div>
        //3rd Approach
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Abhishek</div> :
        //     <div>Welcome Guest</div>
        // )
        // 2nd approach
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Abhishek</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        //1st Approach
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Abhishek
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //         <div>Welcome Guest</div>
        //     </div>
        //     )
        }
        // Default
        // return (
        //     <div>
        //         <div>Welcome Abhishek</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }


export default UserGreeting
