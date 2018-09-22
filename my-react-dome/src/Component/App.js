import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './app.css'
import { Grid } from 'antd-mobile';
import { NoticeBar, WhiteSpace } from 'antd-mobile';


const data = Array.from(new Array(16)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));
export default class App extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    };
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
            ><input type="search" className="am-search-value" placeholder="Search" value=""/></NavBar>
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
            </NoticeBar>

            <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
            <WhiteSpace size="lg" />
        </div>
        )
    }
}