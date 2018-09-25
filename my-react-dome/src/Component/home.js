import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../asset/css/app.css';
import { Grid } from 'antd-mobile';
import { NoticeBar, WhiteSpace } from 'antd-mobile';
import '../asset/css/home.css';
import '../asset/css/reset.css';
import Contain from './contain';
import Product from './product';
import {Link} from 'react-router-dom'

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
            },],
            product:[]
        };
    }
    componentWillMount(){
        fetch('http://www.xiechenxi.cn/').
        then((response)=>{
            return response.json()
        }).
        then((data)=>{
            this.setState({
                product: data
            })
        })
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
            <div id='div7'>
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

                <WhiteSpace size="lg" />


                <ul id='ul1'>
                    <li>
                        <h3 id='s1'>我们约会吧</h3>
                        <p>恋人家人好朋友</p>
                        <img src={require('./../asset/img/activity1.png')} alt="找不到"/>
                    </li>
                    <li>
                        <h3 id='s2'>低价超值</h3>
                        <p>十元惠生活</p>
                        <img id='img2' src={require('./../asset/img/activity2.jpg')} alt="找不到"/>
                    </li>

                    <li>
                        <h3 id='s3'>家庭聚会</h3>
                        <p>恋人家人好朋友</p>
                        <img src={require('./../asset/img/activity3.png')} alt="找不到"/>
                    </li>

                </ul>
                <WhiteSpace size="lg" />
                <Contain title='猜你喜欢'>
                    {
                        this.state.product.map((elem,index)=>{
                            return <Link to='/detail'><Product key={elem.product_id} elem={elem}></Product></Link>
})
                    }
                </Contain>



                {/*<div id='div1'>*/}
                    {/*<span>猜你喜欢</span>*/}
                {/*</div>*/}
                {/*<div id='div2'>*/}
                    {/*<div id='left'>*/}
                        {/*<img src={require('./../asset/img/activity3.png')} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div id='right'>*/}
                        {/*<div>*/}
                        {/*<h3>aaaaaa</h3>*/}
                        {/*<p>[11店通用]10元代金卷一份</p>*/}
                        {/*<span>8</span>*/}
                        {/*<p>门市价：6元</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}


            </div>
        )
    }
}
export default home