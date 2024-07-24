class AppError extends Error{

    constructor(message,code){
        super(message);
        this.statuscode = code;
        this.message = message

    }


}

module.exports = AppError;