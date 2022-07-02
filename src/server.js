import {Server, Model} from 'miragejs';
export function makeServer({environment="development"}={}){
    let server = new Server({
        environment, 
        models:{
            user: Model,
            category: Model,
        },
        seeds(server){
            server.create("user", {content: "user1"})
            server.create("user", {content: "user2"})
            server.create("category", {content: "category1"})
            server.create("category", {content: "category2"})
        },
        routes(){
            this.namespace = "api"
            this.get("/users", schema => {
                return schema.user.all()
            })
            this.get("/category", schema => {
                return schema.category.all()
            })
        },
    })
    return server
}