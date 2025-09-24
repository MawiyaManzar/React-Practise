import {atom,selector} from 'recoil'


export const counterAtom = atom({
    default:0,
    key:"counter"
})

export const evenSelector=selector({
    key:'isEvenSelector',
    get:function({ get }){
        const currentCount=get(counterAtom)
        const isEven=(currentCount % 2==0)
        return isEven;
    }
})

export const networkAtom= atom({
    key:"networkAtom",
    default:102
})

export const jobAtom= atom({
    key:"jobAtom",
    default:0
})

export const notificationsAtom= atom({
    key:"notificationsAtom",
    default:0
})

export const messagingAtom= atom({
    key:"messagingAtom",
    default:0
})

export const totalnotificationCount = selector({
    key:"totalnotificationCount",
    get: ({get})=>{
          const networknotificatnCount= get(networkAtom)
          const jobsNotCount= get(jobAtom)
          const messagingCount= get(messagingAtom)
          const NotificationsCount= get(notificationsAtom)
          return networknotificatnCount+jobsNotCount+messagingCount+NotificationsCount
    }
})