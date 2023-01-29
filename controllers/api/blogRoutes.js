const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);

    // const blog = newBlog.get({ plain: true });
    // res.render('dash', {
    //   ...blog,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  console.log("Request: " , req.params)
  try {
    // if (req.session.user_id != req.params.id) {
    //   res.status(404).json({ message: 'Not your blog!' });
    //   return;     
    // }
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

   res.status(200).json(blogData);

  //  const blog = blogData.get({ plain: true });
  //  res.render('dash', {
  //    ...blog,
  //    logged_in: req.session.logged_in
  //  });

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
