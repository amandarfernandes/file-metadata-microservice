document.querySelector('.filename').addEventListener('input', function(event) {
  if (this.files.length > 0)
    document.querySelector('.preview').innerHTML = `${this.files[0].name} was selected`;
  else document.querySelector('.preview').innerHTML = `No files currently selected`;
});
