document.querySelector('#header__icon').onclick = (e)=>{
				e.preventDefault();
			document.querySelector('body').classList.toggle('with--sidebar');
}

document.querySelector('#site-cache').onclick = ()=>{
				document.querySelector('body').classList.remove('with--sidebar');
}

document.querySelectorAll(".menu_a").forEach(el=>el.onclick= ()=>{
		document.querySelector('body').classList.remove('with--sidebar');
})