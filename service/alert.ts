import { MailMaster } from '../utils/mail/mail'
import {
    MailTemplateEquipmentAlert,
    MailTemplateEquipmentAlertData,
    MailTemplateEquipmentNoticeData,
    MailTemplateEquipmentNotice,
} from '../utils/mail/mail-template'
import { Success, PermissionDenied } from '../define/response'

// 设备告警
const mailGroup1 = [
    // 商务 tb
    'p.9c1c9972b0595ae0fcae646268298c90@mail.teambition.com',
    'wangxinyi@pi2star.com',
    // 高管
    'gaoguan@pi2star.com',
    'yingjianbu@pi2star.com',
    'suanfabu@pi2star.com',
    //软件部
    'gaoke@pi2star.com',
    'wanghualong@pi2star.com',
]
const mailGroup1_2 = [
    // 商务 tb
    'p.9c1c9972b0595ae0fcae646268298c90@mail.teambition.com',
    'yingjianbu@pi2star.com',
    'suanfabu@pi2star.com',
    //软件部
    'gaoke@pi2star.com',
    'wanghualong@pi2star.com',
]

// 频率变更通知
const mailGroup2 = [
    // 高管
    'gaoguan@pi2star.com',
    'yingjianbu@pi2star.com',
    'suanfabu@pi2star.com',
    //软件部
    'gaoke@pi2star.com',
    'wanghualong@pi2star.com',
]

const mailGroupTest = ['wanghualong@pi2star.com']

export class AlertService {
    private mail: MailMaster

    constructor(mail) {
        this.mail = mail
    }

    test(ctx) {
        ctx.body = new Success()
    }

    async bindNode(ctx) {
        ctx.body = new Success()
    }

    async unbindNode(ctx) {
        ctx.body = new Success()
    }

    async addEquipment(ctx) {
        ctx.body = new Success()
    }

    async deleteEquipment(ctx) {
        ctx.body = new Success()
    }

    async alert(ctx) {
        const body = ctx.request.fields || {}
        if (body.token !== 'please!') {
            ctx.body = new PermissionDenied()
            return null
        }
        const data: MailTemplateEquipmentAlertData = body.data
        // const data: MailTemplateEquipmentAlertData = {
        //     organizationCode: '123',
        //     organizationName: '湃方科技',
        //     equipmentName: '测试设备01',
        //     equipmentPlaceNumber: '1#',
        //     serialNumber: 'SN19101234',
        //     statusText: '危险',
        //     conditionText: '即将爆炸',
        // }
        const template = new MailTemplateEquipmentAlert(data)
        // console.log(template)

        if (data.statusText === '设备离线') {
            // 不通知高管
            this.mail.send(mailGroup1_2, template.title, template.content)
        } else {
            this.mail.send(mailGroup1, template.title, template.content)
        }
        ctx.body = new Success()
    }

    async changeFrequency(ctx) {
        const body = ctx.request.fields || {}
        if (body.token !== 'please!') {
            ctx.body = new PermissionDenied()
            return null
        }
        const data: MailTemplateEquipmentNoticeData = body.data
        const template = new MailTemplateEquipmentNotice(data)
        // console.log(template)
        this.mail.send(mailGroup2, template.title, template.content)
        // this.mail.send(mailGroupTest, template.title, template.content)
        ctx.body = new Success()
    }

}
