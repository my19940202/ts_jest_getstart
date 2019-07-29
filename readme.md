# jest unit test get start
- 项目直接用 codesandbox上面的ts-react项目自动生成



## 收获
- jest在实际使用的时候，最好还是直接jest int,逐步生成jest.config.js
> (codesandbox上单测跑起来，但是线下一直挂了，最后发现是配置问题)
> https://basarat.gitbooks.io/typescript/content/docs/testing/jest.html

- 测试策略
    - 传统测试: 函数的输入，输出(done)
    - 冒烟测试：仅render一下组件，确认不会抛出异常(done)
    - 组件维度测试：渲染组件，触发组件各种事件
    - 生成快照对比diff
(目前的jest.config.js jest.config.json都是无效的，走了react-scripts的默认配置)
> https://www.html.cn/create-react-app/docs/running-tests/#%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6