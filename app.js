window.onbeforeunload = Unload;

function Unload()

{

if (event.clientY < 0)

{

return "S.V.P Grabe los datos antes de salir!!" ;

}

}