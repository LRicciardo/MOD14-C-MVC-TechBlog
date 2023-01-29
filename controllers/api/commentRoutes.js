const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {

    console.log(req.body)
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // res.status(200).json(newComment);

    const comment = newComment.get({ plain: true });

    console.log(comment);
    
    res.render('blog', {
      ...comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  console.log("Request: " , req.params)
  try {
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
