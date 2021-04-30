import { tema } from "./tema";
import { User } from "./User";

export  class Postagem {
    public id : string   
    public titulo : string
    public texto : string
    public data : Date
    public usuario : User
    public tema : tema
}