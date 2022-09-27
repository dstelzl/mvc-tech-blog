const router = require('express').Router();
const { User } = require('../../models');


  router.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users);  
    } catch (error) {
       res.status(500).json(error); 
    }
    
  });
 
  
  router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!user){
            res.status(404).json("No user found with that ID")
        };
        res.status(200).json(user);  
    } catch (error) {
        res.status(500).json(error);  
    }
      });
    
 
  router.post('/', async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.json(user); 
    } catch (error) {
      res.status(500).json(error);
    }
    });
  

  router.put('/:id',async (req, res) => {
    try {
      const user = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (!user){
      res.status(404).json("No user found with that ID")
  };
    res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }   
  });
  
  
  router.delete('/:id', async (req, res) => {
    try {
      await User.destroy({
        where: {
            id: req.params.id
        }
    })
    if (!user){
      res.status(404).json("No user found with that ID")
  };
    res.status(200).json("User has been deleted successfully"); 
    } catch (error) {
      res.status(500).json(error);
    }
    
  });
  
  module.exports = router;
  
  
  
  