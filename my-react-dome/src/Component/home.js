import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './app.css'
import { Grid } from 'antd-mobile';
import { NoticeBar, WhiteSpace } from 'antd-mobile';
import './app.css'

class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[{
                icon:require('./../asset/img/img1.png'),
                text:'美食'
            },{
                icon:require('./../asset/img/img2.png'),
                text:'电影'
            },{
                icon:require('./../asset/img/img3.png'),
                text:'酒店'
            },{
                icon:require('./../asset/img/img4.png'),
                text:'娱乐'
            },{
                icon:require('./../asset/img/img5.png'),
                text:'外卖'
            },{
                icon:require('./../asset/img/img6.png'),
                text:'卡拉ok'
            },{
                icon:require('./../asset/img/img7.png'),
                text:'机票'
            },{
                icon:require('./../asset/img/img8.png'),
                text:'周边游'
            },{
                icon:require('./../asset/img/img9.png'),
                text:'小吃'
            },{
                icon:require('./../asset/img/img10.png'),
                text:'丽人'
            },{
                icon:require('./../asset/img/img1.png'),
                text:'酒吧'
            },{
                icon:require('./../asset/img/img2.png'),
                text:'冒险'
            },]
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <NavBar
                    className='aa'
                    mode="dark"
                    leftContent="Harbin"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,

                    ]}
                ><input type="search" className="am-search-value" placeholder="Search"/></NavBar>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                </NoticeBar>

                <Grid className='icon1' data={this.state.arr} isCarousel/>


                <ul id='ul1'>
                    <li>
                        <span id='s1'>我们约会吧</span>
                        <p>恋人家人好朋友</p>
                        <img src={require('./../asset/img/activity1.png')} alt="找不到"/>
                    </li>
                    <li>
                        <span id='s2'>我们约会吧</span>
                        <p>恋人家人好朋友</p>
                        <img id='img2' src={require('./../asset/img/activity2.jpg')} alt="找不到"/>
                    </li>

                    <li>
                        <span id='s3'>我们约会吧</span>
                        <p>恋人家人好朋友</p>
                        <img src={require('./../asset/img/activity3.png')} alt="找不到"/>
                    </li>

                </ul>
                <div id='div1'>
                    <span>猜你喜欢</span>
                </div>
            </div>
        )
    }
}
export default home