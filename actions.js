document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("go-btn");
    btn.addEventListener("click", () => {
        const HAARETZ_BASE_PLACEHOLDER_URL = "https://www-haaretz-co-il.cdn.ampproject.org/v/s/www.haaretz.co.il/amp/captain/software/.premium-[XXX]?amp_gsa=1&amp_js_v=a6&usqp=mq331AQHKAFQArABIA%3D%3D#amp_tf=From%20%251%24s&aoh=16199372885466&csi=1"
        const THE_MARKER_BASE_PLACEHOLDER_URL = "https://www-themarker-com.cdn.ampproject.org/v/s/www.themarker.com/amp/news/politics/.premium-[XXX]?amp_gsa=1&amp_js_v=a6#ampshare=https%3A%2F%2Fwww.themarker.com%2Fnews%2Fpolitics%2F.premium-1.9542972";
        const regExp = /\[([^)]+)\]/;
        const desiredUrl = document.getElementById("url").value.toLowerCase();
        
        // check if url is valid.
        if (!desiredUrl.includes("haaretz") && !desiredUrl.includes("themarker")) {
            return;
        }

        const dummyUrl = desiredUrl.includes("haaretz") ? HAARETZ_BASE_PLACEHOLDER_URL : THE_MARKER_BASE_PLACEHOLDER_URL;
        
        // sanitize query string from desiredURL (if exists)
        if (desiredUrl.includes("?")) {
            desiredUrl = desiredUrl.substr(0, desiredUrl.indexOf("?"));
        }

        const articleIdIndex = desiredUrl.search(/1./);
        setTimeout(() => window.location.replace(dummyUrl.replace(regExp, desiredUrl.substr(articleIdIndex, desiredUrl.length))), 500);


    }) 

});