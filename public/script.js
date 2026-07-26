const btn = document.getElementById("auditBtn");

btn.addEventListener("click", async () => {

    const url = document.getElementById("url").value.trim();

    const result = document.getElementById("result");

    if (!url) {
        alert("Please enter a website URL.");
        return;
    }

    btn.disabled = true;
    btn.innerText = "Analyzing...";

    result.innerHTML = `
        <div class="loading">
            ⏳ Analyzing Website...
        </div>
    `;

    try {

        const response = await fetch("/audit", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                url
            })

        });

        const data = await response.json();

        let score = 100;

        if(data.metaDescription==="No meta description found")
            score -=20;

        if(data.h1Count===0)
            score-=20;

        score -= Math.min(data.imagesWithoutAlt,20);

        score=Math.max(score,0);

        const statusClass =
            data.status===200 ? "status-success":"status-error";

        result.innerHTML=`

            <h2 class="report-title">
                📊 SEO Audit Report
            </h2>

            <div class="score">
                🏆 SEO Score : ${score}/100
            </div>

            <div class="metric">
                <strong>✅ HTTP Status</strong>
                <span class="${statusClass}">
                    ${data.status}
                </span>
            </div>

            <div class="metric">
                <strong>⚡ Response Time</strong>
                <span>${data.responseTime}</span>
            </div>

            <div class="metric">
                <strong>📄 Page Title</strong>
                <span>${data.title}</span>
            </div>

            <div class="metric">
                <strong>📝 Meta Description</strong>
                <span>${data.metaDescription}</span>
            </div>

            <div class="metric">
                <strong>🔤 H1 Count</strong>
                <span>${data.h1Count}</span>
            </div>

            <div class="metric">
                <strong>🖼 Images Without Alt</strong>
                <span>${data.imagesWithoutAlt}</span>
            </div>

            <div class="metric">
                <strong>📚 Word Count</strong>
                <span>${data.wordCount}</span>
            </div>

        `;

    }

    catch(error){

        result.innerHTML=`

            <div class="error">

                ❌ Unable to analyze website.<br><br>

                ${error.message}

            </div>

        `;

    }

    finally{

        btn.disabled=false;

        btn.innerText="Analyze Website";

    }

});