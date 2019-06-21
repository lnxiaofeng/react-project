import React, { Component, Fragment } from "react";
import { TabBar } from "antd-mobile";
class Mymodule extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="Home"
              icon={<span className={"iconfont icon-home"} />}
              selectedIcon={<span className={"iconfont icon-home"} />}
              selected={this.props.match.url === "/"}
              onPress={() => {
                this.props.history.push("/");
              }}
              data-seed="logId"
            >
              {this.props.match.url==='/'?this.props.children:null}
            </TabBar.Item>
            <TabBar.Item
              icon={<span className={"iconfont icon-gouwuche"} />}
              selectedIcon={<span className={"iconfont icon-gouwuche"} />}
              title="购物车"
              key="Shop"
              badge={"1"}
              selected={this.props.match.url === "/shop"}
              onPress={() => {
                this.props.history.push("/shop");
              }}
              data-seed="logId1"
            >
              {this.props.match.url==='/shop'?this.props.children:null}
            </TabBar.Item>
            <TabBar.Item
              icon={<span className={"iconfont icon-weibiaoti2fuzhi12"} />}
              selectedIcon={
                <span className={"iconfont icon-weibiaoti2fuzhi12"} />
              }
              title="我的"
              key="My"
              selected={this.props.match.url === "/my"}
              onPress={() => {
                this.props.history.push("my");
              }}
            >
              {this.props.match.url==='/my'?this.props.children:null}
            </TabBar.Item>
          </TabBar>
        </div>
      </Fragment>
    );
  }
}
export default Mymodule;
