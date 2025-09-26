(function() {
  function qs(sel, root){ return (root||document).querySelector(sel); }
  function enc(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }

  document.addEventListener('DOMContentLoaded', function(){
    var nameI = qs('#contact-name');
    var emailI = qs('#contact-email');
    var msgI = qs('#contact-message');
    var btn = qs('#contact-send');

    function update(){
      var valid = nameI.value.trim() && emailI.value.trim() && msgI.value.trim();
      btn.disabled = !valid;
      if (!valid) {
        btn.removeAttribute('href');
        return;
      }
      var subject = 'Contact from ' + nameI.value.trim();
      var body = 'From: ' + nameI.value.trim() + ' <' + emailI.value.trim() + '>' + '\n\n' + msgI.value.trim();
      var href = 'mailto:letarotyoga@gmail.com?subject=' + enc(subject) + '&body=' + enc(body);
      btn.setAttribute('href', href);
    }

    [nameI, emailI, msgI].forEach(function(el){ el.addEventListener('input', update); });
    update();
  });
})();
