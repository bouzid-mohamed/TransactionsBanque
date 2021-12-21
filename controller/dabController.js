const Compte = require('../models/compte');
class Comptes{

    //get all comptes
    getAll= async (req , res)=>{
        try{
            const comptes = await Compte.find()
            res.json(comptes)
        }catch(error){
            res.status(500).json({compte : error})
        }
    }
    // create compte
    createCompte =  async (req,res)=>{
  

        const compte= new Compte({
            
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            rib: req.body.rib ,
            solde : req.body.solde 

        })
        try {
            const newCompte = await compte.save()
            res.status(201).json(newCompte)           
        } catch (error) {
            res.status(400).json({compte : error.compte})
        }
    }

    //update compte
    updateCompte =  async (req,res)=>{
        const updateCompte = await Compte.findByIdAndUpdate(req.params.id,{

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            rib: req.body.rib ,
            solde : req.body.solde 
        },{useFindAndModify:true , new : true})
        if(updateCompte){
            res.json({Compte: updateCompte})
        }
    }
    // get un seul compte
    getSingle = async (req,res)=>{
        try {
            const findCompte = await Compte.findById(req.params.id)
            if(findCompte == null ){
                return res.status(404).json({compte: 'Cant find Compte'})
            }
            res.status(201).json(findCompte)
            
        } catch (err) {
            res.status(400).json({compte:err}) ;
            
        }
    }


}

const dabComptes = new Comptes() ;
module.exports = dabComptes ; 