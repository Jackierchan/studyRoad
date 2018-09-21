import React,{Component} from "react";

class B extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                B页面
                {this.props.match.params.num}
            </div>
        );
    }
}
export default B