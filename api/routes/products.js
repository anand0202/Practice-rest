const express= require('express');
const router= express.Router();


// in get method, we dont use /products because we are already in the products.js page.

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling get requests to /products page"
    });
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST requests to /products page"
    });
})

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if (id==='special'){
    res.status(200).json({
        message:"You received a special id",
        id:id
    })

    }else{
        res.status(200).json({
            message:"You Passed an id"
        })

    }
    });

    router.patch('/:productId',(req,res,next)=>{
        res.status(200).json({
            message:"Updated Product!"
        });
    })
    router.delete('/:productId',(req,res,next)=>{
        res.status(200).json({
            message:"Deleted Product!"
        });
    })


module.exports=router;