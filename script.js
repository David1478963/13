document.getElementById('showMoreBtn').onclick = function() {
    var moreDiv = document.getElementById('more');
    if (moreDiv.style.display === "none") {
        moreDiv.style.display = "block";
        this.innerText = "收起";
    } else {
        moreDiv.style.display = "none";
        this.innerText = "更多關於我";
    }
};