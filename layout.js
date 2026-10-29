/* Shared top bar, header and footer for inner pages. Usage: <div id="header" data-active="Contact"></div> ... <div id="footer"></div> */
const ico = {
  heart: '<path d="M12 21s-8-5.4-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.6-8 11-8 11z"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4h11L21 7H6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
};
const svg = (k, s = 26) => <svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">${ico[k]}</svg>;
const active = document.getElementById('header')?.dataset.active;
const link = (h, t) => <a href="${h}" class="pb-1 ${active === t ? 'border-b border-black/50' : ''}">${t}</a>;

document.getElementById('header').innerHTML = `
<div class="relative flex h-12 items-center justify-center bg-black px-4 text-white">
  <p class="text-xs sm:text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" class="ml-2 font-semibold underline">ShopNow</a></p>
  <select class="absolute right-4 hidden bg-black text-sm text-white sm:block lg:right-[135px]"><option>English</option><option>Urdu</option></select>
</div>
<header class="border-b border-black/30">
  <div class="mx-auto flex max-w-[1170px] items-center justify-between px-4 pb-4 pt-10">
    <a href="index.html" class="font-['Inter'] text-2xl font-bold tracking-wide">Exclusive</a>
    <nav class="hidden gap-12 md:flex">${link('index.html', 'Home')}${link('contact.html', 'Contact')}${link('about.html', 'About')}${link('signup.html', 'Sign Up')}</nav>
    <div class="flex items-center gap-6">
      <div class="hidden h-[38px] w-[243px] items-center justify-between rounded bg-[#F5F5F5] px-5 lg:flex">
        <input class="w-full bg-transparent text-xs outline-none placeholder:text-black/50" placeholder="What are you looking for?">${svg('search', 20)}
      </div>
      <a href="wishlist.html">${svg('heart')}</a><a href="cart.html">${svg('cart')}</a><a href="account.html">${svg('user')}</a>
    </div>
  </div>
</header>`;

document.getElementById('footer').innerHTML = `
<footer class="mt-[140px] bg-black text-white">
  <div class="mx-auto grid max-w-[1170px] gap-10 px-4 py-20 sm:grid-cols-2 lg:grid-cols-5">
    <div class="space-y-4"><h3 class="font-['Inter'] text-2xl font-bold">Exclusive</h3><h4 class="text-xl">Subscribe</h4><p>Get 10% off your first order</p>
      <div class="flex w-[217px] items-center rounded border border-white px-4 py-3"><input type="email" placeholder="Enter your email" class="w-full bg-transparent text-sm outline-none placeholder:text-white/50"><button>➤</button></div></div>
    <div class="space-y-4"><h4 class="text-xl">Support</h4><p>111 Bijoy sarani, Dhaka,<br>DH 1515, Bangladesh.</p><p>exclusive@gmail.com</p><p>+88015-88888-9999</p></div>
    <div class="space-y-4"><h4 class="text-xl">Account</h4><a class="block" href="account.html">My Account</a><a class="block" href="login.html">Login / Register</a><a class="block" href="cart.html">Cart</a><a class="block" href="wishlist.html">Wishlist</a><a class="block" href="#">Shop</a></div>
    <div class="space-y-4"><h4 class="text-xl">Quick Link</h4><a class="block" href="#">Privacy Policy</a><a class="block" href="#">Terms Of Use</a><a class="block" href="#">FAQ</a><a class="block" href="contact.html">Contact</a></div>
    <div class="space-y-4"><h4 class="text-xl">Download App</h4><small class="block text-xs text-white/70">Save $3 with App New User Only</small>
      <div class="flex gap-2"><div class="size-20 bg-white"></div><div class="flex flex-col gap-2 text-xs"><span class="rounded border border-white/60 px-4 py-2">Google Play</span><span class="rounded border border-white/60 px-4 py-2">App Store</span></div></div>
      <div class="flex gap-6 text-lg"><a href="#">f</a><a href="#">t</a><a href="#">ig</a><a href="#">in</a></div></div>
  </div>
  <div class="border-t border-white/20 py-4 text-center text-base text-white/30">© Copyright Rimel 2022. All right reserved</div>
</footer>`;