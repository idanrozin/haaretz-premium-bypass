document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("go-btn");
    btn.addEventListener("click", () => {
        const HAARETZ_BASE_PLACEHOLDER_URL = "https://www-haaretz-co-il.cdn.ampproject.org/v/s/www.haaretz.co.il/amp/captain/software/.premium-[XXX]?amp_gsa=1&amp_js_v=a6&usqp=mq331AQHKAFQArABIA%3D%3D#amp_tf=From%20%251%24s&aoh=16199372885466&csi=1"
        const THE_MARKER_BASE_PLACEHOLDER_URL = "https://www-themarker-com.cdn.ampproject.org/v/s/www.themarker.com/amp/news/politics/.premium-[XXX]?amp_gsa=1&amp_js_v=a6#ampshare=https%3A%2F%2Fwww.themarker.com%2Fnews%2Fpolitics%2F.premium-1.9542972";
        const desiredUrl = document.getElementById("url").value.toLowerCase();
        
        if (!desiredUrl) {
            activateToast("Something is wrong with the text you have entered ", 3000, false);
            return;
        }

        // check if url is valid.
        if (!desiredUrl.includes("haaretz") && !desiredUrl.includes("themarker")) {
            activateToast("Please enter a valid haaretz or themarker URL ", 3000, false);
            return;
        }

        const dummyUrl = desiredUrl.includes("haaretz") ? HAARETZ_BASE_PLACEHOLDER_URL : THE_MARKER_BASE_PLACEHOLDER_URL;
        
        // sanitize query string from desiredURL (if exists)
        if (desiredUrl.includes("?")) {
            desiredUrl = desiredUrl.substr(0, desiredUrl.indexOf("?"));
        }

        const articleIdIndex = desiredUrl.search(/1./);
        activateToast("Redirecting to article...", 1000);
        setTimeout(() => window.location.replace(dummyUrl.replace(/\[([^)]+)\]/, desiredUrl.substr(articleIdIndex, desiredUrl.length))), 1000);

    }) 

});


const activateToast = (msg, timeout, success = true) => {
    // Get the snackbar DIV
    const toast = document.getElementById("toast");
  
    toast.textContent = msg;
    
    // Add the "show" class to DIV
    toast.classList.add("show");
    toast.classList.add(success ? "success" : "error");
    
    // After x seconds, remove the show class from DIV
    setTimeout(() => {
        toast.className = "";
        toast.textContent = "..";
    }, timeout);
}