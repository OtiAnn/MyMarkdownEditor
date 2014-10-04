MyMarkdownEditor
================

MarkdownEditor inspired by jbt/markdown-editor


## Feature
1. 用Jquery widget包裝
2. 定義事件存取
3. widget api
4. 拿掉url hash儲存
5. pretty codemirror style
6. 沒有編輯工具欄

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

### marked
將markdown語法轉換成html
### codemirror
取代textarea，重新改寫逼前區域文字格式
### highlight.js
程式碼上色


[Codemirror configuration]: http://codemirror.net/doc/manual.html#config