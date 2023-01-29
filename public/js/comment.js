// here we need to make our call to the SERVER fetchAPI

// 0) Capture the input from the FORM
// 1.) What is our endpoint(?)  '/api/blogComment'   
// 2. ) What HTTP Method do we use(?) --> 'POST'


// fetch('/api/blogComment', {
//   method: "POST",
//   body: JSON.stringify(formInputData)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

//     // where do we s
//   })
//   .catch(err => {
//     console.log(err);
//     //res.status(500).json(err)
//   })

  const createCommentHandler = async (event) => {
    try {
       //  prevent page from loading
    event.preventDefault();
   
    // gather user email and password inputs
    const comment_text = $('#comment-text').val().trim();
    const blog_id = window.location.pathname.split('/').pop();
  
    if (comment) {
      //  goto end-point to create new blog

      console.log(comment_text, blog_id)
      
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
   // window.location.href = `/blogpage/${blogId}`
  
    }
    } catch (error) {
      res.status(400).json(err);
    }
  };

$('#comment-btn').on('click', createCommentHandler);
  