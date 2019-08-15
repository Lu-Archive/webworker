function webWorker() {
    this.testWorker = new Worker("./worker/test.js");
}
// 中止对话框的webwork计算
webWorker.prototype.terminateTest = function() {
    this.testWorker.terminate();
};
// 开始对话框的webwork计算
webWorker.prototype.postTest = function(arr) {
    this.testWorker = new Worker("./worker/test.js");
    this.testWorker.postMessage(arr);
    const that = this;
    this.testWorker.onmessage = function(e) {
        that.handleTest(e);
    };
};
// 处理对话框的webwork计算结果
webWorker.prototype.handleTest = function(e) {
    console.log(e.data);
};

window.WebWorker = new webWorker();

window.WebWorker.postTest(["hello", "world"]);
