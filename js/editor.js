$.widget('sme.editor', {
  options: {
    $preview: $('preview'),
  },
  _create: function(){
    var languageOverrides = {
      js: 'javascript',
      html: 'xml'
    }

    marked.setOptions({
      highlight: function(code, lang){
        if(languageOverrides[lang]) lang = languageOverrides[lang];
        return hljs.LANGUAGES[lang] ? hljs.highlight(lang, code).value : code;
      }
    });

    this.editor = CodeMirror.fromTextArea(this.element, {
      mode: 'gfm',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      theme: 'default',
      onChange: update
    });

  },

  update: function(e){
    var val = e.getValue();

    setOutput(val);

    clearTimeout(hashto);
    hashto = setTimeout(updateHash, 1000);
  }

  setOutput: function(val){
    this.options.previewElem.html( marked(val) )
  }





});