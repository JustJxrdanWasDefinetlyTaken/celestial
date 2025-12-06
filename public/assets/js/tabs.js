    const tabCount = 0;
    const iframeDiv = document.getElementById("iframes")
    
    function newTab() {
        const iframe = document.createElement("iframe")
        tabCount++
        iframe.setAttribute("id", tabCount)
        iframeDiv.append(iframe)
        // add the ui element for tab
    }

function closeTab(tabNumber) {
	const frames = document.querySelectorAll("iframe");
	[...frames].forEach((frame) => {
		if (frame.id === `frame-${tabNumber}`) {
			frame.remove();
		}
	});

	if (currentTab === tabNumber) {
		const otherFrames = document.querySelectorAll('iframe[id^="frame-"]');
		if (otherFrames.length > 0) {
			switchTab(parseInt(otherFrames[0].id.replace("frame-", "")));
		} else {
			newTab();
		}
    }
    // remove the ui element for tab
}