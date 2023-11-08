import { decode } from '../utils/base64url';

interface RelayServerInfo {
  code?: string
  id?: string
  url?: string
}

// TEST code >> eyJ1cmwiOiJodHRwOi8vamZlLnRob3JudG9uLmxhbiIsImNvZGUiOiIxMjM0NTYiLCJpZCI6ImthamRmb3dpbnVpbmZhZmtqbiJ9

function tryRedirect() {
  const params = new URLSearchParams(location.search);
  const codeParam = params.get('code');
  
  if (!codeParam) {
    // TODO: Show error message
    console.error('MISSING URL PARAM!');
    return;
  }
  
  try {
    const server: RelayServerInfo = JSON.parse(decode(codeParam));
    if (!server.code || !server.url) {
      throw new Error(`Missing code or url from server object', ${JSON.stringify(server)}`);
    }
    
    window.location.href = new URL(`${server.url}/web/#/quickconnect?code=${server.code}`).toString();
  } catch (err) {
    // TODO: Show error message
    console.error('UNABLE TO PARSE SERVER OBJECT', err);
  }
}

tryRedirect();
