MyMarkdownEditor
================

DEMO: http://annotis.github.io/MyMarkdownEditor/


## Feature
1. It's a Jquery widget
2. Markdown syntax real-time hightlight
3. No toolbar

##Usage

### DOM settings
The element must be a textarea.
``` HTML
<textarea id="editor"></textarea>
```

### Simple usage

``` javascript
$('#editor').editor()
```

### Initialize with configs
Codemirror configs should nested pass in. All Codemirror configs are available. See also: [Codemirror configuration]

``` javascript
$('#editor').editor({
  autopreview: true,
  codeMirror:{
    // nested options
    lineNumbers: true
  }
})
```
## Configuration
key|type| default
---|-----|---
preview| String or jquery object | '#preview'
autoPreview| boolean | true

## Methods
``` javascript
var editor = $('#editor').editor();

editor.editor('getInput') //call method
```
### getInput
### getOutput

## Tech

1. marked
2. codemirror
3. highlight.js


[Codemirror configuration]: http://codemirror.net/doc/manual.html#config