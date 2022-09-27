const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const blogs = await Blog.findAll()
      res.status(200).json(blogs);  
  } catch (error) {
     res.status(500).json(error); 
  }
  
});

router.get('/:id', async (req, res) => {
  try {
      const blog = await Blog.findOne({
          where: {
              id: req.params.id
          }
      })
      if (!blog){
          res.status(404).json("No blog post found with that ID")
      };
      res.status(200).json(blog);  
  } catch (error) {
      res.status(500).json(error);  
  }
    });

router.post('/', async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
  res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error); 
  }
  });

router.put('/:id',async (req, res) => {
  try {
    const blog = await Blog.update(req.body, {
      where: {
          id: req.params.id
      }
  })
  if (!blog){
    res.status(404).json("No blog post found with that ID")
};
  res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);  
  }
    const blog = await Blog.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(blog);
  });

  router.delete('/:id', async (req, res) => {
    try {
      await Blog.destroy({
        where: {
            id: req.params.id
        }
    })
    if (!blog){
      res.status(404).json("No blog post found with that ID")
  };
    res.status(200).json("Blog Post has been deleted successfully"); 
    } catch (error) {
      res.status(500).json(error);  
    }
     
  });

module.exports = router;