$('#button').on('click', function() {$('#inner-content').prepend(`
<div id='comment'>
  <div class='comment-header'>
    <div id='pic'>
      <img src='pic.png'>
    </div>
    <span class='username'>${$('#name').val()}</span>
    <span id='holder'>
      <span class='comment-edit'>Edit</span><span class='comment-delete'>Delete</span>
    </span>
    <br>
  </div>
  <div id='comment-content'>
      <span class='comm'>${$('#comment-text').val()}</span>
  </div>
  <form class='edit'>
      <input type='text' class='editor'>
      <span id='editor-submit'>Submit</span>
  </form>
</div>`)
});
$('#content').on('click', '.comment-delete', function () {
  $('#comment').remove()
})
$('#content').on('click', '.comment-edit', function() {
  $('.editor').val($('.comm').text())
  $('.edit').toggleClass("s")
});
$('#content').on('click', '#editor-submit', function() {
  $('.comm').text($('.editor').val())
  $('.edit').toggleClass("s")
});
