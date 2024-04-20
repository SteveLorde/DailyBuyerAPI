import {Db} from "mongodb";

export interface IDataContext {
    //mongodb
    db : Db
    Connect() : Promise<void>
}