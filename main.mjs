import ControlTareas from "./ControlTareas.mjs";
import TareaMantenimiento from "./TareaMantenimiento.mjs";

const tarea1 = new TareaMantenimiento('pc', 'rico', new Date(2023, 11, 10), false)
const tarea2 = new TareaMantenimiento('p3', 'ricote', new Date(2023, 11, 12), false)
const tarea3 = new TareaMantenimiento('pctica', 'ricotiti', new Date(2023, 11, 13), false)

const control = new ControlTareas()

control.agregarTarea(tarea1, tarea2, tarea3)
control.eliminarTarea(tarea3)
control.editarTarea(tarea1, {equipo: 'p3', descripcion: 'new', fechaVencimiento: new Date(2024, 5, 5)})

console.log(control.getTareas())
console.log(control.tareasPendientesEquipo())