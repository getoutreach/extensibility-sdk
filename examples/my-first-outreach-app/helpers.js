// This file is not interesting, it does not use the SDK at all.
// Use any framework that you like to do this stuff.
function renderMissing(title, message) {
  const container = document.createElement('div');
  container.className = 'block';
  const h2 = document.createElement('h2');
  container.append(h2, message);
  h2.append(title);
  document.body.append(container);
}

function renderObject(obj, title) {
  const container = document.createElement('div');
  container.className = 'block';
  const tit = document.createElement('h2');
  tit.append(title);
  container.append(tit);

  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] !== 'function') {
      const el = document.createElement('p');
      const text = typeof obj[k] === 'object' ? JSON.stringify(obj[k]) : obj[k];
      el.append(k + ': ' + text);
      container.append(el);
    }
  });
  document.body.append(container);
}

export function displayUserInfo(user) {
  if (!user) {
    return renderMissing('User info', 'You did not allow your extension to read any data about the current user.');
  }

  renderObject(user, 'User info');
}

export function displayProspectInfo(prospect) {
  if (!prospect) {
    return renderMissing('Prospect info', 'Prospect info is only available for Prospect tab extensions.');
  }

  renderObject(prospect, 'Prospect info');
}

export function displayEmailInfo(email) {
  if (!email) {
    return renderMissing('Email info', 'Email info is only available for Editor extensions.');
  }

  renderObject(email, 'Email info');
}
