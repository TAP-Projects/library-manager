function asyncHandler(cb){
    return (
        async (req,res,next) => {
            try {
                await cb(req,res,next);
            }
            catch(error){
                res.status(500).send(error);
            }
            return;
        }
    )
}

module.exports = asyncHandler;