chrome.runtime.onMessage.addListener((request) => {
  if (request.message === 'covid-cases') {
    fetch('https://covid-19-statistics.p.rapidapi.com/reports/total', {
      method: 'GET',
      headers: {
        "X-RapidAPI-Key": "6297ce111fmsh0c306c1b013cc90p1617d6jsn81563106ae9c",
        'Content-Type': 'application/json'
      }
    }).then((res) => {
    console.log('RES', res);
    chrome.runtime.sendMessage('', {
      type: 'Stay home',
      options: {
        title: 'STAY AT HOME 😷',
        message: 'Stay safe and stay at home dear!',
        type: 'basic',
        iconUrl: 'icons/icon-128.png'
      }
    });
  })
  }
});
