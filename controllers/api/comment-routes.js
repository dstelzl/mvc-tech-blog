const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const comments = await Comment.findAll()
      res.status(200).json(comments);  
  } catch (error) {
     res.status(500).json(error); 
  }
  
});

router.get('/:id', async (req, res) => {
  try {
      const comment = await Comment.findOne({
          where: {
              id: req.params.id
          }
      })
      if (!comment){
          res.status(404).json("No comment found with that ID")
      };
      res.status(200).json(comment);  
  } catch (error) {
      res.status(500).json(error);  
  }
    });

router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
  res.json(comment);
  } catch (error) {
    res.status(500).json(error);
  } 
  });

router.put('/:id',async (req, res) => {
  try {
    const comment = await Comment.update(req.body, {
      where: {
          id: req.params.id
      }
  })
  if (!comment){
    res.status(404).json("No comment found with that ID")
};
  res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }   
  });
    
router.delete('/:id', async (req, res) => {
  try {
    await Comment.destroy({
      where: {
          id: req.params.id
      }
  })
  if (!comment){
    res.status(404).json("No comment found with that ID")
};
  res.status(200).json("Comment has been deleted successfully");
  } catch (error) {
    res.status(500).json(error); 
  }
     
  });

module.exports = router;