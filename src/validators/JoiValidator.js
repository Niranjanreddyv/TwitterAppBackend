

export const validate = (schema) => {
    return (req, res, next) => {
        try {
            const {error} = schema.validate(req.body);
            if(error){
                throw error
            }
            next();
        } catch (error) {

            res.status(400).json({
                errors: error.details ? error.details.map(d => d.message) : [error.message],
                message : "Vaidation failed",
                success : false
            });
            
        }


    };
};