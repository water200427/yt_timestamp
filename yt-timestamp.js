javascript:(function(){
    var ytPlayer = document.getElementById("movie_player");
    if (ytPlayer && typeof ytPlayer.getCurrentTime === "function") {
      var currentTime = Math.floor(ytPlayer.getCurrentTime());
      var url = window.location.href;
      // 移除 app=desktop 參數
      url = url.replace(/([?&])app=desktop(&)?/, function(match, p1, p2) {
        return p2 ? p1 : "";
      });
      // 移除原有的 t 參數（若有）
      url = url.replace(/([?&])t=\d+(&)?/, function(match, p1, p2) {
        return p2 ? p1 : "";
      });
      var separator = url.indexOf('?') !== -1 ? "&" : "?";
      var newUrl = url + separator + "t=" + currentTime;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(newUrl).then(function(){
          alert("已複製到剪貼簿：\n" + newUrl);
        }, function(){
          prompt("無法自動複製，請手動複製連結：", newUrl);
        });
      } else {
        prompt("請複製連結：", newUrl);
      }
    } else {
      alert("找不到 YouTube 播放器或此頁面不支援。");
    }
  })();