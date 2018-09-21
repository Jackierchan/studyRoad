import React,{Component} from "react";

const Children = ({match}) =>{
    return (
        <div>
            {
                match?match.params.num:0
            }
            children页面
        </div>
    )
};
// class Children extends Component {
//     constructor(props){
//         super(props);
//     }


//     render() {
//         return (
//             <div>
//                 children页面
//                 {this.props.match.params.num}
//             </div>
//         );
//     }
// }
export default Children
