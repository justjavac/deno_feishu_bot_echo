# deno_feishu_bot_echo

飞书 echo 机器人。

> 部署在 Deno Deploy

加入飞书群: [Deno 机器人讨论群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=f20saca4-e846-4e99-a12c-3c1cb4111767)

<p align="center">
    <img width="320" alt="Buy me a coffee" src="./assets/feishu_qrcode.png"/>
</p>

## 使用

### 1. 前置工作

1. 进入[飞书开放平台 > 开发者后台](https://open.feishu.cn/app/)，登录飞书账号后，创建一个应用。

1. 点击刚刚创建的机器人应用，可以进入应用详情界面。

1. 点击左侧菜单的**凭证与基础信息**，获得 App ID 和 App Secret。

1. 点击**应用功能里 - 机器人**，启用机器人。

1. 点击**事件订阅**，获得 Verification Token。

### 2. 搭建服务

1. 点击下面按钮，进入 Deno Deploy

   [![](./assets/deno-deploy-button.svg)](https://dash.deno.com/new?url=https://raw.githubusercontent.com/justjavac/deno_feishu_bot_echo/main/mod.ts&env=APP_ID,APP_SECRET,APP_VERIFICATION_TOKEN)

1. 输入 `APP_ID`、`APP_SECRET`、`APP_VERIFICATION_TOKEN` 值。

1. 点击 `Create` 新建一个项目，然后点击 `Deploy` 按钮。

1. **可选** 在 `Domains` 标签页绑定自己的域名。

### 3. 配置事件回调

1. 回到[飞书开放平台 > 开发者后台](https://open.feishu.cn/app/)。

1. 点击**事件订阅**，在**请求网址**一栏输入第二步 Deno Deploy 的部署域名。

1. 点击**保存**，如果成功会看到提示：请求 URL 验证通过。

1. 点击**权限管理**，开启**以应用的身份发消息**、**获取单聊、群组消息**、**获取与发送单聊、群组消息**、**获取用户发给机器人的单聊消息**、**获取群组中用户@机器人的消息**权限（如果你不确定需要哪些权限，那么就打开**消息**分组下面的所有权限）。

1. 点击**事件订阅**，在**添加事件**对话框中点击左侧**即时通讯**，勾选**接收消息**。

## 本地开发

1. 安装 `deployctl`:

   ```bash
   deno install -Afr --no-check https://deno.land/x/deploy/deployctl.ts
   ```

1. 启动本地开发服务器：

   将根目录 `.env.sample` 重命名为 `.env`。输入
   `APP_ID`、`APP_SECRET`、`APP_VERIFICATION_TOKEN` 值。

   ⚠️**注意：千万不要把这些值提交到远程仓库**。

   ```bash
   deployctl run --env=.env --watch ./mod.ts
   ```

## License

[deno_feishu_bot_echo](https://github.com/justjavac/deno_feishu_bot_echo) 的源码使用
MIT License 发布。具体内容请查看 [LICENSE](./LICENSE) 文件。
