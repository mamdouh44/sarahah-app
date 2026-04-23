

export default class BaseRepository{

    constructor(model){
        this.model = model;
    }

    createDocument(data){
        return this.model.create(data);
    }

    findOneDocument(fillters, select = {}){
        return this.model.findOne(fillters, select);
    }

    findDocumentById(){
        return this.model.findById();
    }

    findDocuments(filters){
        return this.model.find(filters);
    }

    deleteOneDocument(){}

    deleteMultipleDocuments(){}
}