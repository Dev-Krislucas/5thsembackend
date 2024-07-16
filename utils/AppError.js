class AppError extends Error{

    constructor(code,message){
        super(message)
        this.statuscode = code;
        this.message = message

    }


}

module.exports = AppError;