browser.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      const targetUrl = url.searchParams.get("url");
      if (targetUrl) {
        return { redirectUrl: decodeURIComponent(targetUrl) };
      }
    },
    { urls: ["*://redirect.crom.avn.sh/*"] },
    ["blocking"]
  );
  