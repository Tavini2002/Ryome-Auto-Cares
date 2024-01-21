const router =require("express").Router();
let supplier =require("../Models/supplier");

// CRUD (create page) code segment

router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const contact =req.body.contact;
    const address =req.body.address;
    const country =req.body.country;

    const newSupplier =new supplier({
        name,
        contact,
        address,
        country
    })

    newSupplier.save().then(()=>{
        
        res.json("Supplier added")

    }).catch((err)=>{
        console.log(err);
    })
})

// CRUD (all data retreve page) code segment
router.route("/").get((req,res)=>{
    supplier.find().then((suppliers)=>{
        res.json(suppliers)

    }).catch((err)=>{
        console.log(err)
    })
})
//CRUD (update page) code segment
router.route("/update/:id").put(async(req,res)=>{
    let userId =req.params.id;//code for get the individual id from the url
    const {name,contact,address,country} =req.body;

    //object for supplier update
    const updateSupplier={
        name,
        contact,
        address,
        country
    }
    const update =await supplier.findByIdAndUpdate(userId,updateSupplier)
    .then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({staus:"supplier added can't be done"});
    })
})
//CRUD (delete page) code segment

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await supplier.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"user deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"supplier can't be deletes",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
let userId= req.params.id;
const user= await supplier.findById(userId)
.then((supplier)=>{
    res.status(200).send({status:"user fetched",supplier})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Can't find user", error: err.message});
})
})

module.exports = router;
