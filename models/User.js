import mongoose from "mongoose"
const {Shema}= mongoose

const userShema=newShema({
    name:{
        type:String,
        unique:true,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{  
        type:String,
        required:true,
    },
},
    {timestamps:true}
)

export default mongoose.model("User", userShema)