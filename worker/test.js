onmessage = function(e) {
    setTimeout(() => {
        postMessage(e.data[0] + e.data[1]);
    }, 3000);
};
