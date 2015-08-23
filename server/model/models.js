db= X=mg=$mg

var S=String, N=Number, O=Object, D=Date,
    oid = $mg.Schema.Types.ObjectId, OIDx=function(ref){
        var g=G(arguments),
        o={
            type:$mg.Schema.Types.ObjectId,
            ref:ref
        }
        if(g.p){ o.required=true}
        return o
    }

SCHEMAS = {

    user:{

        username: {type:String, required:true},     //username: {type:String, required:true},

        password: String,


        //m: { type: String, default: '/me.png' },
        //mug: { type: String, default: '/me.png' },  //mugData.. no mugId //mugData.. no mugId

        mug: {type: String, default:defaultMug},
        status: {type: String, default:'nothing much'},
        buds: [String]

    },

    pic:{

         user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
         //user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},

         date: {type:Date, default: Date.now},

         modified: Date,

         size: Number,

         name: String,

         ext: String

     },

    img:{

         username: String, u: String,

         date:Date,

         data:String, d:String,

         name:String,

         dats:[Number],

         physicsData:[Number]

     },

    thing: {   name: String,  age: Number   },

    guy: {n:{type:S, required:true}, m:S,  x:N, y:N}, //map:{n:S, guys:O},

    book:{

         userId:{type:$mg.Schema.Types.ObjectId,
             ref:'user',required:true},

         title: String,

         chapters: [ 'chapter' ]  // ???
      },
    sort: {
         username: {type:String, required:true},
         datetime: {type:Date, default:Date.now},
         title:String,
         items: {type:[{}], default:[]}
     },
    status:{
         datetime: {type:Date, default:Date.now},
         username: {type:String, required:true},
         text: String},
    availability: {
         datetime: {type:Date, default:Date.now},
         username: {type:String, required:true},
         text: String
     },
    post:{

         datetime:{type:Date, default:Date.now},
         username:{type:String, required:true},
         title:String,
         text:String,
         dataURl:String
     },
    message:{ //msg
         from: {type:String, required:true},
         to: {type:String, required:true},
         datetime: {type:Date, default:Date.now},

         title:String,
         text:String
     },
     //buddy request
    buddyRequest:{
         from:{type:String, required:true},
         to:{type:String, required:true},
         datetime:{type:Date, default:Date.now}
     },
    Topic:{

         topic: String,
         items: {type:[{}], default:[]}
     }, Message:{

         topicId:Number, //?

         topicName: String,

         text:String,

         score:Number

     },     Comment:{},
    link: {
         title:String,
         url:String
     }
}

models = $m = {}
//var str //str = ''

for(var model in SCHEMAS){

    //str += (' - ' + model )

    models[model] =  $mg.model(

        model,

        $mg.Schema( SCHEMAS[model] )
    )
}
//$l('MODELS' + str)

userSchema = new $mg.Schema({
    u: {type:String, required:true},     //username: {type:String, required:true},
    password: String,
    profile: Object,
    m: { type: String, default: '/me.png' },
    mug: { type: String, default: '/me.png' },  //mugData.. no mugId
    mugURL:String,
    buds: [String]
})


picSchema=new db.Schema({

    user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
    //user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},

    date: {type:Date, default: Date.now},

    modified: Date,

        size: Number,

        name: String,

        ext: String

}) // image file ?


imageSchema=new $mg.Schema({
    username:String,
        date: Date,
        data: String,
        name: String,
        dats: [Number],
    physicsData:[Number]
})


//
satusSchema=new $mg.Schema({
    datetime: {type:Date, default:Date.now},
    username: {type:String, required:true},
    text: String})
availabilitySchema= new $mg.Schema({
    datetime: {type:Date, default:Date.now},
    username: {type:String, required:true},
    text: String
})
postSchema=new $mg.Schema({

    datetime:{type:Date, default:Date.now},
    username:{type:String, required:true},
    title:String,
        text:String,
        dataURl:String
})

buddyRequestSchema=new $mg.Schema({
    from:{type:String, required:true},
    to:{type:String, required:true},
    datetime:{type:Date, default:Date.now}
})
mailSchema=new $mg.Schema({
    from: {type:String, required:true},
    to: {type:String, required:true},
    datetime: {type:Date, default:Date.now},

    title:String,
    text:String
})

//
topicSchema=new $mg.Schema({

    topic: String,
        items: {type:[{}], default:[]}
})
messageSchema=new $mg.Schema({

    topicId:Number, //?

        topicName: String,

        text:String,

        score:Number

})
commentSchema=new $mg.Schema({})
linkSchema= new $mg.Schema({
    title:String,
        url:String
})
//

ashSchema = new $mg.Schema({

    name: String,

    children:[{}]

})
sortSchema = new $mg.Schema({

    name: String,
    text: String,
    username: {type:String, required:true},
    datetime: {type:Date, default:Date.now},
    items: {type:[{}], default:[]},
    children: {type:Object, default:{}}

})
termSchema = new $mg.Schema({

    term: String,

    definition: String,

    datetime:{type:Date, default:Date.now}

})


sectionSchema = new $mg.Schema({

    page:{
    type:$mg.Schema.Types.ObjectId,
    ref:'Page'
},content:String,heading:String
})
pageSchema = new $mg.Schema({
    name: String,
    content: String,
    sections: [{

        name: String,

        text: String

    }],
    chapterId:{
        type:$mg.Schema.Types.ObjectId,
        ref:'Chapter'
    },


})
chapterSchema = new $mg.Schema({
    bookId:{
        type:$mg.Schema.Types.ObjectId,
        ref:'Book'
    },
    text:String,
    name: String, //title?
    pages: [

        {

            name : String,

            text : String

        } ]

})


bookSchema = new $mg.Schema({
    userId:{type:$mg.Schema.Types.ObjectId, ref:'user',required:true},
    title: String,
    author:{
        type:$mg.Schema.Types.ObjectId,
        ref:'user'
    },
    chapters: [ 'chapter' ]  // ???
})



guySchema= new $mg.Schema({
    username:{type:String, required:true},
    mugDataURL: String,
    x: Number, y: Number
}) //map:{n:S, guys:O},


profileSchema = new $mg.Schema({ //userId
    username: String,
    aboutMe: String,
    iEnjoy: String,
    iSeek: String
})



/////////////////////////////////////////////////////////
User = $mg.model('User', userSchema)
Book = $mg.model('Book', bookSchema)
Chapter = $mg.model('Chapter', chapterSchema)
Page = $mg.model('Page', pageSchema)
Section = $mg.model('Section', sectionSchema)
Profile = $mg.model('Profile', profileSchema )
module.exports = models


//mongoError: kill mongod processess!!!!  ps ax | grep mongod