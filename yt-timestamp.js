javascript:(function(){
    var ytPlayer = document.getElementById("movie_player");
    if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function') {
      var currentTime = Math.floor(ytPlayer.getCurrentTime());
      var url = window.location.href;
      // Remove any existing "t" parameter
      url = url.replace(/([?&])t=\d+(&)?/, function(match, p1, p2) {
        return p2 ? p1 : "";
      });
      // Append the timestamp parameter
      var separator = url.indexOf('?') !== -1 ? '&' : '?';
      var newUrl = url + separator + "t=" + currentTime;
      prompt("YouTube link with timecode:", newUrl);
    } else {
      alert("YouTube player not found on this page.");
    }
  })();
  