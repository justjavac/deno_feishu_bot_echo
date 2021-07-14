export type WebhookEvent =
  | ContactEvent
  | IMEvent;

type ContactEvent =
  | ContactUserUpdatedV3Event
  | ContactUserDeletedV3Event;

type IMEvent = ImMessageReceiveV1Event;

type ContactUserUpdatedV3Event = unknown;
type ContactUserDeletedV3Event = unknown;

export interface UserId {
  /** 用户的 union id */
  union_id: string;
  /** 用户的 user id */
  user_id: string;
  /** 用户的 open id */
  open_id: string;
}

/** 事件头 */
export interface V2Header {
  /** 事件 ID */
  event_id: string;
  /** 事件类型 */
  event_type: "im.message.receive_v1";
  /** 事件创建时间戳（单位：毫秒） */
  create_time: string;
  /** 事件 Token */
  token: string;
  /** 应用 ID */
  app_id: string;
  /** 租户 Key */
  tenant_key: string;

  [propName: string]: any;
}

/** 事件中包含的消息内容 */
export interface Message {
  /** 消息的 open_message_id */
  message_id: string;
  /** 消息类型 */
  message_type: "text";
  /** 消息所在的群组 id */
  chat_id: string;
  /** 消息所在的群组类型,单聊或群聊 */
  chat_type: "p2p" | "group";
  /** 消息内容 */
  content: string;
  /** 消息发送时间 毫秒 */
  create_time: string;
  /** 回复消息 根 id */
  root_id?: string;
  /** 回复消息 父 id */
  parent_id?: string;

  /** 被提及用户的信息 */
  mentions?: Mention[];
}

/** 被提及用户的信息 */
export interface Mention {
  /** mention key */
  key: string;
  /** 用户 ID */
  id: UserId;
  /** 用户姓名 */
  name: string;
  /** tenant key */
  tenant_key: string;
}

/** 事件的发送者 */
export interface Sender {
  /** 用户 ID */
  sender_id: UserId;
  /** 消息发送者类型。目前只支持用户发送的消息 */
  sender_type: "user";
  /** tenant key */
  tenant_key: string;
}

export interface ImMessageReceiveV1Event {
  /** 事件模式 */
  schema: "2.0";
  header: V2Header;
  event: {
    /** 事件中包含的消息内容 */
    message: Message;
    /** 事件的发送者 */
    sender: Sender;
  };
}

export interface Verification {
  challenge: string;
  token: string;
  type: "url_verification";
}

export interface WebhookEventMap {
  "im.message.receive_v1": ImMessageReceiveV1Event;
}

export type WebhookEventName = keyof WebhookEventMap;
