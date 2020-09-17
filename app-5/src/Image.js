import React, {Component} from 'react'
class Image extends Component {
    render(){
        return (
            <section>
                <img src= {this.props.url}/>
                <div>ERROR 599</div>
            </section>
        )
    }
}


export default Image