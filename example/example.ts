import axios from 'axios';

axios.defaults.headers.post['token'] = 'please!';

const urlPrefix = 'https://api.pi2star.com/platform-devops/platform-devops/api/v1/message'
// platform-ai
const url = '/platform-ai/postMessage'

export type TypeNoticeMessageType = 'mail' | 'sms' | 'phone' | 'weChat'

export class TypeNoticeMessage {
    id: string // uuid
    user: string // uuid
    createdAt: string
    type: TypeNoticeMessageType
    receivers: string[]
    title: string
    content: string
    contentType?: 'text' | 'html'
    timestamp?: string // iso string
}

const mailContent =
    `
    测试告警通知
    ========================
    
    服务异常, 请及时处理。
    
    故障时间：20xx-xx-xx xx:xx:xx
    故障内容：test
    
    ========================
    湃方科技软件部
    
    2019-12-12 12:00:00
`

const msg: TypeNoticeMessage = {
    "id": "8560a710-27d6-11ea-ad32-a722ba081054",
    "user": "8c607e00-27d6-11ea-bb55-775b959fde78",
    "type": "mail",
    "receivers": ["wanghualong@pi2star.com"],
    "title": "<测试消息>告警通知",
    "content": "test content",
    "createdAt": new Date().toISOString(),
}

async function postMail(url: string, message: TypeNoticeMessage) {
    
    await axios({
        method: 'post',
        url: urlPrefix + url,
        headers: {
            "token": "please!",
        },
        data: message,
    });
}


