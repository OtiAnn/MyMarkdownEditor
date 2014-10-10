var smeEditorInstance;
$.widget('sme.editor', {
  options: {
    preview: '#preview',
    autoPreview: true,
    codeMirror: {
      mode: 'gfm',
      lineNumbers: true,
      matchBrackets: true,
      lineWrapping: true,
      styleActiveLine: true,
      tabSize: 2,
      theme: 'otis'
    },
    change: null
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

    this.editor = this._initCodeMirror();
    this._setOutput(this.getOutput());
  },

  _initCodeMirror: function(){
    var that = smeEditorInstance;
    cm = CodeMirror.fromTextArea(this.element[0], this.options.codeMirror)
    cm.on("change", function(cm, change) {
      var val = cm.getValue();
      that._setOutput(val);
      that._trigger( "change", this.getOutput );
    });
    return cm;
  },

  _refresh: function() {
    this._initCodeMirror();
    this._setOutput(this.getOutput());
  },

  _setOptions: function() {
    // _super and _superApply handle keeping the right this-context
    this._superApply( arguments );
    this._refresh();
  },

  getInput: function(){
    return this.editor.getValue();
  },

  getOutput: function(){
    return marked(this.editor.getValue());
  },

  _setOutput: function(val){
    if( $(this.options.preview).length != 0 && this.options.autoPreview ){
      $(this.options.preview).html( marked(val) );
    }
  }

});