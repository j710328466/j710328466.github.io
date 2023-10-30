import React, { useEffect } from 'react';


import styles from './css/index.less'

export default (props) => {

  useEffect(() =>{
  }, [])

  return (
    <div className={styles.resume}>
      <p className="last-modified"><a onClick={() => location.replace('/')} >回首页</a> 最后更新时间：2022年05月</p>
        <div className="content">
            <header className="content-hd">
                <section className="title">
                    <div className="name">
                        <h1>江志雄<small>Jiang Zhixiong</small></h1>
                    </div>
                    <div className="job">
                        <h2>Web前端开发工程师<small> / 杭州</small></h2>
                    </div>
                </section>
                <section className="info">
                    <h2>男 · 本科</h2>
                    <h3>2018年毕业 · 5年经验</h3>
                    <h3>东华理工大学 · 软件工程</h3>
                </section>
                <section className="contact">
                    <ul>
                        <li><a href="https://j710328466.github.io" target="_blank"><span className="contact-link">https://j710328466.github.io</span><i className="iconfont icon-homepage"></i></a></li>
                        <li><a href="https://github.com/j710328466" target="_blank"><span className="contact-link">github.com/j710328466</span><i className="iconfont icon-github"></i></a></li>
                        <li><a href="mailto:710328466@qq.com" target="_blank"><span className="contact-link">710328466@qq.com</span><i className="iconfont icon-email"></i></a></li>
                        <li><a href="#" target="_blank"><span className="contact-link">极简主义·热爱生活</span><i className="iconfont icon-email"></i></a></li>
                    </ul>
                </section>
            </header>
            <div className="content-bd">
                <div className="content-left">
                    <section id="experience">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">工作经验</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <div className="item item-main">
                                <header className="item-hd">
                                    <span className="item-time">2017.10 ~ 2020.03</span>
                                    <h3 className="item-name" style={{ float: 'right' }}>早稻科技</h3>
                                </header>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <a className="btn item-more" href="http://jimistore.com" target="_blank" title="工作经历">官网</a>
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 官网 · nextJs、reactJs、antd、pm2</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        负责优化旧版官网，针对之前用户体验差的基础上向领导提出优化引入服务端渲染框架<em>nextJs</em>，使用<em>antd</em>作为官网辅助样式，使用<em>ant Motion</em>作为动画库，并使用<em>Pm2</em>部署在服务器上，该项目属于公司<em>第一个node端搭建项目</em>，对于公司node后端化具有一定的里程碑意义。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 定制H5 · webpack、typescript</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong><strong>前端开发</strong>
                                        从最初版本的<em>gulp</em>版本使用<em>Webpack</em>重新搭建脚手架将资源优化到更节约，后期引入<em>typescript</em>
                                        强制规范开发规范，使代码更易维护，其中开发过的<em>月饼大作战</em>和<em>约会大乱斗</em>
                                        两款小游戏使用了大量<em>css样式</em>，趣味性颇受好评。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <a className="btn item-more" href="https://www.npmjs.com/package/jimi-web-public-tools" target="_blank" title="工作经历">jimi-tools</a>
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 定制工具库 · webpack、typescript</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        该活动依赖于公司最底层工具库，并服务于活动开发，主要作用是为了统一管理优化在活动开发时使用的多端约定的函数方法，该工具包使用<em>typescript</em>规范开发，并放置于公司私有npm仓库中维护，内容包括但不限于：<em>登录授权</em>、
                                        <em>分享</em>、<em>语音验证</em><em>验证码登录</em>、<em>获取验证码</em>等等...
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 运营管理平台 · ReactJs、Redux、Dva、Antd</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        负责运营平台商品营销模块、渠道管理模块、会员管理模块、数据配置模块。
                                        基于<em>react</em><em>redux</em><em>antd</em>开发，实现单文件页面组件化开发、依赖处理等能力；封装部分重复<em>组件</em>和<em>函数</em>方法，减少重复工作量。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> BI数据管理平台 · ReactJs、Redux、Dva、Antd</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong>
                                        主要用于BI团队，整合用户信息，构建用户画像，从而起到降低风险和降低成本的作用。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-bd">
                            <div className="item item-main">
                                <header className="item-hd">
                                    <span className="item-time">2020.03 ~ 2021.03</span>
                                    <h3 className="item-name" style={{ float: 'right' }}>佰钧成科技-天猫精灵事业部</h3>
                                </header>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 天猫精灵内测平台 · Umi、reactJs、midway、antd、ts</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong>
                                        负责该平台的bug维护，功能开发，使用的技术为阿里技术栈：<em>cuz</em>（已开源但体验效果不佳），后重构升级为<em>Umi</em> + <em>midway</em>(eggjs前身)
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 天猫精灵安全服务中心 · umi、reactJs、midway、antd、ts</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        用户数据采集、用户画像、用户数据申请、内外数据合作评审、数据使用要求规范等业务相关的聚合平台。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 天猫精灵售后服务中心 · umi、antd-mobile-v2、midway、ts</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong><strong>前端开发</strong>
                                        属于天猫精灵app端，帮助中心项目，具体满足的需求为：用户售后申请或者是在使用app时问题反馈到运营同学，记录并解决问题。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 数字制造服务平台 · nextJs、antd、midway、ts</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        将线上的客户需求提出，运营团队评估，结果交付在线上实现流转的最小闭环（属于beta阶段产品）
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section-bd">
                            <div className="item item-main">
                                <header className="item-hd">
                                    <span className="item-time">2021.03 ~ 2022.02</span>
                                    <h3 className="item-name" style={{ float: 'right' }}>宇泛智能科技</h3>
                                </header>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 蓝色荣耀 · Umi、reactJs、antd、ts、yapi</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong><strong>前端开发</strong>
                                        属于供对接甲方使用的平台、将智慧工地概念应用落地的闭环式解决方案，功能包括：签署合同、工人打卡、安全监控、发放薪资、设备监控...
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 数据可视化大屏 · easyV-UI、reactJs、yapi</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong><strong>前端开发</strong>
                                        杭州湾开发商对接项目，供客户将智慧工地部分系统功能通过可视化图表方式展示在数据大屏上，功能包括：升降机大屏、安全帽、扬尘设备、工人进出场记录、在场人员统计...等
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> Toucan-UI · Echart、G2/plot、react、ts、dumi、lerna</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Owner</strong><strong>前端开发</strong>
                                        toucan-UI 属于二期数据大屏的自研产物，弥补了一期数据大屏功能上的不完善与可维护性差的缺陷，有三部分组件：<em>meta 元组件</em>、<em>chart 图表组件</em>、<em>bizs 业务组件</em> 构成
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> UU中心 · electron、antd、Oss、ts、umi</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>前端开发</strong>
                                        基于 <em>electron</em> 的桌面端应用，功能包含各种提升前端效能的应用，包括有：OSS 资源上传平台、物料库、波塞冬集成埋点、uniubi-ui、uniubi-lib...等（部分应用属于推广阶段）
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="content-right">
                    <section id="skill">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">专业能力</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <ul className="section-list">
                                <li><p className="section-content"><i className="iconfont icon-dot"></i>
                                    熟悉<strong>JavaScript</strong>、<strong>HTML</strong>、<strong>CSS</strong>开发规范、<strong>UI重构</strong>、<strong>页面布局</strong>，重视<strong>页面交互</strong>与<strong>用户体验</strong>。
                                </p></li>
                                <li><p className="section-content"><i className="iconfont icon-dot"></i>
                                    对<strong>JavaScript</strong>、各类<strong>UI组件库</strong>、<strong>JS类库</strong>、<strong>模板引擎</strong>、<strong>MV*框架</strong>、<strong>工程化工具</strong>等有着较熟练的实践和较深刻的感悟。
                                </p></li>
                                <li><p className="section-content"><i className="iconfont icon-dot"></i>
                                    对<strong>Node.js</strong>、<strong>模块化规范</strong>、<strong>CSS预处理器</strong>、<strong>数据可视化</strong>、<strong>设计模式</strong>、<strong>性能优化</strong>、<strong>前端安全</strong>等也有一定的应用与思考。
                                </p></li>
                                <li><p className="section-content"><i className="iconfont icon-dot"></i>
                                    熟练使用<strong>ES6</strong>代码洁癖<strong>高质量</strong><strong>可维护性</strong>。以<em>React</em><em>scss</em><em>Webpack</em><em>Node.js</em>等为常用技术栈，同时也了解主流的<em>Vue</em><em>gulp</em><em>koa</em>等技术。
                                </p></li>
                                <li><p className="section-content"><i className="iconfont icon-dot"></i>
                                    熟练使用<strong>Git</strong>进行版本控制和代码托管、<strong>Markdown</strong>进行文档编写，了解项目常规开发流程、<strong>开发调试</strong>技巧、<strong>发布部署</strong>步骤，掌握<strong>类Unix</strong>服务器基本运维能力。
                                </p></li>
                            </ul>
                        </div>
                    </section>
                    <section id="personal">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">个人作品</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i>NiceCode</h3>
                                    <a className="btn item-more" href="https://nicecoders.github.io" target="_blank" title="nicenote">NiceCode</a>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                      nicecoder 项目发起维护人，该项目包含各个技术栈的工具库，内容正在不断完善中，旨在提高工作效率，减少重复工作，目前成熟的工具有：
                                        <em>@nicecode/changelog</em><em>@nicecode/lint</em><em>@nicecode/commit</em><em>@nicecode/tools</em>...等
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 技术博客</h3>
                                    <a className="btn item-more" href="https://j710328466.github.io/" target="_blank" title="nicenote">NiceNote</a>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        紧跟技术潮流，记录一些自己的学习记录和生活感悟，该博客系统最早使用主流博客系统<em>Hexo</em>搭建，<em>aliyun flow</em>集成部署，后为了更方便记录展示案例代码，修改为<em>Dumi</em>，托管于gitee仓库
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 语音聊天室</h3>
                                    <a className="item-more" href="https://github.com/j710328466/chatroom" target="_blank" title="个人主页"><i className="iconfont icon-homepage"></i></a>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <em>Vue全家桶</em>开发，<em>muse-Ui</em>作为UI框架，<em>axios</em>作为接口请求工具，后端使用了<em>socket.io</em>库搭配 express 开发。
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <header className="item-hd">
                                    <h3 className="item-name"><i className="iconfont icon-dot"></i> 二手商城系统 · vue2、vuex、vue-router、mongodb、express</h3>
                                    <a className="item-more" href="https://cqu.pt" target="_blank" title="内网外入"><i className="iconfont icon-link"></i></a>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        前端使用了<em>vue全家桶</em>，<em>muse-UI</em>作为UI框架，后端使用了<em>express</em>作为框架，<em>阿里云oss</em>作为文件资源处理库，<em>mongoDB</em>作为数据库。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        {/* <p className="last-modified"> chrome浏览器 > 打印 > 目标另存为`PDF` > 更多设置无边距 > 即可导出</p> */}
        <a className="pdf" href="resume.pdf"><i className="iconfont icon-pdf"></i> PDF简历</a>
    </div>
  )
}
