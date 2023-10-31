const url = `${process.env.PUBLIC_URL}/tabs.json`;

export const getTabs = () =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      let response = await fetch(url);

      if (response.ok) {
        let json = await response.json();
        resolve(json);
      } else {
        reject(new Error('failed'));
      }
    }, 300);
  });
