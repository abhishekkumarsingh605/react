import React from 'react'

// export default function Greet(){
//     return <h1>Hello Abhishek</h1>
// }

const Greet = props => {
    // console.log(props)
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}
export default Greet