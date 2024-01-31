window.onload = vkscript();

function vkscript () 
{
	var vk = document.createElement('script');
            vk.src = 'https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js';
            document.getElementsByTagName('head')[0].appendChild(vk);
	    vkBridge.send('VKWebAppInit', {});
}