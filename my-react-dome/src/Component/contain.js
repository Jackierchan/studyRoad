import React, {Component} from 'react';
export default class contain extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className='con-title'>
                    {this.props.title}
                </div>
                <div className='con-context'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
