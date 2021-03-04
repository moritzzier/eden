/**
 * Clickhandler für das Generieren der Identität
 */
function OnGenerate() {
	let strOut = '';
	let txtOut = null;

    console.log("Test")

	txtOut = document.getElementById('txt_out');

	console.log(typeof txtOut);
	// if(typeof txtOut === null)

	document.getElementById('txt_out').innerText = strOut;
}

window.addEventListener('load', () => {
    let btnGen = null;

    btnGen = document.getElementById('btn_gen');

    btnGen.addEventListener('click', OnGenerate);
});
