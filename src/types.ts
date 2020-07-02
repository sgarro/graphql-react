export namespace ApiType {
    export interface allChatsQuery {
        chats: Array<Chat>
        subscribeToMore: any
    }
    export interface Chat {
        id: string
        name: string
        content: string
    }

}