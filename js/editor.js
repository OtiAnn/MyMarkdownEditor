var smeEditorInstance;
$.widget('sme.editor', {
  options: {
    preview: '#preview',
  },

  _create: function(){
    smeEditorInstance = this
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

    var editor = CodeMirror.fromTextArea(this.element[0], {
      mode: 'gfm',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      styleActiveLine: true,
      theme: 'solarized light',
      onChange: this._update
    });

    this._update(editor);
  },

  _update: function(e, text){
    // need outside instance
    that = smeEditorInstance
    var val = e.getValue();
    that._setOutput(val);
  },

  _setOutput: function(val){
    $(this.options.preview).html( marked(val) );
  }

});