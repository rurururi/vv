$(document).ready(function() {
  $('[data-bs-toggle="tooltip"]').tooltip();

  let clipboard = new ClipboardJS('.fa-discord');

  clipboard.on('success', function (e) {
      let trigger_button = e.trigger;

      trigger_button.setAttribute('data-bs-original-title', 'Copied!');

      let btn_tooltip = bootstrap.Tooltip.getInstance(trigger_button);

      btn_tooltip.show();

      trigger_button.setAttribute('data-bs-original-title', 'Copy to clipboard');

  });

});
