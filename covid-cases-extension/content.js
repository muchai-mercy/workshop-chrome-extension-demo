chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'covid cases') {
    chrome.runtime.sendMessage('', {
      type: 'Stay home',
      options: {
        title: 'STAY AT HOME',
        message: 'Stay safe, we will notify you shortly on total covid cases!',
        type: 'basic',
        iconUrl: 'images/house-128.png'
      }
    });
    getCases()
  }
});


async function getCases() {
  let res = await fetch("https://corona.lmao.ninja/v2/all", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (res.status == 200) {
    let json = await res.json();
    setTimeout((
      await chrome.runtime.sendMessage('', {
        type: 'active cases',
        options: {
          title: 'TOTAL CASES 😷',
          message: `
          The total cases discovered today: ${formatNumber(json.todayCases)}\nThe total cases recorded: ${formatNumber(json.cases)}
          `,
          type: 'basic',
          iconUrl: 'images/house-128.png'
        }
      }), 1000));
    return json;
  } else {
    await chrome.runtime.sendMessage('', {
      type: 'error',
      options: {
        title: 'ERROR FETCHING DATA 😷',
        message: res.status,
        type: 'basic',
        iconUrl: 'images/house-128.png'
      }
    });
    throw new Error(res.status);
  }
}

function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
