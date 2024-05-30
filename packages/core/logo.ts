export default function () {
  if (PROD) {
    const logo = `
_________________________________________________________
  _           _                    _____  _ 
 | |         | |                  |  __ \\| | 
 | |     ___ | |_ _   _ ___ ______| |__) | |_   _ ___ 
 | |    / _ \\| __| | | / __|______|  ___/| | | | / __|
 | |___| (_) | |_| |_| \\__ \\      | |    | | |_| \\__ \\
 |______\\___/ \\__|\\__,_|___/      |_|    |_|\\__,_|___/
_________________________________________________________
               author: Rooon-K
`;
    const rainbowGradient = `
     background: linear-gradient(135deg, orange 60%, cyan);
     background-clip: text;
     color: transparent;
     font-size: 16px;
     line-height: 1;
     font-family: monospace;
     font-weight: 600;
    `;
    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log("[Lotus-Plus]: dev mode");
  }
}
