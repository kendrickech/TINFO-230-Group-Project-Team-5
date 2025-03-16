function showVietnamTip() {
    let tips = [
        "Always carry some cash, as small vendors may not accept cards.",
        "Use Grab (ride-hailing app) for fair-priced transport.",
        "Try street food at busy stalls - they are the freshest!",
        "Respect local customs - remove shoes when entering temples.",
        "Be cautious when crossing the streets; traffic is chaotic!"
    ];

    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("vietnam-tip").innerText = randomTip;
}