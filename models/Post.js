import mongoose from "mongoose"
const {Shema}= mongoose

const postShema=newShema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{  
        type:String,
        required:true,
    },
    content:{  
        type:String,
        required:true,
    },
    username:{  
        type:String,
        required:true,
    },
},
    {timestamps:true}
)

export default mongoose.model("Post", postShema)