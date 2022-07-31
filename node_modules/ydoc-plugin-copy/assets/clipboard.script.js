/*!
 * ydoc-plugin-copy v0.0.1
 * Based on dollar.js
 * Gracefully degrades: hide copy btns when plugin isnot supported.
 * 
 */
if (ClipboardJS.isSupported()) {
  $('.markdown-body pre').forEach(function (item, i) {
    item.classList.add('ydoc-example', 'js-code-' + i);
    item.insertAdjacentHTML('beforeend', '<div class="ui-copy js-copy js-tip-' + i + '" data-clipboard-action="copy" data-clipboard-target=".js-code-' + i + '" data-copy-number="' + i + '">copy</div>');
  });
} else {
  console.info('Info: ClipboardJS isnot supported.')
}

// 代码复制功能
var clipboard = new ClipboardJS('.js-copy');
clipboard.on('success', function (e) {
  var copyNumber = $(e.trigger)[0].getAttribute('data-copy-number');
  $('.js-tip-' + copyNumber)[0].innerHTML = 'copied!';
  setTimeout(function() {
    $('.js-tip-' + copyNumber)[0].innerHTML = 'copy';
  }, 600);
  e.clearSelection();
});