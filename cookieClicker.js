const bot = setInterval(() => {
    Game.cookies = Infinity;
    const storeBtn = document.querySelector("div#storeBuyAllButton");
    if (storeBtn) storeBtn.click();
    const item = choose(document.querySelectorAll(".product.enabled"))
    if (item) item.click();
}, 5);
