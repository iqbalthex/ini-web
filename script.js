const qSA = q => document.querySelectorAll(q);
const gId = id => document.getElementById(id);

const prevSmt = () => {
	const smt = getId("smt");
	smt.innerHTML > 1 && smt.innerHTML--;
	smt.innerHTML = smt.innerHTML;
}

const nextSmt = () => {
	const smt = getId("smt");
	smt.innerHTML < 8 && smt.innerHTML++;
	smt.innerHTML = smt.innerHTML;
}

const hambEnter = () => {
	span.forEach(e => {
		e.style.background = "#3ff";
	});
}

const hambLeave = () => {
	span.forEach(e => {
		e.style.background = "#000";
	});
}

const hambClick = e => {
	if (e.checked){
		hamb.style.transform = "translate(100%,200%)";
		leftAside.style.transform = "initial";
	} else {
		hamb.style.transform = "initial";
		leftAside.style.transform = "translateX(-100%)";
	};
}

const hamb = gId("hamb");
const span = qSA("header span");
const hambBtn = qSA("header input");
const leftAside = gId("left-aside");




((i=.2) => {
	span.forEach(e => {
		e.style.transition = `all ${i}s`;
		i += .5;
	});
})();