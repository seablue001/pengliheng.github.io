import React,{Component} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties,xcode } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class EnvDeteriorate extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
      style: tomorrowNightEighties,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>生存环境进一步恶化</h3>
        <p>说说什么好呢？你也许以为我说的是环境。。。的确，北京雾霾日益严重，如果只说自然环境的话，太狭义，我又不是小学生写作文。</p>
        <p>先说说最近发生的几件事。</p>
        <ul>
          <li>
            <h4><a target="_blank" href="https://bbs.hupu.com/19748742.html?merge_tid=19750515">广州租售同权</a></h4>
            <p>那么有个问题，以前买不起房子，那我租房，ok现在政府这样搞，租金也涨，买不起，也租不起了，现在广州市中心天河区100平方的房子5k一个月不算贵。再涨再炒的话，1w不是梦。</p>
            <p>先不说广州交通堵塞，人挤人挤地铁，生存环境进一步恶劣。也许不久将来，2w一个月是刚需。</p>
            <p>房价过高，没人接盘，没关系，房屋本身其实就不具备交易属性。毕竟房子比票子值钱多了，也保值多了。拿房子换票子，你当我傻吗？</p>
            <p>好吧，回归主题，既然没人买的起房子了，房价会降么？如果一定要降，我就不卖了，我涨租金。换一种模式接着玩。你奈我何？？？</p>
          </li>
          <li>
            <h4><a target="_blank" href="https://www.botvs.com/">机器学习</a></h4>
            <p>比特币涨价到1.5w/个(最高峰2w)说明数字化时代的到来，可能你的钱真的只是一个数字(问题是从来没有突破过5位数)。</p>
            <p>阿尔法狗围棋打败柯林，注意，机器学习，机器是可以学习的，深度学习。</p>
            <p>我把我的比特币交易通过机器学习挂到阿里云盘上面，那么他会自动根据我设定的策略，自动交易，高买低卖。。。等等，24h不停交易，机器永远比人理性勤快以及高智商。</p>
            <p>好吧，说了这么多，我想说的是，我们可以可以通过机器学习编写策略以及算法，机器自动代替我做一些事情，比如说游戏外挂/炒股/交易比特币，machine never make mistake!那么人与人的差距在哪里？拼的是谁的算法更高级，谁的机器算力更强大。</p>
            <p>好吧，转回来，计算机编程即将作为一个基本常识,不仅仅如此，人还要有法律常识，金融常识，就算你知道这么多，也仅仅说明你是一个目前暂时符合条件的未被社会所淘汰的正常人而已。</p>
            <p>我只是想做个不被社会所淘汰的正常人咋就这么难？</p>
            <p>那么这就是2/8定律？？？？80%的人将会被社会所淘汰，他们没钱，没有基本的常识，那么80%的人逃离北上广吧，那么差距进一步拉开，你永远赶不上一线城市精英。最终会因为没有人交配而灭绝。</p>
            <p>好吧，我在研究一下<a target="_blank" href="https://www.botvs.com/">botvs</a>如何自动挂挡交易吧。</p>
          </li>
          <li>
            <h4>罗辑思维</h4>
            <p>好吧，具体忘记是哪一期了，罗胖是说过的，我们的生活并没有随着进化而进一步变好，人类生存环境进一步恶化。</p>
            <p>ok,可能是我自己臆想/自己去考证去吧。</p>
          </li>
        </ul>
      </Col>
    )
  }
}
