(function() {
  function qs(sel, root){ return (root||document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }

  var modal = document.createElement('div');
  modal.id = 'eventModal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = [
    '<div class="modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,.6);display:none;"></div>',
    '<div class="modal-content" role="dialog" aria-modal="true" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:900px;width:92%;max-height:90vh;overflow:auto;background:white;border-radius:10px;display:none;">',
      '<button id="eventModalClose" aria-label="Close" style="position:absolute;right:.5rem;top:.5rem;border:none;background:transparent;font-size:2rem;line-height:1;cursor:pointer">&times;</button>',
      '<div id="eventModalBody" style="padding:1rem 1.25rem;"></div>',
    '</div>'
  ].join('');
  document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(modal);
    var backdrop = qs('.modal-backdrop', modal);
    var content = qs('.modal-content', modal);
    var body = qs('#eventModalBody', modal);
    var closeBtn = qs('#eventModalClose', modal);
    function open(html){
      body.innerHTML = html;
      backdrop.style.display = 'block';
      content.style.display = 'block';
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      backdrop.style.display = 'none';
      content.style.display = 'none';
      body.innerHTML = '';
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });

    qsa('[data-event-modal-open]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        var targetId = btn.getAttribute('data-template-id');
        var tmpl = document.getElementById(targetId);
        if (!tmpl) {
          // Fallback: go to permalink
          var href = btn.getAttribute('href');
          if (href) window.location.href = href;
          return;
        }
        open(tmpl.innerHTML);
      });
    });
  });
})();
