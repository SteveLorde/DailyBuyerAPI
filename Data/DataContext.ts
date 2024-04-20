import {MongoClient} from "mongodb"
import {IDataContext} from "./IDataContext";


class DataContext implements IDataContext {
     databaConnectionString = ""
     client : MongoClient = {} as MongoClient
     databaseName = ""
     db = this.client.db(this.databaseName)

    async Connect() {
         this.client = new MongoClient(this.databaConnectionString)
        await this.client.connect()
    }


}


