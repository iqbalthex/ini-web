const getId = id => document.getElementById(id);

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