const createBlogHandler = async (event) => {
  try {
     //  prevent page from loading
  event.preventDefault();
 
  // gather user email and password inputs
  const title = $('#blog-title').val().trim();
  const description = $('#blog-desc').val().trim();

  if (title && description) {
    //  goto end-point to create new blog
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, description,  }),
      headers: { 'Content-Type': 'application/json' },
    });
    window.location.href = '/dash'

  }
  } catch (error) {
    res.status(400).json(err);
  }
};


const expandBlogHandler = async (event) => {
  try {
     //  prevent page from loading
  event.preventDefault();
 
  // gather user email and password inputs
  const blog_id = $('#single-blog').href('id');
  console.log(blog_id);
  
  if (blog_id) {
    //  goto end-point to create new blog
    const response = await fetch(`/blogpage/${blog_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

  }
  } catch (error) {
    res.status(400).json(err);
  }
};

const deleteBlogHandler = async (event) => {
  console.log("Clicked  DELETE Buttom")
  try {
     //  prevent page from loading
  event.preventDefault();
 
  // gather user email and password inputs
  const delete_id = $('#delete-blog-btn').data('id');
  console.log(delete_id);
  
  if (delete_id) {
    //  goto end-point to create new blog
    const response = await fetch(`/api/blogs/${delete_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }); 
    window.location.href = '/dash'
  }
  } catch (error) {
    res.status(400).json(err);
  }
};

// event
$('#create-blog-btn').on('click', createBlogHandler);
$('#delete-blog-btn').on('click', deleteBlogHandler);
$('#single-blog').on('click', expandBlogHandler);