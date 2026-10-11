// Change these values when your public server address and supported versions are confirmed.
const SERVER = {
  javaAddress: "",
  javaVersion: "",
  bedrockAddress: "",
  bedrockPort: "",
  bedrockVersion: ""
};
const PLACEHOLDER = "Скоро";
function fillServerDetails(){
 const values={javaAddress:SERVER.javaAddress,javaVersion:SERVER.javaVersion,bedrockAddress:SERVER.bedrockAddress,bedrockPort:SERVER.bedrockPort,bedrockVersion:SERVER.bedrockVersion};
 document.querySelectorAll('[data-server]').forEach(el=>{const key=el.dataset.server;el.textContent=values[key]||PLACEHOLDER});
 document.querySelectorAll('[data-copy]').forEach(btn=>{const value=values[btn.dataset.copy];btn.disabled=!value;btn.title=value?'Скопировать адрес':'Адрес пока не опубликован';btn.style.opacity=value?'1':'.5'});
}
const toast=document.querySelector('.toast');
let toastTimer;
function notify(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{let value=SERVER[btn.dataset.copy];if(!value)return;try{await navigator.clipboard.writeText(value);notify('Адрес скопирован')}catch{notify('Не удалось скопировать адрес')}}));
document.querySelectorAll('[data-soon]').forEach(btn=>btn.addEventListener('click',()=>notify('Покупки появятся позже')));
const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
fillServerDetails();
