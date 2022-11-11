document.addEventListener('DOMContentLoaded',
  function load() {
  const promise = browser.storage.sync.get(['width', 'height', 'remoteServer', 'localServer', 'remoteActive', 'basicUi']);
  let window = document.getElementById('frameContainer');
    if(location.hash !== '#loaded') {   
      location.hash = '#loaded';
      setTimeout(function(){
        location.reload();      
        setTimeout(function(){
          location.hash = ''
        }, 500);
      }, 100);
    }
    promise.then((res) => {
      if(res.remoteActive){
        console.log(res);
        window.innerHTML = `<iframe id="frame1" iframe-reload: true; style="border:none;" src="${res.remoteServer}${res.basicUi}" width="${res.width + ''}"px height="${res.height + ''}"px></iframe>`;
      }
      else{
        window.innerHTML = `<iframe id="frame1" style="border:none;" src="${res.localServer}${res.basicUi}" width="${res.width + ''}"px height="${res.height + ''}"px></iframe>`;

      }        
    });

});
