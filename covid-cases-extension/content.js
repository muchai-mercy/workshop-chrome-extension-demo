chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'covid cases') {
    chrome.runtime.sendMessage('', {
      type: 'Stay home',
      options: {
        title: 'STAY AT HOME 😷',
        message: 'Stay safe and stay at home!',
        type: 'basic',
        iconUrl: 'images/house-128.png'
      }
    });
    console.log('ARE WE EVEN HERE??')
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
    console.log('>>>>>>>', json);
    await chrome.runtime.sendMessage('', {
      type: 'active cases',
      options: {
        title: 'TOTAL CASES 😷',
        message: `The total cases: ${formatNumber(json.cases)} people`,
        type: 'basic',
        iconUrl: 'images/house-128.png'
      }
    });
    return json;
  }
  throw new Error(res.status);
}

function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
